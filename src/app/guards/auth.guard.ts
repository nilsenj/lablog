import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {ToastrService} from "../services/toastr.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private toastrService: ToastrService) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (localStorage.getItem("currentUser")) {
            // logged in so return true
            return true;
        }
        this.toastrService.add("warning", "You are not allowed. Please log in!");
        // not logged in so redirect to login page
        this.router.navigate(["/login"]);
        return false;
    }
}
