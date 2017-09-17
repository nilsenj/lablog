import {EventEmitter, Inject, Injectable, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import {Like} from "../models/Like";
import {app} from "../../config/app";

@Injectable()
export class LikeService {

    public token;

    constructor(@Inject(Http) private http: Http) {
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser && currentUser.token;
    }

    /**
     * toggle like
     *
     * @param {Like} like
     * @returns {Observable<any>}
     */
    likeToggle(like: Like): Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({"Authorization": "Bearer " + this.token});
        let options = new RequestOptions({headers: headers});

        // get users from api
        return this.http.post(app.api_url + "/api/blog/likeToggle", like, options)
            .map((response: Response) => response.json());
    }

    /**
     * toggle like
     *
     * @param {Like} like
     * @returns {Observable<any>}
     */
    likesModelStatus(like: Like): Observable<any> {
        if (this.token) {
            // add authorization header with jwt token
            let headers = new Headers({"Authorization": "Bearer " + this.token});
            let options = new RequestOptions({headers: headers});

            // get users from api
            return this.http.get(app.api_url + "/api/blog/likesModelStatus?model=" + like.model + "&model_id=" + like.model_id, options)
                .map((response: Response) => response.json());
        } else {
            // get users from api
            return this.http.get(app.api_url + "/api/blog/likesModelStatus?model=" + like.model + "&model_id=" + like.model_id)
                .map((response: Response) => response.json());
        }
    }
}
