import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../models/Post";
import {PostService} from "../../services/post.service";
import {ToastrService} from "../../services/toastr.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FileUploadService} from "../../services/file-upload.service";
import {Observable} from "rxjs/Observable";
import {app} from "../../../config/app";
import {Http} from "@angular/http";

@Component({
    selector: "app-edit-post",
    templateUrl: "./edit-post.component.html",
    styleUrls: ["./edit-post.component.scss"]
})
export class EditPostComponent implements OnInit {

    public post: Post;
    @Input() public postForm: FormGroup;
    public canSavePost: boolean = false;
    public loading: boolean = false;
    public emitter = new EventEmitter();
    public toggles = [
        {value: true, display: "Available"},
        {value: false, display: "Not Available"},
    ];
    public sub: any;
    public id: number;
    public authenticated: boolean = false;
    public user = {};
    public showDebug: boolean = false;
    public fileEvent;
    public tmpFileSrc: string = null;
    public postLoaded: boolean = false;
    constructor(public postBuilder: FormBuilder,
                public postService: PostService,
                public toastrService: ToastrService,
                public route: Router,
                public router: ActivatedRoute,
                public fileUpload: FileUploadService,
                private http: Http) {

        this.sub = this.router.params.subscribe(params => {
            let id: number = +params['id'];
            this.id = id;
        });
        let user = JSON.parse(localStorage.getItem("currentUser"));
        if (user && user.token) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        this.user = user;
    }

    ngOnInit(): void {
        this.findPost(this.id);

        this.emitter.subscribe((data) => {
            this.createForm();
            if (this.postForm.valid) {
                this.canSavePost = true;
            } else {
                this.canSavePost = false;
            }
            this.postLoaded = true;
        });
    }

    public onChange(): void {
    }

    public onReady(): void {
    }

    public onFocus(): void {
    }

    public onBlur(): void {
    }

    public getDisplayToggles(): string {
        if (this.post.available) {
            return this.toggles[0].display;
        } else {
            return this.toggles[1].display;
        }
    }

    public updatePost(form: any): void {
        this.loading = true;
        if (!this.postForm.valid) {
            this.toastrService.add("error",
                "Form not valid! Try once more");
        } else {
            this.postService.updatePost(this.post).subscribe((response) => {
                if(this.fileEvent) {
                    this.fileUpload.fileUpload(this.fileEvent, this.post)
                        .subscribe(
                            data => {
                                console.log("success");
                                this.toastrService.add("success", "Your Post Has been saved!");
                                this.route.navigate(["/posts/", response.post.id]);
                            },
                            error => {
                                this.toastrService.add("error", "Sorry! Your Post image has been updated!");
                                this.route.navigate(["/posts/update/", response.post.id]);
                                console.log(error);
                            }
                        );
                } else {
                    this.toastrService.add("success", "Your Post Has been saved!");
                    this.route.navigate(["/posts/", response.post.id]);
                }
            }, (error) => {
                console.log(error);
                this.toastrService.add("error", "Code: " +
                    error.status + "! Error during post update!" +
                    "Reason: " + error.statusText);
            });
        }
        this.loading = false;
    }

    private createForm(): void {
        this.postForm = this.postBuilder.group({
            name: [this.post.name, [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(255)]
            ],
            preamble: [this.post.preamble, [
                Validators.required,
                Validators.minLength(50),
                Validators.maxLength(500)]
            ],
            body: [this.post.body, [
                Validators.required,
                Validators.minLength(120),
                Validators.maxLength(50000)]
            ],
            tagged: [this.post.tagged, []
            ],
            available: ["", Validators.required],
        });
    }

    public fileChange(event): void {
        this.fileEvent = event;
        this.readInput();
    }

    public readInput(): void {
        let input = this.fileEvent;
        let that = this;
        if (input.target.files && input.target.files[0]) {
            let reader: FileReader = new FileReader();
            reader.readAsDataURL(input.target.files[0]);
            reader.onload = () => {
                this.tmpFileSrc = reader.result;
            };
        }
    }

    public findPost(id: number): void {
        this.postService.findPost(id).subscribe((data) => {
            this.post = data.post;
            this.post.available = data.post.available ? true : false;
            this.emitter.emit("received");
        });
    }

    public requestAutocompleteItems(text: string): Observable<Response> {
        let url = app.api_url + `/tagsPostSearch?q=${text}`;
        return this.http
            .get(url)
            .map(data => data.json());
    };
}
