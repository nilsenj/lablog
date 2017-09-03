import {EventEmitter, Inject, Injectable, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import {app} from "../../config/app";
import {User} from "../models/User";
import {arrays} from "../helpers/arrays";
import {ToastrService} from "./toastr.service";

@Injectable()
export class AuthenticationService {


    /**
     * @param token {string}
     */
    public token: string;
    /**
     * emit events
     *
     * @type {EventEmitter}
     */
    public userEvent: EventEmitter<any> = new EventEmitter();
    @Output() userChange = new EventEmitter();
    @Input() user: any;
    @Input() authenticated: boolean;

    constructor(@Inject(Http) private http: Http,
                private toastrService: ToastrService) {
        // set token if saved in local storage
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser && currentUser.token;
    }

    /**
     * register this asshole
     *
     * @param email
     * @param password
     * @returns {Observable<R>}
     */
    login(email: string, password: string): Observable<boolean> {
        return this.http.post(app.api_url + "/api/login", {email: email, password: password})
            .map((response: Response) => {
                    // login successful if there's a jwt token in the response
                    let token = response.json() && response.json().meta.token;
                    if (token) {
                        // set token property
                        this.token = token;
                        this.userEvent.emit(response.json());
                        let name = response.json().data.name ? response.json().data.name : "";

                        // store email and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem("currentUser",
                            JSON.stringify({name: name, email: email, token: token}));
                        this.getUser();
                        this.userChange.emit(response.json());

                        // return true to indicate successful login
                        return true;
                    } else {
                        // return false to indicate failed login
                        return false;
                    }
                }
            );
    }

    getUser(): any {
        let that: AuthenticationService = this;

        this.user = this.getAuthenticatedUser().subscribe(users => {
            if (that.token) {
                that.user = arrays.transformToArray(users);
                that.authenticated = true;
                this.userChange.emit(this.user);
            }
        }, (error) => {
            that.user = [];
            that.authenticated = false;
            localStorage.removeItem("currentUser");
            localStorage.removeItem("io");
            this.userChange.emit(null);
            that.logout();
        });

        return this.user;
    }

    /**
     * get all users
     *
     * @returns {Observable<R>}
     */
    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({"Authorization": "Bearer " + this.token});
        let options = new RequestOptions({headers: headers});

        // get users from api
        return this.http.get(app.api_url + "/api/users", options)
            .map((response: Response) => response.json());
    }

    /**
     * get the authenticated user
     *
     * @returns {Observable<R>}
     */
    getAuthenticatedUser(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({"Authorization": "Bearer " + this.token});
        let options = new RequestOptions({headers: headers});

        // get users from api
        return this.http.get(app.api_url + "/api/user", options)
            .map((response: Response) => response.json());
    }

    /**
     * register this user
     *
     * @param {string} name
     * @param {string} email
     * @param {string} password
     * @param {string} confirm
     * @returns {Observable<boolean>}
     */
    register(name: string, email: string, password: string, confirm: string): Observable<boolean> {
        return this.http.post(app.api_url + "/api/register", {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirm
        })
            .map((response: Response) => {
                // register successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;
                    this.userEvent.emit(response.json());
                    let name = response.json().name ? response.json().name : "";
                    let id = response.json().id ? response.json().id : 0;
                    let user = {id: id, name: name, email: email, token: token};
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem("currentUser", JSON.stringify(user));
                    this.user = user;
                    this.authenticated = true;
                    this.userChange.emit(this.user);

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    /**
     * logout fucking user
     */
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem("currentUser");
        this.userChange.emit(null);
        this.toastrService.add("info", "You are logged out!");
    }
}
