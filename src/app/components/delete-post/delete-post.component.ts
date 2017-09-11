import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";
import {ToastrService} from "../../services/toastr.service";

@Component({
    selector: "app-delete-post",
    templateUrl: "./delete-post.component.html",
    styleUrls: ["./delete-post.component.scss"]
})
export class DeletePostComponent implements OnInit {
    @Input() public post: Post;
    constructor(public router: Router,
                public postService: PostService,
                public toastr: ToastrService) {
    }

    ngOnInit() {
    }

    /**
     * delete selected post
     */
    public deletePost(): void {
        this.postService.deletePost(this.post.id).subscribe((data) => {
            this.toastr.add("Info", "Your Post Has been deleted!");
            this.router.navigate(["/posts"]);
        }, error => {
            this.toastr.add("Error", "Your Post hasn't been deleted!");
        });
    }

}
