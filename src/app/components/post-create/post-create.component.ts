import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from "@angular/core";
import {Post} from "../../models/Post";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {ToastrService} from "../../services/toastr.service";
import {Router} from "@angular/router";
import {FileUploadService} from "../../services/file-upload.service";

@Component({
    selector: "app-post-create",
    templateUrl: "./post-create.component.html",
    styleUrls: ["./post-create.component.scss"]
})
export class PostCreateComponent implements OnInit {
    @Input() public post: Post;
    @Input() public postForm: FormGroup;
    public imageFile?: File;
    public canSavePost: boolean = false;
    public loading: boolean = false;
    public toggles = [
        {value: true, display: "Available"},
        {value: false, display: "Not Available"},
    ];
    public showDebug: boolean = false;
    public fileEvent;
    public tmpFileSrc: string = null;

    constructor(public postBuilder: FormBuilder,
                public postService: PostService,
                public toastrService: ToastrService,
                public route: Router,
                public fileUpload: FileUploadService) {
    }

    ngOnInit(): void {
        this.post = {
            name: "",
            preamble: "",
            body: "",
            available: false
        };
        this.createForm();
        if (this.postForm.valid) {
            this.canSavePost = true;
        } else {
            this.canSavePost = false;
        }
    }

    public getDisplayToggles(): string {
        if (this.post.available) {
            return this.toggles[0].display;
        } else {
            return this.toggles[1].display;
        }
    }

    public savePost(form: any): void {
        this.loading = true;
        if (!this.postForm.valid) {
            this.toastrService.add("error",
                "Form not valid! Try once more");
        } else {
            this.postService.savePost(this.post).subscribe((response) => {
                if (this.fileEvent) {
                    this.fileUpload.fileUpload(this.fileEvent, response.post)
                        .subscribe(
                            data => {
                                this.toastrService.add("success", "Your Post Has been saved!");
                                this.route.navigate(["/posts/", response.post.id]);
                            },
                            error => {
                                this.toastrService.add("error", "Sorry! Your Post image has been updated!");
                                this.route.navigate(["/posts/update/", response.post.id]);
                            }
                        );
                } else {
                    this.toastrService.add("success", "Your Post Has been saved!");
                    this.route.navigate(["/posts/", response.post.id]);
                }
            }, (error) => {
                console.log(error);
                this.toastrService.add("error", "Code: " +
                    error.status + "! Error during post save!" +
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
            tagged: [this.post.tagged, []],
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
    public onChange(): void {
    }

    public onReady(): void {
    }

    public onFocus(): void {
    }

    public onBlur(): void {
    }
}
