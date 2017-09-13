import {Component, EventEmitter, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";
import {Post} from "../../models/Post";
import {ToastrService} from "../../services/toastr.service";
import * as $ from "jquery";
import * as hljs from "highlight.js/lib/index";

@Component({
    selector: "app-post",
    templateUrl: "./post.component.html",
    styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
    public sub: any;
    public id: number;
    public post;
    public authenticated: boolean = false;
    public user = {};
    public published: string = "not published";
    public emitter = new EventEmitter();

    constructor(public route: ActivatedRoute,
                public postService: PostService,
                public toastrService: ToastrService) {
        this.sub = this.route.params.subscribe(params => {
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

    public ngOnInit(): void {
        this.findPost(this.id);
    }

    public findPost(id: number): void {
        this.postService.findPost(id).subscribe((data) => {
            this.post = data.post;
            this.post.available = this.post.available ? true : false;
            this.post.published = this.post.available ? "published" : "not published";
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
