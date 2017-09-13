import {Inject, Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import {app} from "../../config/app";
import {Post} from "../models/Post";

@Injectable()
export class FileUploadService {

    public token: string;
    constructor(@Inject(Http) private http: Http) {
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser && currentUser.token;
    }

    fileUpload(event, post): Observable<any> {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append("file", file, file.name);
            formData.append("post_id", post.id);
            let headers: Headers = new Headers({"Authorization": "Bearer " + this.token});
            let options: RequestOptions = new RequestOptions({headers: headers});
            // get users from api
            return this.http.post(`${app.api_url}/api/blog/file/uploadFile`, formData, options)
                .map((response: Response) => response.json());
        }
    }
}
