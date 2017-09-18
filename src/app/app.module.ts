import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, Injectable, NgModule, Injector} from '@angular/core';
import {AppComponent} from './app.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "./guards/auth.guard";
import {AuthenticationService} from "./services/authentication.service";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {UserComponent} from "./components/user/user.component";
import {ToastModule, ToastOptions} from "ng2-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrService} from "./services/toastr.service";
import {CustomToastr} from "./support/CustomToastr";
import { PostsComponent } from "./components/posts/posts.component";
import {PostService} from "./services/post.service";
import { PostComponent } from "./components/post/post.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { PostNavComponent } from "./components/post-nav/post-nav.component";
import {DisqusModule} from "ngx-disqus";
import { PersonalPostsComponent }
from "./components/personal-posts/personal-posts.component";
import { PostCreateComponent }
from "./components/post-create/post-create.component";
import { ControlMessagesComponent } from "./components/control-messages/control-messages.component";
import {ValidationService} from "./services/validation.service";
import { CKEditorModule } from "ng2-ckeditor";
import { KeepHtmlPipe } from './pipes/keep-html.pipe';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { DeletePostComponent } from './components/delete-post/delete-post.component';
import {UserAllowedToPostGuardGuard} from "./guards/user-allowed-to-post-guard.guard";
import { HighlightJsModule, HighlightJsService } from "angular2-highlight-js";
import { ConfirmComponentComponent } from "./components/confirm-component/confirm-component.component";
import { BootstrapModalModule } from "ng2-bootstrap-modal";
import {FileUploadService} from "./services/file-upload.service";
import { TagInputModule } from "ngx-chips";
import { LikeComponent } from './components/like/like.component';
import {LikeService} from "./services/like.service";
import { SearchComponent } from './components/search/search.component';
import {SearchService} from "./services/search.service";
import {
    ActivatedRouteSnapshot, DetachedRouteHandle, Route, Router, RouteReuseStrategy,
    RouterModule
} from "@angular/router";
import {ZoneListener} from "./support/zone.listener";
import {appRoutes} from "./routes";
let base = document.querySelector("#base");

let useHash = false;
if (base) {
    useHash = false;
}

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        WelcomeComponent,
        NavigationComponent,
        UserComponent,
        PostsComponent,
        PostComponent,
        PaginationComponent,
        PostNavComponent,
        PersonalPostsComponent,
        PostCreateComponent,
        ControlMessagesComponent,
        KeepHtmlPipe,
        EditPostComponent,
        DeletePostComponent,
        ConfirmComponentComponent,
        LikeComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes, {
            useHash: useHash,
            enableTracing: true
        }),
        TagInputModule,
        BrowserAnimationsModule,
        ToastModule.forRoot(),
        DisqusModule.forRoot("blog-dev-6"),
        CKEditorModule,
        HighlightJsModule,
        BootstrapModalModule.forRoot({container:document.body})
    ],
    providers: [
        ZoneListener,
        AuthenticationService,
        AuthGuard,
        UserAllowedToPostGuardGuard,
        ToastrService,
        {provide: ToastOptions, useClass: CustomToastr},
        PostService,
        ValidationService,
        HighlightJsService,
        FileUploadService,
        LikeService,
        SearchService
    ],
    entryComponents: [
        ConfirmComponentComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
