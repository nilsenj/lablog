import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {LikeService} from "../../services/like.service";
import {Like} from "../../models/Like";
import {ToastrService} from "../../services/toastr.service";

@Component({
    selector: "app-like",
    templateUrl: "./like.component.html",
    styleUrls: ["./like.component.scss"]
})
export class LikeComponent implements OnInit {

    @Input() public isLiked: boolean = false;
    @Input() public model: string = "";
    @Input() public like_counter: number;
    @Input() public model_id: number;
    @Output() public likeChanged = new EventEmitter();
    public token;

    constructor(public likeService: LikeService, public toastr: ToastrService) {
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser && currentUser.token;
    }

    public ngOnInit(): void {
        this.likeChanged.subscribe(() => {
            this.likesModelStatus();
        });
    }

    public likeToggle(): void {
        let like: Like = {
            "model": this.model,
            "model_id": this.model_id
        };
        this.likeService.likeToggle(like).subscribe((response) => {
            this.likeChanged.emit("changed");
            this.toastr.add("info", response.msg);
        }, error => {
            this.toastr.add("error", error.msg);
        });
    }

    public likesModelStatus(): void {
        let like: Like = {
            "model": this.model,
            "model_id": this.model_id
        };
        this.likeService.likesModelStatus(like).subscribe((response) => {
            this.isLiked = response.status;
            this.like_counter = response.likes_counter;
        }, error => {
            console.log(error);
        });
    }
}
