import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";
import {Post} from "../../models/Post";
import {ToastrService} from "../../services/toastr.service";

@Component({
    selector: "app-post",
    templateUrl: "./post.component.html",
    styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
    public sub: any;
    public id: number;
    public post;

    constructor(public route: ActivatedRoute,
                public postService: PostService,
                public toastrService: ToastrService) {
        this.sub = this.route.params.subscribe(params => {
            let id: number = +params['id'];
            this.id = id;
        });
    }

    public ngOnInit(): void {
        this.findPost(this.id);
    }

    public findPost(id: number): void {
        this.postService.findPost(id).subscribe((data) => {
            this.post = data.post;
        });
    }

    public onComment(value: any): void {
        console.log("Commented: " + value);
        this.toastrService.add("success", "Your comment successfully added!");
    }

    public onReady(value: any): void {
        console.log("Component Ready: " + value);
    }

    public onPaginate(value: any): void {
        console.log("Comment paginated: " + value);
    }

}
