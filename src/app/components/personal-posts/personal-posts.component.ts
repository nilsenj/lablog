import {Component, OnInit} from "@angular/core";
import {Post} from "../../models/Post";
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "../../services/toastr.service";

@Component({
    selector: "app-personal-posts",
    templateUrl: "./personal-posts.component.html",
    styleUrls: ["./personal-posts.component.scss"]
})
export class PersonalPostsComponent implements OnInit {

    public posts: Post[];
    public pagination;
    public sub;
    public page;

    constructor(public postService: PostService,
                private route: ActivatedRoute,
                private toastrService: ToastrService) {
    }

    ngOnInit(): void {
        this.sub = this.route.queryParams.subscribe(params => {
            let page = +params['page'];
            if (!page) {
                page = 1;
            }
            this.page = page;
        });
        this.all(this.page);
    }

    public pageUpdated(page: number): void {
        window.scrollTo(0, 0);
        this.all(page);
    }

    public all(page: number): void {
        this.postService.getPersonalPosts(page).subscribe((response) => {
            // get body data
            this.posts = response.items.data;
            delete(response.items.data);
            this.pagination = response.items;
        }, response => {
            // error callback
            this.toastrService.add("error", "Error during posts render");
        });
    }
}
