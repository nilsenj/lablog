import {Component, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import {PostService} from "../../services/post.service";
import {Post} from "../../models/Post";
import {ToastrService} from "../../services/toastr.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "app-posts",
    templateUrl: "./posts.component.html",
    styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {

    public posts: Post[];
    public pagination;
    public sub;
    public page;
    public authenticated: boolean = false;
    public user = {};
    constructor(public postService: PostService,
                private route: ActivatedRoute,
                private toastrService: ToastrService) {
        let user = JSON.parse(localStorage.getItem("currentUser"));
        if(user && user.token) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        this.user = user;
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
        this.postService.getPosts(page).subscribe((response) => {
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
