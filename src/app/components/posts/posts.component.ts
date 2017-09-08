import {Component, OnInit} from "@angular/core";
import {PostService} from "../../services/post.service";
import {Post} from "../../models/Post";
import {ToastrService} from "../../services/toastr.service";

@Component({
    selector: "app-posts",
    templateUrl: "./posts.component.html",
    styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {

    public posts: Post[];

    constructor(public postService: PostService,
                private toastrService: ToastrService) {
    }

    ngOnInit(): void {
        this.postService.getPosts().subscribe((data) => {
            this.posts = data.posts;
        }, (error) => {
            this.toastrService.add("error", "Error during posts render");
        });
    }

}
