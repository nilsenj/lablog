import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {ToastrService} from "../../services/toastr.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})

export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;
    error = "";

    constructor(private router: Router,
                private authenticationService: AuthenticationService,
                private toastrService: ToastrService) {
    }

    ngOnInit(): void {
        // reset login status
        if(this.authenticationService.token) {
            this.authenticationService.logout();
        }
    }

    login(): void {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(["/posts"]);
                    this.authenticationService.userEvent.emit(result);
                    this.toastrService.add("info", "You are logged in!");
                } else {
                    this.error = "Username or password is incorrect";
                    this.loading = false;
                }
            }, (result) => {
                this.error = "Username or password is incorrect";
                this.loading = false;
            });
    }
}
