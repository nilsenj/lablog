import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AppRouterModule} from "./modules/router/approuter.module";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
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

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        HomeComponent,
        WelcomeComponent,
        NavigationComponent,
        UserComponent,
        PostsComponent,
        PostComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRouterModule,
        BrowserAnimationsModule,
        ToastModule.forRoot()
    ],
    providers: [
        AuthenticationService,
        AuthGuard,
        ToastrService,
        {provide: ToastOptions, useClass: CustomToastr},
        PostService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
