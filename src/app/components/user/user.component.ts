import {Component, Input, OnInit} from "@angular/core";
import {User} from "../../models/User";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.scss"]
})

export class UserComponent implements OnInit {
    public user = User;
    public authService;

    constructor(authService: AuthenticationService) {
        this.authService = authService;
    }

    ngOnInit(): void {
        this.user = this.authService.user;
        this.authService.userChange.subscribe(data => {
            this.user = data;
        });
    }

}
