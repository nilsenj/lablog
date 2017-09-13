import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";
import {ToastrService} from "../../services/toastr.service";
import {ConfirmComponentComponent} from "../confirm-component/confirm-component.component";
import {DialogOptions, DialogService} from "ng2-bootstrap-modal";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: "app-delete-post",
    templateUrl: "./delete-post.component.html",
    styleUrls: ["./delete-post.component.scss"]
})
export class DeletePostComponent implements OnInit {
    @Input() public post: Post;
    public postName: string = "";

    constructor(public router: Router,
                public postService: PostService,
                public toastr: ToastrService,
                private dialogService: DialogService) {
    }

    ngOnInit(): void {
        this.postName = this.post.name;
    }

    showConfirm(): void {
        let options: DialogOptions = {
            backdropColor: "rgba(0,0,0,.4)"
        };
        let disposable: Subscription = this.dialogService.addDialog(ConfirmComponentComponent, {
            title: "Delete post",
            message: "Are you sure to delete: " + this.postName
        }, options).subscribe((isConfirmed) => {
            /**
             * We get dialog result
             */
            if (isConfirmed) {
                this.deletePost();
            }
        });
        setTimeout(() => {
            disposable.unsubscribe();
        }, 10000);
    }

    /**
     * delete selected post
     */
    public deletePost(): void {
        this.postService.deletePost(this.post.id).subscribe((data) => {
            this.toastr.add("info", "You have deleted post: " + this.postName);
            this.router.navigate(["/posts"]);
        }, error => {
            this.toastr.add("error", "Error during deleting post: " + this.postName);
        });
    }

}
