import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "../../components/login/login.component";
import {CanActivate, RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "../../components/register/register.component";
import {WelcomeComponent} from "../../components/welcome/welcome.component";
import {AuthGuard} from "../../guards/auth.guard";
import {UserComponent} from "../../components/user/user.component";
import {PostsComponent} from "../../components/posts/posts.component";
import {PostComponent} from "../../components/post/post.component";
import {PersonalPostsComponent} from "../../components/personal-posts/personal-posts.component";
import {PostCreateComponent} from "../../components/post-create/post-create.component";
import {EditPostComponent} from "../../components/edit-post/edit-post.component";
import {UserAllowedToPostGuardGuard} from "../../guards/user-allowed-to-post-guard.guard";

const appRoutes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "", component: WelcomeComponent},
    {path: "posts", component: PostsComponent, canActivate: []},
    {path: "posts/create", component: PostCreateComponent, canActivate: [AuthGuard]},
    {path: "posts/personal", component: PersonalPostsComponent, canActivate: [AuthGuard]},
    {path: "posts/update/:id", component: EditPostComponent, canActivate: [UserAllowedToPostGuardGuard]},
    {path: "posts/:id", component: PostComponent, canActivate: []},
    {path: "user", component: UserComponent, canActivate: [AuthGuard]},

    // otherwise redirect to home
    {path: "**", redirectTo: ""}
];

let base = document.querySelector("#base");

let useHash = false;
if (base) {
    useHash = false;
}

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: useHash})
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRouterModule {
}
