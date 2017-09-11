import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {ToastrService} from "../../services/toastr.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {

    model: any = {};
    loading = false;
    error = "";

    constructor(private router: Router,
                private authenticationService: AuthenticationService,
                private toastrService: ToastrService) {
    }

    ngOnInit(): void {
        // reset login status
        if (this.authenticationService.token) {
            this.router.navigate(["/posts"]);
            this.toastrService.add("warning", "You are already registered");
        } else {
            // this.authenticationService.logout();
        }
    }

    public register(): void {
        this.loading = true;
        this.authenticationService.register(
            this.model.name,
            this.model.email,
            this.model.password,
            this.model.confirm)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(["/posts"]);
                } else {
                    this.error = "Sorry your account isn\'t created";
                    this.loading = false;
                }
            }, (data) => {
                this.error = "Sorry your account isn\'t created";
                this.loading = false;
            });
    }
}
