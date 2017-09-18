import {EventEmitter, Inject, Injectable, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import {app} from "../../config/app";

@Injectable()
export class SearchService {
    constructor(@Inject(Http) private http: Http) {
    }
    public searchQuery(search: string): Observable<any> {
        // get users from api
        return this.http.get(app.api_url + "/api/blog/search?search=" + search)
            .map((response: Response) => response.json());
    }

    public requestAutocompleteItems(text: string): Observable<Response> {
        let url: string = app.api_url + "/search?search="+ text;
        return this.http
            .get(url)
            .map(data => data.json());
    }
}
