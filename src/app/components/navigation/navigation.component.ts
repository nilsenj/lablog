import {AfterViewInit, Component, Inject, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
    @Input() userChange: any;
    @Input() user: User[] = [];
    authenticated: boolean = false;

    public authService;
    constructor(authService: AuthenticationService) {
        this.authService = authService;
    }


    ngOnInit() {
        this.getUser();
        this.userChange.subscribe(data => {
            if (data) {
                this.user = data.user;
                this.authenticated = true;
            } else {
                this.user = null;
                this.authenticated = false;
            }
        });
    }

    getUser() {
        // get users from secure api end point
        if (this.authService.token) {
            this.user = this.authService.getUser();
            this.authenticated = true;

        } else {
            this.authenticated = false;
        }
    }

}
