import {Component, EventEmitter, OnInit, Output, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";
import {User} from "./models/User";
import {arrays} from "./helpers/arrays";
import {ToastsManager} from "ng2-toastr";
import {ToastrEvent, ToastrService} from "./services/toastr.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    user = [];
    authenticated: boolean = false;
    private toastrAdded: ToastrEvent;
    @Output() userChange = new EventEmitter();

    constructor(protected userService: AuthenticationService,
                public toastr: ToastsManager, vcr: ViewContainerRef,
                toastrService: ToastrService) {
        this.toastr.setRootViewContainerRef(vcr);
        toastrService.eventAdded$.subscribe(item => this.onToastrAdded(item));

    }

    private onToastrAdded(item: ToastrEvent): void {
        // do something with added item
        switch(item.name) {
            case 'success':
                this.showSuccess(item.message);
                break;
            case 'warning':
                this.showWarning(item.message);
                break;
            case 'error':
                this.showError(item.message);
                break;
            case 'info':
                this.showInfo(item.message);
                break;
            case 'custom':
                this.showCustom(item.message);
                break;
        }
        this.toastrAdded = item;
    }
    ngOnInit() {
        // get users from secure api end point
        this.getUser();
        this.userChanged();
    }

    userChanged(): void {
        this.userService.userChange.subscribe(data => {
            if (data) {
                this.user = data;
                this.authenticated = true;
                let dataStore = {
                    user: this.user,
                    authenticated: this.authenticated
                };
                this.userChange.emit(dataStore);
            } else {
                this.user = null;
                this.authenticated = false;
                this.userChange.emit(null);
            }
        })
    }

    // get users from secure api end point
    getUser(): void {
        if (this.userService.token) {
            this.user = this.userService.getUser();
            this.authenticated = true;
            let dataStore = {
                user: this.user,
                authenticated: this.authenticated
            };
            this.userChange.emit(dataStore);
        } else {
            this.authenticated = false;
            this.userChange.emit(null);
        }
    }

    showSuccess(message: string) {
        this.toastr.success(message, 'Success!');
    }

    showError(message: string) {
        this.toastr.error(message, 'Oops!');
    }

    showWarning(message: string) {
        this.toastr.warning(message, 'Alert!');
    }

    showInfo(message: string) {
        this.toastr.info(message);
    }

    showCustom(message) {
        this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
    }

}
