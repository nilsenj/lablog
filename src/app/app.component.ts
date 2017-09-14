import {Component, EventEmitter, OnInit, Output, ViewContainerRef} from "@angular/core";
import {AuthenticationService} from "./services/authentication.service";
import {ToastsManager} from "ng2-toastr";
import {ToastrEvent, ToastrService} from "./services/toastr.service";
import {routeAnimation} from "./app.animations";

interface IDataStore {
    user: any;
    authenticated: boolean;
}

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    animations: [routeAnimation],
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    public user = [];
    public authenticated: boolean = false;
    private toastrAdded: ToastrEvent;
    @Output() userChange = new EventEmitter();

    constructor(protected userService: AuthenticationService,
                public toastr: ToastsManager, vcr: ViewContainerRef,
                toastrService: ToastrService) {
        this.toastr.setRootViewContainerRef(vcr);
        toastrService.eventAdded$.subscribe(item => this.onToastrAdded(item));

    }

    public getState(outlet): void {
        return outlet.activatedRouteData.state;
    }

    ngOnInit(): void {
        // get users from secure api end point
        this.getUser();
        this.userChanged();
    }

    public userChanged(): void {
        this.userService.userChange.subscribe(data => {
            if (data) {
                this.user = data;
                this.authenticated = true;
                let dataStore: IDataStore = {
                    user: this.user,
                    authenticated: this.authenticated
                };
                this.userChange.emit(dataStore);
            } else {
                this.user = null;
                this.authenticated = false;
                this.userChange.emit(null);
            }
        });
    }

    // get users from secure api end point
    public getUser(): void {
        if (this.userService.token) {
            this.user = this.userService.getUser();
            this.authenticated = true;
            let dataStore: IDataStore = {
                user: this.user,
                authenticated: this.authenticated
            };
            this.userChange.emit(dataStore);
        } else {
            this.authenticated = false;
            this.userChange.emit(null);
        }
    }

    public showSuccess(message: string): void {
        this.toastr.success(message, "Success!");
    }

    public showError(message: string): void {
        this.toastr.error(message, "Oops!");
    }

    public showWarning(message: string): void {
        this.toastr.warning(message, "Alert!");
    }

    public showInfo(message: string): void {
        this.toastr.info(message);
    }

    public showCustom(message: string): void {
        this.toastr.custom("<span style=\"color: red\">Message in red.</span>",
            null, {enableHTML: true});
    }

    private onToastrAdded(item: ToastrEvent): void {
        // do something with added item
        switch (item.name) {
            case "success":
                this.showSuccess(item.message);
                break;
            case "warning":
                this.showWarning(item.message);
                break;
            case "error":
                this.showError(item.message);
                break;
            case "info":
                this.showInfo(item.message);
                break;
            case "custom":
                this.showCustom(item.message);
                break;
        }
        this.toastrAdded = item;
    }
}
