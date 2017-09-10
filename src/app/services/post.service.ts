import {EventEmitter, Inject, Injectable, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import {Post} from "../models/Post";
import {app} from "../../config/app";


@Injectable()
export class PostService {
    public token;

    constructor(@Inject(Http) private http: Http) {
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser && currentUser.token;
    }

    /**
     * get all users
     *
     * @returns {Observable<R>}
     */
    getPosts(page?: number): Observable<any> {
        // get users from api
        return this.http.get(app.api_url + "/api/blog/index?page=" + page)
            .map((response: Response) => response.json());
    }

    /**
     * get all users
     *
     * @returns {Observable<R>}
     */
    findPost(id: number): Observable<any> {
        // get users from api
        return this.http.get(app.api_url + "/api/blog/" + id)
            .map((response: Response) => response.json());
    }

    /**
     * get personal posts
     *
     * @param {number} page
     * @returns {Observable<any>}
     */
    getPersonalPosts(page?: number): Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({"Authorization": "Bearer " + this.token});
        let options = new RequestOptions({headers: headers});

        // get users from api
        return this.http.get(app.api_url + "/api/blog/personal?page=" + page, options)
            .map((response: Response) => response.json());
    }

    savePost(post: Post): Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({"Authorization": "Bearer " + this.token});
        let options = new RequestOptions({headers: headers});

        // get users from api
        return this.http.post(app.api_url + "/api/blog/store", post, options)
            .map((response: Response) => response.json());
    }
}
