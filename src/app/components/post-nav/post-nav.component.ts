import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";

@Component({
    selector: "app-post-nav",
    templateUrl: "./post-nav.component.html",
    styleUrls: ["./post-nav.component.scss"]
})
export class PostNavComponent implements OnInit {
    public authenticated: boolean = false;
    constructor(public location: Location) {
        let user = JSON.parse(localStorage.getItem("currentUser"));
        if(user && user.token) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
    }

    ngOnInit(): void {
    }

    public goBack(): void {
        this.location.back();
    }
}
