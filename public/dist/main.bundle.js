webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routeAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
// angular

var DURATION = 100;
var routeAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])("routeAnimation", []);
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/app.animations.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-tag {\r\n    display: inline-block;\r\n    padding: 0.3em 0.9em;\r\n    margin: 0 0.5em 0.5em 0;\r\n    white-space: nowrap;\r\n    background-color: #f1f8ff;\r\n    border-radius: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation [(userChange)]=\"userChange\"></app-navigation>\r\n<div [@routeAnimation]=\"getState(o)\" style=\"margin-top:60px;\" class=\"container bg-light\">\r\n    <router-outlet #o=\"outlet\"></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_animations__ = __webpack_require__("../../../../../src/app/app.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(userService, toastr, vcr, toastrService) {
        var _this = this;
        this.userService = userService;
        this.toastr = toastr;
        this.user = [];
        this.authenticated = false;
        this.userChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toastr.setRootViewContainerRef(vcr);
        toastrService.eventAdded$.subscribe(function (item) { return _this.onToastrAdded(item); });
    }
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent.prototype.ngOnInit = function () {
        // get users from secure api end point
        this.getUser();
        this.userChanged();
    };
    AppComponent.prototype.userChanged = function () {
        var _this = this;
        this.userService.userChange.subscribe(function (data) {
            if (data) {
                _this.user = data;
                _this.authenticated = true;
                var dataStore = {
                    user: _this.user,
                    authenticated: _this.authenticated
                };
                _this.userChange.emit(dataStore);
            }
            else {
                _this.user = null;
                _this.authenticated = false;
                _this.userChange.emit(null);
            }
        });
    };
    // get users from secure api end point
    AppComponent.prototype.getUser = function () {
        if (this.userService.token) {
            this.user = this.userService.getUser();
            this.authenticated = true;
            var dataStore = {
                user: this.user,
                authenticated: this.authenticated
            };
            this.userChange.emit(dataStore);
        }
        else {
            this.authenticated = false;
            this.userChange.emit(null);
        }
    };
    AppComponent.prototype.showSuccess = function (message) {
        this.toastr.success(message, "Success!");
    };
    AppComponent.prototype.showError = function (message) {
        this.toastr.error(message, "Oops!");
    };
    AppComponent.prototype.showWarning = function (message) {
        this.toastr.warning(message, "Alert!");
    };
    AppComponent.prototype.showInfo = function (message) {
        this.toastr.info(message);
    };
    AppComponent.prototype.showCustom = function (message) {
        this.toastr.custom("<span style=\"color: red\">Message in red.</span>", null, { enableHTML: true });
    };
    AppComponent.prototype.onToastrAdded = function (item) {
        // do something with added item
        switch (item.name) {
            case "success":
                this.showSuccess(item.message);
                break;
            case "warning":
                this.showWarning(item.message);
                break;
            case "error":
                this.showError(item.message);
                break;
            case "info":
                this.showInfo(item.message);
                break;
            case "custom":
                this.showCustom(item.message);
                break;
        }
        this.toastrAdded = item;
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AppComponent.prototype, "userChange", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-root",
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_4__app_animations__["a" /* routeAnimation */]],
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__support_CustomToastr__ = __webpack_require__("../../../../../src/app/support/CustomToastr.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_posts_posts_component__ = __webpack_require__("../../../../../src/app/components/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_pagination_pagination_component__ = __webpack_require__("../../../../../src/app/components/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_post_nav_post_nav_component__ = __webpack_require__("../../../../../src/app/components/post-nav/post-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_disqus__ = __webpack_require__("../../../../ngx-disqus/ngx-disqus.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_personal_posts_personal_posts_component__ = __webpack_require__("../../../../../src/app/components/personal-posts/personal-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_post_create_post_create_component__ = __webpack_require__("../../../../../src/app/components/post-create/post-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_control_messages_control_messages_component__ = __webpack_require__("../../../../../src/app/components/control-messages/control-messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_validation_service__ = __webpack_require__("../../../../../src/app/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_keep_html_pipe__ = __webpack_require__("../../../../../src/app/pipes/keep-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_edit_post_edit_post_component__ = __webpack_require__("../../../../../src/app/components/edit-post/edit-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_delete_post_delete_post_component__ = __webpack_require__("../../../../../src/app/components/delete-post/delete-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__guards_user_allowed_to_post_guard_guard__ = __webpack_require__("../../../../../src/app/guards/user-allowed-to-post-guard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular2_highlight_js__ = __webpack_require__("../../../../angular2-highlight-js/lib/highlight-js.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular2_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_angular2_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_confirm_component_confirm_component_component__ = __webpack_require__("../../../../../src/app/components/confirm-component/confirm-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_file_upload_service__ = __webpack_require__("../../../../../src/app/services/file-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ngx_chips__ = __webpack_require__("../../../../ngx-chips/dist/ngx-chips.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_ngx_chips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_like_like_component__ = __webpack_require__("../../../../../src/app/components/like/like.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_like_service__ = __webpack_require__("../../../../../src/app/services/like.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__support_zone_listener__ = __webpack_require__("../../../../../src/app/support/zone.listener.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var base = document.querySelector("#base");
var useHash = false;
if (base) {
    useHash = false;
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_posts_posts_component__["a" /* PostsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_pagination_pagination_component__["a" /* PaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_post_nav_post_nav_component__["a" /* PostNavComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_personal_posts_personal_posts_component__["a" /* PersonalPostsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_post_create_post_create_component__["a" /* PostCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_control_messages_control_messages_component__["a" /* ControlMessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_27__pipes_keep_html_pipe__["a" /* KeepHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_28__components_edit_post_edit_post_component__["a" /* EditPostComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_delete_post_delete_post_component__["a" /* DeletePostComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_confirm_component_confirm_component_component__["a" /* ConfirmComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_like_like_component__["a" /* LikeComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_search_search_component__["a" /* SearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_40__angular_router__["d" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_42__routes__["a" /* appRoutes */], {
                useHash: useHash,
                enableTracing: true
            }),
            __WEBPACK_IMPORTED_MODULE_35_ngx_chips__["TagInputModule"],
            __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_12_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_21_ngx_disqus__["a" /* DisqusModule */].forRoot("blog-dev-6"),
            __WEBPACK_IMPORTED_MODULE_26_ng2_ckeditor__["CKEditorModule"],
            __WEBPACK_IMPORTED_MODULE_31_angular2_highlight_js__["HighlightJsModule"],
            __WEBPACK_IMPORTED_MODULE_33_ng2_bootstrap_modal__["BootstrapModalModule"].forRoot({ container: document.body })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_41__support_zone_listener__["a" /* ZoneListener */],
            __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_30__guards_user_allowed_to_post_guard_guard__["a" /* UserAllowedToPostGuardGuard */],
            __WEBPACK_IMPORTED_MODULE_14__services_toastr_service__["a" /* ToastrService */],
            { provide: __WEBPACK_IMPORTED_MODULE_12_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_15__support_CustomToastr__["a" /* CustomToastr */] },
            __WEBPACK_IMPORTED_MODULE_17__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_25__services_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_31_angular2_highlight_js__["HighlightJsService"],
            __WEBPACK_IMPORTED_MODULE_34__services_file_upload_service__["a" /* FileUploadService */],
            __WEBPACK_IMPORTED_MODULE_37__services_like_service__["a" /* LikeService */],
            __WEBPACK_IMPORTED_MODULE_39__services_search_service__["a" /* SearchService */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_32__components_confirm_component_confirm_component_component__["a" /* ConfirmComponentComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/confirm-component/confirm-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{title || 'Confirm'}}</h4>\n      <button type=\"button\" class=\"close\" (click)=\"close()\" >&times;</button>\n    </div>\n    <div class=\"modal-body\">\n      <p>{{message || 'Are you sure?'}}</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">OK</button>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\" >Cancel</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/confirm-component/confirm-component.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/confirm-component/confirm-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmComponentComponent = (function (_super) {
    __extends(ConfirmComponentComponent, _super);
    function ConfirmComponentComponent(dialogService) {
        return _super.call(this, dialogService) || this;
    }
    ConfirmComponentComponent.prototype.confirm = function () {
        // we set dialog result as true on click on confirm button,
        // then we can get dialog result from caller code
        this.result = true;
        this.close();
    };
    ConfirmComponentComponent.prototype.ngOnInit = function () {
    };
    return ConfirmComponentComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));
ConfirmComponentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-confirm-component',
        template: __webpack_require__("../../../../../src/app/components/confirm-component/confirm-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/confirm-component/confirm-component.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object])
], ConfirmComponentComponent);

var _a;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/confirm-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/control-messages/control-messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-warning\" *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/control-messages/control-messages.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/control-messages/control-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validation_service__ = __webpack_require__("../../../../../src/app/services/validation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlMessagesComponent = (function () {
    function ControlMessagesComponent() {
    }
    ControlMessagesComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return __WEBPACK_IMPORTED_MODULE_2__services_validation_service__["a" /* ValidationService */].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return ControlMessagesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]) === "function" && _a || Object)
], ControlMessagesComponent.prototype, "control", void 0);
ControlMessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-control-messages",
        template: __webpack_require__("../../../../../src/app/components/control-messages/control-messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/control-messages/control-messages.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ControlMessagesComponent);

var _a;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/control-messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/delete-post/delete-post.component.html":
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"post\" (click)=\"showConfirm()\" class=\"btn btn-danger btn-sm float-right text-right m-1\">delete Post</button>\n"

/***/ }),

/***/ "../../../../../src/app/components/delete-post/delete-post.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/delete-post/delete-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletePostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Post__ = __webpack_require__("../../../../../src/app/models/Post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_component_confirm_component_component__ = __webpack_require__("../../../../../src/app/components/confirm-component/confirm-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DeletePostComponent = (function () {
    function DeletePostComponent(router, postService, toastr, dialogService) {
        this.router = router;
        this.postService = postService;
        this.toastr = toastr;
        this.dialogService = dialogService;
        this.postName = "";
    }
    DeletePostComponent.prototype.ngOnInit = function () {
        this.postName = this.post.name;
    };
    DeletePostComponent.prototype.showConfirm = function () {
        var _this = this;
        var options = {
            backdropColor: "rgba(0,0,0,.4)"
        };
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_5__confirm_component_confirm_component_component__["a" /* ConfirmComponentComponent */], {
            title: "Delete post",
            message: "Are you sure to delete: " + this.postName
        }, options).subscribe(function (isConfirmed) {
            /**
             * We get dialog result
             */
            if (isConfirmed) {
                _this.deletePost();
            }
        });
        setTimeout(function () {
            disposable.unsubscribe();
        }, 10000);
    };
    /**
     * delete selected post
     */
    DeletePostComponent.prototype.deletePost = function () {
        var _this = this;
        this.postService.deletePost(this.post.id).subscribe(function (data) {
            _this.toastr.add("info", "You have deleted post: " + _this.postName);
            _this.router.navigate(["/posts"]);
        }, function (error) {
            _this.toastr.add("error", "Error during deleting post: " + _this.postName);
        });
    };
    return DeletePostComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_Post__["a" /* Post */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_Post__["a" /* Post */]) === "function" && _a || Object)
], DeletePostComponent.prototype, "post", void 0);
DeletePostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-delete-post",
        template: __webpack_require__("../../../../../src/app/components/delete-post/delete-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/delete-post/delete-post.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_toastr_service__["a" /* ToastrService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__["DialogService"]) === "function" && _e || Object])
], DeletePostComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/delete-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-post/edit-post.component.html":
/***/ (function(module, exports) {

module.exports = "<app-post-nav></app-post-nav>\n<h3 class=\"text-muted\">Edit your post</h3>\n<form *ngIf=\"postLoaded\" [formGroup]=\"postForm\">\n    <div class=\"form-group\">\n        <label class=\"center-block w-100\">Name:\n            <div class=\"badge badge-secondary\">symbols left: {{120 - post.name.length}}</div>\n            <input placeholder=\"please type the name of the post (min:2, max:120)\" class=\"form-control\"\n                   [(ngModel)]=\"post.name\"\n                   formControlName=\"name\">\n        </label>\n        <app-control-messages [control]=\"postForm.controls.name\"></app-control-messages>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"center-block  w-100\">Post tags:\n            <tag-input [(ngModel)]=\"post.tagged\"\n                       [identifyBy]=\"'id'\"\n                       [displayBy]=\"'tag_slug'\"\n                       [theme]=\"'dark'\"\n                       [class]=\"'tag-block-form'\"\n                       formControlName=\"tagged\">\n            </tag-input>\n        </label>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"center-block\">Upload Image:\n            <input type=\"file\" (change)=\"fileChange($event)\"\n                   placeholder=\"Upload Post Image\" class=\"img-post-input\" accept=\".png,.jpeg,.jpg\">\n            <img *ngIf=\"!tmpFileSrc\" src=\"{{post.image_url}}\" class=\"img-post-thumbnail\">\n            <img *ngIf=\"tmpFileSrc\" src=\"{{tmpFileSrc}}\" class=\"img-post-thumbnail\">\n        </label>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"center-block w-100\">Preamble:\n            <div class=\"badge badge-secondary\">symbols left: {{500 - post.preamble.length}}</div>\n            <textarea placeholder=\"please type the preamble of the post (min:50, max:500)\"\n                      class=\"form-control\"\n                      [(ngModel)]=\"post.preamble\" formControlName=\"preamble\">\n            </textarea>\n        </label>\n        <app-control-messages [control]=\"postForm.controls.preamble\"></app-control-messages>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"center-block  w-100\">Body:\n            <div class=\"badge badge-secondary\">symbols left: {{50000 - post.body.length}}</div>\n            <ckeditor\n                    formControlName=\"body\"\n                    [(ngModel)]=\"post.body\"\n                    [config]=\"{uiColor: '#343a40',toolbar: [\n\t\t\t{ name: 'document', items: [ 'Source' ] },\n\t\t\t{ name: 'basicstyles', items: [ 'Bold', 'Italic' ] },\n\t\t\t{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },\n\t\t\t{ name: 'links', items: [ 'Link', 'Unlink' ] },\n\t\t\t{ name: 'insert', items: [ 'CodeSnippet' ] },\n\t\t\t{ name: 'styles', items: [ 'Format', 'Styles' ] }],\n\t\t\tformat_tags: 'p;h1;h2;h3;pre',\n\t\t\tremovePlugins: 'image',\n\t\t\textraPlugins: 'codesnippet,youtube,codemirror',\n\t\t\tremoveDialogTabs: 'image:advanced;link:advanced;link:target'}\"\n                    [readonly]=\"false\"\n                    (change)=\"onChange($event)\"\n                    (ready)=\"onReady($event)\"\n                    (focus)=\"onFocus($event)\"\n                    (blur)=\"onBlur($event)\"\n                    debounce=\"500\">\n            </ckeditor>\n        </label>\n        <app-control-messages [control]=\"postForm.controls.body\"></app-control-messages>\n    </div>\n    <div class=\"form-group\">\n        <input id=\"available\" type=\"hidden\" formControlName=\"available\" name=\"available\"\n               [(ngModel)]=\"post.available\">\n        <div>\n            <label class=\"w-100\">Available:\n                <span class=\"clearfix\"></span>\n                <input class=\"\" type=\"checkbox\"\n                       [checked]=\"post.available === toggles[0].value\"\n                       (change)=\"$event.target.checked? (post.available = toggles[0].value) : (post.available = toggles[1].value)\">\n                <span class=\"form-check-inline\">\n                    {{ getDisplayToggles() }}\n                </span>\n            </label>\n        </div>\n        <app-control-messages [control]=\"postForm.controls.available\"></app-control-messages>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" (click)=\"updatePost()\" class=\"btn btn-primary\">Update Post</button>\n        <img *ngIf=\"loading\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n    </div>\n    <div *ngIf=\"showDebug\" class=\"debug\">\n        <p>Form value: {{ postForm.value | json }}</p>\n        <p>Form status: {{ postForm.status | json }}</p>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/edit-post/edit-post.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-post/edit-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_file_upload_service__ = __webpack_require__("../../../../../src/app/services/file-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_app__ = __webpack_require__("../../../../../src/config/app.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditPostComponent = (function () {
    function EditPostComponent(postBuilder, postService, toastrService, route, router, fileUpload, http) {
        var _this = this;
        this.postBuilder = postBuilder;
        this.postService = postService;
        this.toastrService = toastrService;
        this.route = route;
        this.router = router;
        this.fileUpload = fileUpload;
        this.http = http;
        this.canSavePost = false;
        this.loading = false;
        this.emitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggles = [
            { value: true, display: "Available" },
            { value: false, display: "Not Available" },
        ];
        this.authenticated = false;
        this.user = {};
        this.showDebug = false;
        this.tmpFileSrc = null;
        this.postLoaded = false;
        this.sub = this.router.params.subscribe(function (params) {
            var id = +params['id'];
            _this.id = id;
        });
        var user = JSON.parse(localStorage.getItem("currentUser"));
        if (user && user.token) {
            this.authenticated = true;
        }
        else {
            this.authenticated = false;
        }
        this.user = user;
    }
    EditPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.findPost(this.id);
        this.emitter.subscribe(function (data) {
            _this.createForm();
            if (_this.postForm.valid) {
                _this.canSavePost = true;
            }
            else {
                _this.canSavePost = false;
            }
            _this.postLoaded = true;
        });
    };
    EditPostComponent.prototype.onChange = function () {
    };
    EditPostComponent.prototype.onReady = function () {
    };
    EditPostComponent.prototype.onFocus = function () {
    };
    EditPostComponent.prototype.onBlur = function () {
    };
    EditPostComponent.prototype.getDisplayToggles = function () {
        if (this.post.available) {
            return this.toggles[0].display;
        }
        else {
            return this.toggles[1].display;
        }
    };
    EditPostComponent.prototype.updatePost = function (form) {
        var _this = this;
        this.loading = true;
        if (!this.postForm.valid) {
            this.toastrService.add("error", "Form not valid! Try once more");
        }
        else {
            this.postService.updatePost(this.post).subscribe(function (response) {
                if (_this.fileEvent) {
                    _this.fileUpload.fileUpload(_this.fileEvent, _this.post)
                        .subscribe(function (data) {
                        console.log("success");
                        _this.toastrService.add("success", "Your Post Has been saved!");
                        _this.route.navigate(["/posts/", response.post.id]);
                    }, function (error) {
                        _this.toastrService.add("error", "Sorry! Your Post image has been updated!");
                        _this.route.navigate(["/posts/update/", response.post.id]);
                        console.log(error);
                    });
                }
                else {
                    _this.toastrService.add("success", "Your Post Has been saved!");
                    _this.route.navigate(["/posts/", response.post.id]);
                }
            }, function (error) {
                console.log(error);
                _this.toastrService.add("error", "Code: " +
                    error.status + "! Error during post update!" +
                    "Reason: " + error.statusText);
            });
        }
        this.loading = false;
    };
    EditPostComponent.prototype.createForm = function () {
        this.postForm = this.postBuilder.group({
            name: [this.post.name, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255)
                ]
            ],
            preamble: [this.post.preamble, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(50),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(500)
                ]
            ],
            body: [this.post.body, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(120),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50000)
                ]
            ],
            tagged: [this.post.tagged, []
            ],
            available: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
        });
    };
    EditPostComponent.prototype.fileChange = function (event) {
        this.fileEvent = event;
        this.readInput();
    };
    EditPostComponent.prototype.readInput = function () {
        var _this = this;
        var input = this.fileEvent;
        var that = this;
        if (input.target.files && input.target.files[0]) {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(input.target.files[0]);
            reader_1.onload = function () {
                _this.tmpFileSrc = reader_1.result;
            };
        }
    };
    EditPostComponent.prototype.findPost = function (id) {
        var _this = this;
        this.postService.findPost(id).subscribe(function (data) {
            _this.post = data.post;
            _this.post.available = data.post.available ? true : false;
            _this.emitter.emit("received");
        });
    };
    EditPostComponent.prototype.requestAutocompleteItems = function (text) {
        var url = __WEBPACK_IMPORTED_MODULE_6__config_app__["a" /* app */].api_url + ("/tagsPostSearch?q=" + text);
        return this.http
            .get(url)
            .map(function (data) { return data.json(); });
    };
    ;
    return EditPostComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === "function" && _a || Object)
], EditPostComponent.prototype, "postForm", void 0);
EditPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-edit-post",
        template: __webpack_require__("../../../../../src/app/components/edit-post/edit-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-post/edit-post.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_file_upload_service__["a" /* FileUploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_file_upload_service__["a" /* FileUploadService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]) === "function" && _h || Object])
], EditPostComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/edit-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/like/like.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"like-block d-inline pull-right\" *ngIf=\"model\">\n<span *ngIf=\"token\" class=\"button block\">\n    <button *ngIf=\"isLiked\" (click)=\"likeToggle()\" class=\"like-btn\">\n</button>\n<button *ngIf=\"!isLiked\" (click)=\"likeToggle()\" class=\"like-hollow-btn\">\n</button>\n</span>\n    <span *ngIf=\"!token\">\n    <i class=\"like-hollow-btn\" style=\"display: inline-block;\"></i>\n    </span>\n    <strong class=\"text-info\">{{like_counter}}</strong>\n</span>"

/***/ }),

/***/ "../../../../../src/app/components/like/like.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".like-block {\n  display: inline-block !important;\n  width: 29%;\n  text-align: right; }\n\n.like-btn {\n  background: transparent;\n  background-image: url(\"http://lablog.dev/images/like.svg\");\n  width: 20px;\n  height: 20px;\n  background-size: 20px 20px;\n  outline: none;\n  border: none;\n  cursor: pointer; }\n\n.like-hollow-btn {\n  background: transparent;\n  background-image: url(\"http://lablog.dev/images/like_hollow.svg\");\n  width: 20px;\n  height: 20px;\n  background-size: 20px 20px;\n  outline: none;\n  border: none;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/like/like.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_like_service__ = __webpack_require__("../../../../../src/app/services/like.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LikeComponent = (function () {
    function LikeComponent(likeService, toastr) {
        this.likeService = likeService;
        this.toastr = toastr;
        this.isLiked = false;
        this.model = "";
        this.likeChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser && currentUser.token;
    }
    LikeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.likeChanged.subscribe(function () {
            _this.likesModelStatus();
        });
    };
    LikeComponent.prototype.likeToggle = function () {
        var _this = this;
        var like = {
            "model": this.model,
            "model_id": this.model_id
        };
        this.likeService.likeToggle(like).subscribe(function (response) {
            _this.likeChanged.emit("changed");
            _this.toastr.add("info", response.msg);
        }, function (error) {
            _this.toastr.add("error", error.msg);
        });
    };
    LikeComponent.prototype.likesModelStatus = function () {
        var _this = this;
        var like = {
            "model": this.model,
            "model_id": this.model_id
        };
        this.likeService.likesModelStatus(like).subscribe(function (response) {
            _this.isLiked = response.status;
            _this.like_counter = response.likes_counter;
        }, function (error) {
            console.log(error);
        });
    };
    return LikeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], LikeComponent.prototype, "isLiked", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], LikeComponent.prototype, "model", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], LikeComponent.prototype, "like_counter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], LikeComponent.prototype, "model_id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LikeComponent.prototype, "likeChanged", void 0);
LikeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-like",
        template: __webpack_require__("../../../../../src/app/components/like/like.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/like/like.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_like_service__["a" /* LikeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_like_service__["a" /* LikeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__["a" /* ToastrService */]) === "function" && _b || Object])
], LikeComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/like.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"main\">\r\n\r\n  <h3>Please Log In</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n      <a href=\"#\" class=\"btn btn-lg btn-primary btn-block\">Facebook</a>\r\n    </div>\r\n    <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n      <a href=\"#\" class=\"btn btn-lg btn-info btn-block\">Google</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"login-or\">\r\n    <hr class=\"hr-or\">\r\n    <span class=\"span-or\">or</span>\r\n  </div>\r\n  <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n  <form role=\"form\" name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <a class=\"pull-right\" href=\"#\">Forgot password?</a>\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button type=\"submit\" [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n    </div>\r\n  </form>\r\n  <p>Don't have a login? <a [routerLink]=\"['/register']\"> Click</a></p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  padding-top: 15px;\n  font-size: 12px; }\n\n.main {\n  max-width: 320px;\n  margin: 0 auto; }\n\n.login-or {\n  position: relative;\n  font-size: 18px;\n  color: #aaa;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.span-or {\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: -2px;\n  margin-left: -25px;\n  background-color: #fff;\n  width: 50px;\n  text-align: center; }\n\n.hr-or {\n  background-color: #cdcdcd;\n  height: 1px;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\nh3 {\n  text-align: center;\n  line-height: 300%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, authenticationService, toastrService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.toastrService = toastrService;
        this.model = {};
        this.loading = false;
        this.error = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        if (this.authenticationService.token) {
            this.authenticationService.logout();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(["/posts"]);
                _this.authenticationService.userEvent.emit(result);
                _this.toastrService.add("info", "You are logged in!");
            }
            else {
                _this.error = "Username or password is incorrect";
                _this.loading = false;
            }
        }, function (result) {
            _this.error = "Username or password is incorrect";
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-login",
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-dark\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand\" [routerLink]=\"['/']\"><strong style=\"\">#{{appName}}</strong></a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n                aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n            <ul class=\"navbar-nav w-100\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['/posts']\">Posts</a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"authenticated\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['/user']\">Hello, {{user['name']}}</a>\r\n                </li>\r\n                <app-search></app-search>\r\n                <li class=\"nav-item\" *ngIf=\"!authenticated\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"!authenticated\">\r\n                    <a class=\"nav-link\">|</a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"!authenticated\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n                </li>\r\n                <li class=\"nav-item\" style=\"margin-left: auto;\" *ngIf=\"authenticated\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['/login']\">Logout</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_app__ = __webpack_require__("../../../../../src/config/app.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(authService) {
        this.user = [];
        this.authenticated = false;
        this.appName = __WEBPACK_IMPORTED_MODULE_2__config_app__["a" /* app */].name;
        this.authService = authService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.userChange.subscribe(function (data) {
            if (data) {
                _this.user = data.user;
                _this.authenticated = true;
            }
            else {
                _this.user = null;
                _this.authenticated = false;
            }
        });
    };
    NavigationComponent.prototype.getUser = function () {
        // get users from secure api end point
        if (this.authService.token) {
            this.user = this.authService.getUser();
            this.authenticated = true;
        }
        else {
            this.authenticated = false;
        }
    };
    return NavigationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavigationComponent.prototype, "userChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "user", void 0);
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-navigation",
        template: __webpack_require__("../../../../../src/app/components/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"pagination\" *ngIf=\"pagination && pagination.current_page && pagination.last_page\">\r\n  <li *ngIf=\"pagination.current_page > 1\">\r\n    <a role=\"link\" aria-label=\"Previous\" class=\"btn btn-dark btn-sm\" [routerLink]=\"['/posts']\" [queryParams]=\"{ page: this.page - 1 }\">\r\n      <span aria-hidden=\"true\">←</span>\r\n    </a>\r\n  </li>\r\n  <li *ngFor=\"let page of pagesNumber()\" [ngClass]=\"{'active': page == pagination.current_page}\">\r\n    <a [routerLink]=\"['/posts']\" [queryParams]=\"{ page: page }\" class=\"btn btn-dark btn-sm\">{{ page }}</a>\r\n  </li>\r\n  <li *ngIf=\"pagination.current_page < pagination.last_page\">\r\n    <button role=\"link\" aria-label=\"Next\" class=\"btn btn-dark btn-sm\" [routerLink]=\"['/posts']\" [queryParams]=\"{ page: this.page + 1 }\">\r\n      <span aria-hidden=\"true\">→</span>\r\n    </button>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/components/pagination/pagination.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pagination li.active a {\n  font-weight: 700;\n  background: #0099e5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = (function () {
    function PaginationComponent(router) {
        this.router = router;
        this.offset = 4;
        this.pageUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.pagesNumber = function () {
        if (!this.pagination.to) {
            return [];
        }
        var from = this.pagination.current_page - this.offset;
        if (from < 1) {
            from = 1;
        }
        var to = from + (this.offset * 2);
        if (to >= this.pagination.last_page) {
            to = this.pagination.last_page;
        }
        var pagesArray = [];
        for (from = 1; from <= to; from++) {
            pagesArray.push(from);
        }
        return pagesArray;
    };
    PaginationComponent.prototype.ngOnChanges = function (changes) {
        // only run when property "data" changed
        if (changes['page']) {
            this.pageUpdated.emit(this.page);
        }
    };
    PaginationComponent.prototype.changePage = function (page) {
        this.pagination.current_page = page;
        if (page > 1) {
            this.goToPage(page);
        }
        else {
            this.goToPage(1);
        }
    };
    /**
     *
     * @param {number} pageNum
     */
    PaginationComponent.prototype.goToPage = function (pageNum) {
        this.router.navigate(["posts"], { queryParams: { page: pageNum } });
    };
    PaginationComponent.prototype.previousPage = function () {
        this.router.navigate(["posts"], { queryParams: { page: this.page - 1 } });
    };
    PaginationComponent.prototype.nextPage = function () {
        this.router.navigate(["posts"], { queryParams: { page: this.page + 1 } });
    };
    return PaginationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "pagination", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "offset", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "page", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "pageUpdated", void 0);
PaginationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-pagination",
        template: __webpack_require__("../../../../../src/app/components/pagination/pagination.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pagination/pagination.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], PaginationComponent);

var _a;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/pagination.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/personal-posts/personal-posts.component.html":
/***/ (function(module, exports) {

module.exports = "<app-post-nav></app-post-nav>\n<h3 class=\"text-muted\">Your Posts</h3>\n<div class=\"posts container\">\n  <div *ngFor=\"let post of posts\" class=\"row block\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <a [routerLink]=\"['/posts/', post.id]\" class=\"header clearfix\">{{post.name}}</a>\n        <span class=\"badge badge-secondary bg-info\" *ngIf=\"post.available\">{{post.published}}</span>\n        <span class=\"badge badge-secondary bg-dark\" *ngIf=\"!post.available\">{{post.published}}</span>\n        <div class=\"tag-block\">\n          <strong class=\"text-muted\">tags: </strong>\n          <a *ngFor=\"let tag of post.tagged\"\n             class=\"post-tag\" [routerLink]=\"['posts/tagged/' + tag.tag_slug]\">\n            {{tag.tag_slug}}\n          </a>\n          <span class=\"text-muted\" *ngIf=\"!post.tagged.length\">no tags</span>\n        </div>\n\n        <div class=\"card-block\">\n          <img src=\"{{post.image_url}}\" alt=\"{{ post.name }}\" class=\"img-thumbnail\">\n          <p>\n            {{ post.preamble }}\n          </p>\n          <span class=\"text-muted float-left text-left\">{{post.created}}</span>\n          <a [routerLink]=\"['/posts/', post.id]\"\n             class=\"btn btn-dark btn-sm float-right text-right m-1\">go to post</a>\n          <a *ngIf=\"authenticated && post.user.email === user.email\" [routerLink]=\"['/posts/update/', post.id]\"\n             class=\"btn btn-info btn-sm float-right text-right m-1\">edit post</a>\n        </div>\n      </div>\n    </div>\n    <hr style=\"border: dashed 1px darkgrey; width: 100%\">\n  </div>\n  <app-pagination [pagination]=\"pagination\"\n                  [page]=\"page\"\n                  (pageUpdated)=\"pageUpdated($event)\">\n    (click)=\"all(pagination.current_page)\"\n    (offset)=\"4\">\n  </app-pagination>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/personal-posts/personal-posts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/personal-posts/personal-posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonalPostsComponent = (function () {
    function PersonalPostsComponent(postService, route, toastrService) {
        this.postService = postService;
        this.route = route;
        this.toastrService = toastrService;
        this.published = "not published";
        this.authenticated = false;
        this.user = {};
        var user = JSON.parse(localStorage.getItem("currentUser"));
        if (user && user.token) {
            this.authenticated = true;
        }
        else {
            this.authenticated = false;
        }
        this.user = user;
    }
    PersonalPostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            var page = +params['page'];
            if (!page) {
                page = 1;
            }
            _this.page = page;
        });
        this.all(this.page);
    };
    PersonalPostsComponent.prototype.pageUpdated = function (page) {
        window.scrollTo(0, 0);
        this.all(page);
    };
    PersonalPostsComponent.prototype.all = function (page) {
        var _this = this;
        this.postService.getPersonalPosts(page).subscribe(function (response) {
            // get body data
            _this.posts = response.items.data;
            _this.posts.map(function (item) {
                item.published = item.available ? "published" : "not published";
            });
            delete (response.items.data);
            _this.pagination = response.items;
        }, function (response) {
            // error callback
            _this.toastrService.add("error", "Error during posts render");
        });
    };
    return PersonalPostsComponent;
}());
PersonalPostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-personal-posts",
        template: __webpack_require__("../../../../../src/app/components/personal-posts/personal-posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/personal-posts/personal-posts.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], PersonalPostsComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/personal-posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post-create/post-create.component.html":
/***/ (function(module, exports) {

module.exports = "<app-post-nav></app-post-nav>\r\n<h3 class=\"text-muted\">Create your post</h3>\r\n<form *ngIf=\"post\" [formGroup]=\"postForm\">\r\n    <div class=\"form-group\">\r\n        <label class=\"center-block w-100\">Name:\r\n            <div class=\"badge badge-secondary\">symbols left: {{120 - post.name.length}}</div>\r\n            <input placeholder=\"please type the name of the post (min:2, max:120)\" class=\"form-control\"\r\n                   [(ngModel)]=\"post.name\" formControlName=\"name\">\r\n        </label>\r\n        <app-control-messages [control]=\"postForm.controls.name\"></app-control-messages>\r\n    </div>\r\n    <div *ngIf=\"post.image_url\" class=\"form-group\">\r\n        <label class=\"center-block\">Upload Image:\r\n            <img src=\"{{post.image_url}}\" class=\"thumbnail\">\r\n        </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"center-block  w-100\">Post tags:\r\n            <tag-input [(ngModel)]=\"post.tagged\"\r\n                       [identifyBy]=\"'id'\"\r\n                       [displayBy]=\"'tag_slug'\"\r\n                       [theme]=\"'dark'\"\r\n                       [class]=\"'tag-block-form'\"\r\n                       formControlName=\"tagged\">\r\n            </tag-input>\r\n        </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"center-block\">Upload Image:\r\n            <input type=\"file\" (change)=\"fileChange($event)\"\r\n                   placeholder=\"Upload Post Image\" class=\"img-post-input\" accept=\".png,.jpeg,.jpg\">\r\n            <img *ngIf=\"!tmpFileSrc\" src=\"{{post.image_url}}\" class=\"img-post-thumbnail\">\r\n            <img *ngIf=\"tmpFileSrc\" src=\"{{tmpFileSrc}}\" class=\"img-post-thumbnail\">\r\n        </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"center-block w-100\">Preamble:\r\n            <div class=\"badge badge-secondary\">symbols left: {{500 - post.preamble.length}}</div>\r\n            <textarea placeholder=\"please type the preamble of the post (min:50, max:500)\" class=\"form-control\"\r\n                       [(ngModel)]=\"post.preamble\" formControlName=\"preamble\">\r\n            </textarea>\r\n        </label>\r\n        <app-control-messages [control]=\"postForm.controls.preamble\"></app-control-messages>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"center-block  w-100\">Body:\r\n            <div class=\"badge badge-secondary\">symbols left: {{50000 - post.body.length}}</div>\r\n            <ckeditor\r\n                    formControlName=\"body\"\r\n                    [(ngModel)]=\"post.body\"\r\n                    [config]=\"{uiColor: '#343a40',toolbar: [\r\n\t\t\t{ name: 'document', items: [ 'Source' ] },\r\n\t\t\t{ name: 'basicstyles', items: [ 'Bold', 'Italic' ] },\r\n\t\t\t{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },\r\n\t\t\t{ name: 'links', items: [ 'Link', 'Unlink' ] },\r\n\t\t\t{ name: 'insert', items: [ 'CodeSnippet' ] },\r\n\t\t\t{ name: 'styles', items: [ 'Format', 'Styles' ] }],\r\n\t\t\tformat_tags: 'p;h1;h2;h3;pre',\r\n\t\t\tremovePlugins: 'image',\r\n\t\t\textraPlugins: 'codesnippet,youtube,codemirror',\r\n\t\t\tremoveDialogTabs: 'image:advanced;link:advanced;link:target'}\"\r\n                    [readonly]=\"false\"\r\n                    (change)=\"onChange($event)\"\r\n                    (ready)=\"onReady($event)\"\r\n                    (focus)=\"onFocus($event)\"\r\n                    (blur)=\"onBlur($event)\"\r\n                    debounce=\"500\">\r\n            </ckeditor>\r\n        </label>\r\n        <app-control-messages [control]=\"postForm.controls.body\"></app-control-messages>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <input id=\"available\" type=\"hidden\" formControlName=\"available\" name=\"available\"\r\n               [(ngModel)]=\"post.available\">\r\n        <div>\r\n            <label class=\"w-100\">Available:\r\n                <span class=\"clearfix\"></span>\r\n                <input class=\"\" type=\"checkbox\"\r\n                       [checked]=\"post.available === toggles[0].value\"\r\n                       (change)=\"$event.target.checked? (post.available = toggles[0].value) : (post.available = toggles[1].value)\">\r\n                <span class=\"form-check-inline\">\r\n                    {{ getDisplayToggles() }}\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <app-control-messages [control]=\"postForm.controls.available\"></app-control-messages>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" (click)=\"savePost()\" class=\"btn btn-primary\">Create Post</button>\r\n        <img *ngIf=\"loading\"\r\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n    </div>\r\n    <div *ngIf=\"showDebug\" class=\"debug\">\r\n        <p>Form value: {{ postForm.value | json }}</p>\r\n        <p>Form status: {{ postForm.status | json }}</p>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/post-create/post-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post-create/post-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Post__ = __webpack_require__("../../../../../src/app/models/Post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_file_upload_service__ = __webpack_require__("../../../../../src/app/services/file-upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostCreateComponent = (function () {
    function PostCreateComponent(postBuilder, postService, toastrService, route, fileUpload) {
        this.postBuilder = postBuilder;
        this.postService = postService;
        this.toastrService = toastrService;
        this.route = route;
        this.fileUpload = fileUpload;
        this.canSavePost = false;
        this.loading = false;
        this.toggles = [
            { value: true, display: "Available" },
            { value: false, display: "Not Available" },
        ];
        this.showDebug = false;
        this.tmpFileSrc = null;
    }
    PostCreateComponent.prototype.ngOnInit = function () {
        this.post = {
            name: "",
            preamble: "",
            body: "",
            available: false
        };
        this.createForm();
        if (this.postForm.valid) {
            this.canSavePost = true;
        }
        else {
            this.canSavePost = false;
        }
    };
    PostCreateComponent.prototype.getDisplayToggles = function () {
        if (this.post.available) {
            return this.toggles[0].display;
        }
        else {
            return this.toggles[1].display;
        }
    };
    PostCreateComponent.prototype.savePost = function (form) {
        var _this = this;
        this.loading = true;
        if (!this.postForm.valid) {
            this.toastrService.add("error", "Form not valid! Try once more");
        }
        else {
            this.postService.savePost(this.post).subscribe(function (response) {
                if (_this.fileEvent) {
                    _this.fileUpload.fileUpload(_this.fileEvent, response.post)
                        .subscribe(function (data) {
                        _this.toastrService.add("success", "Your Post Has been saved!");
                        _this.route.navigate(["/posts/", response.post.id]);
                    }, function (error) {
                        _this.toastrService.add("error", "Sorry! Your Post image has been updated!");
                        _this.route.navigate(["/posts/update/", response.post.id]);
                    });
                }
                else {
                    _this.toastrService.add("success", "Your Post Has been saved!");
                    _this.route.navigate(["/posts/", response.post.id]);
                }
            }, function (error) {
                console.log(error);
                _this.toastrService.add("error", "Code: " +
                    error.status + "! Error during post save!" +
                    "Reason: " + error.statusText);
            });
        }
        this.loading = false;
    };
    PostCreateComponent.prototype.createForm = function () {
        this.postForm = this.postBuilder.group({
            name: [this.post.name, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255)
                ]
            ],
            preamble: [this.post.preamble, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(50),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(500)
                ]
            ],
            body: [this.post.body, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(120),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(50000)
                ]
            ],
            tagged: [this.post.tagged, []],
            available: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
        });
    };
    PostCreateComponent.prototype.fileChange = function (event) {
        this.fileEvent = event;
        this.readInput();
    };
    PostCreateComponent.prototype.readInput = function () {
        var _this = this;
        var input = this.fileEvent;
        var that = this;
        if (input.target.files && input.target.files[0]) {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(input.target.files[0]);
            reader_1.onload = function () {
                _this.tmpFileSrc = reader_1.result;
            };
        }
    };
    PostCreateComponent.prototype.onChange = function () {
    };
    PostCreateComponent.prototype.onReady = function () {
    };
    PostCreateComponent.prototype.onFocus = function () {
    };
    PostCreateComponent.prototype.onBlur = function () {
    };
    return PostCreateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_Post__["a" /* Post */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_Post__["a" /* Post */]) === "function" && _a || Object)
], PostCreateComponent.prototype, "post", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]) === "function" && _b || Object)
], PostCreateComponent.prototype, "postForm", void 0);
PostCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-post-create",
        template: __webpack_require__("../../../../../src/app/components/post-create/post-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post-create/post-create.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_toastr_service__["a" /* ToastrService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_file_upload_service__["a" /* FileUploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_file_upload_service__["a" /* FileUploadService */]) === "function" && _g || Object])
], PostCreateComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/post-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post-nav/post-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\"\n     *ngIf=\"authenticated\" style=\"padding-left: 0!important;\">\n  <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/posts']\">Posts Management</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n          data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link btn btn-link\" style=\"cursor: pointer;\" (click)=\"goBack()\">Back</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/posts/create']\" >Create Post</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/posts/personal']\">Personal Posts</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/post-nav/post-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post-nav/post-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostNavComponent = (function () {
    function PostNavComponent(location) {
        this.location = location;
        this.authenticated = false;
        var user = JSON.parse(localStorage.getItem("currentUser"));
        if (user && user.token) {
            this.authenticated = true;
        }
        else {
            this.authenticated = false;
        }
    }
    PostNavComponent.prototype.ngOnInit = function () {
    };
    PostNavComponent.prototype.goBack = function () {
        this.location.back();
    };
    return PostNavComponent;
}());
PostNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-post-nav",
        template: __webpack_require__("../../../../../src/app/components/post-nav/post-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post-nav/post-nav.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object])
], PostNavComponent);

var _a;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/post-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<app-post-nav></app-post-nav>\n<div *ngIf=\"post\" class=\"posts container\">\n    <div class=\"row block\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <a [routerLink]=\"['/posts/', post.id]\" class=\"header pull-left\">\n                    <h3>{{post.name}}\n                    <span class=\"badge badge-secondary bg-info\"\n                          *ngIf=\"post.available && (authenticated && post.user.email === user.email)\">{{post.published}}</span>\n                    <span class=\"badge badge-secondary bg-dark\"\n                          *ngIf=\"!post.available  && (authenticated && post.user.email === user.email)\">{{post.published}}</span>\n                    </h3>\n                </a>\n                <div class=\"second-header\">\n                    <div class=\"tag-block d-inline pull-left\">\n                        <strong class=\"text-muted\">tags: </strong>\n                        <a *ngFor=\"let tag of post.tagged\"\n                           class=\"post-tag\" [routerLink]=\"['posts/tagged/' + tag.tag_slug]\">\n                            {{tag.tag_slug}}\n                        </a>\n                        <span class=\"text-muted\" *ngIf=\"!post.tagged.length\">no tags</span>\n                    </div>\n                    <app-like\n                            [model]=\"'App\\\\Post'\"\n                            [model_id]=\"post.id\"\n                            [isLiked]=\"post.isLiked\"\n                            [like_counter]=\"post.likes_counter\"\n                    >\n                    </app-like>\n                </div>\n                <a *ngIf=\"authenticated && post.user.email === user.email\" [routerLink]=\"['/posts/update/', post.id]\"\n                   class=\"btn btn-info btn-sm float-right text-right m-1\">edit post</a>\n                <app-delete-post\n                        [(post)]=\"post\"\n                        *ngIf=\"authenticated && post.user.email === user.email\">\n                </app-delete-post>\n                <div class=\"card-block\">\n                    <img src=\"{{post.image_url}}\" alt=\"{{ post.name }}\" class=\"img-thumbnail\">\n                    <blockquote class=\"blockquote\">\n                        <p class=\"mb-0\">\n                            {{post.preamble}}\n                        </p>\n                        <footer class=\"blockquote-footer\">Preamble. Author: <cite title=\"{{post.user.name}}\"><a\n                                [routerLink]=\"['/user/', post.user.id]\">{{post.user.name}}</a></cite></footer>\n                    </blockquote>\n                    <hr>\n                    <!--<div  class=\"clearfix\" [innerHTML]=\"post.body | keepHtml\"></div>-->\n                    <section [innerHTML]=\"post.body\" highlight-js-content=\"pre code\"></section>\n\n                    <hr>\n                    <strong class=\"float-left text-left m-1\"> Created: </strong>\n                    <strong class=\"text-muted float-left text-left  m-1\"> {{post.created}}</strong>\n                    <strong class=\"float-left text-left  m-1\"> Views: </strong>\n                    <strong class=\"text-muted float-left text-left m-1\"> {{post.view_counter.view_counter}}</strong>\n                    <a [routerLink]=\"['/user/', post.user.id]\"\n                       class=\"btn btn-link btn-sm float-right text-right\">{{post.user.name}}</a>\n                    <strong class=\"float-right text-right\">Writer:</strong>\n                </div>\n                <disqus [identifier]=\"post.id\" [url]=\"'/posts/' + post.id\" [lang]=\"'en'\"\n                        (onNewComment)=\"onComment($event)\"\n                        (onReady)=\"onReady($event)\"\n                        (onPaginate)=\"onPaginate($event)\"></disqus>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".color-dark {\n  color: #343a40 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostComponent = (function () {
    function PostComponent(route, postService, toastrService) {
        var _this = this;
        this.route = route;
        this.postService = postService;
        this.toastrService = toastrService;
        this.authenticated = false;
        this.user = {};
        this.published = "not published";
        this.emitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.id = id;
        });
        var user = JSON.parse(localStorage.getItem("currentUser"));
        if (user && user.token) {
            this.authenticated = true;
        }
        else {
            this.authenticated = false;
        }
        this.user = user;
    }
    PostComponent.prototype.ngOnInit = function () {
        this.findPost(this.id);
    };
    PostComponent.prototype.findPost = function (id) {
        var _this = this;
        this.postService.findPost(id).subscribe(function (data) {
            _this.post = data.post;
            _this.post.available = _this.post.available ? true : false;
            _this.post.published = _this.post.available ? "published" : "not published";
        });
    };
    PostComponent.prototype.onComment = function (value) {
        console.log("Commented: " + value);
        this.toastrService.add("success", "Your comment successfully added!");
    };
    PostComponent.prototype.onReady = function (value) {
        console.log("Component Ready: " + value);
    };
    PostComponent.prototype.onPaginate = function (value) {
        console.log("Comment paginated: " + value);
    };
    return PostComponent;
}());
PostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-post",
        template: __webpack_require__("../../../../../src/app/components/post/post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/post.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], PostComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<app-post-nav></app-post-nav>\n<div class=\"posts container\">\n    <div *ngFor=\"let post of posts\" class=\"row block\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <a [routerLink]=\"['/posts/', post.id]\" class=\"header clearfix\"><h3>{{post.name}}</h3></a>\n                <div class=\"second-header\">\n                    <div class=\"tag-block d-inline pull-left\">\n                        <strong class=\"text-muted\">tags: </strong>\n                        <a *ngFor=\"let tag of post.tagged\"\n                           class=\"post-tag\" [routerLink]=\"['posts/tagged/' + tag.tag_slug]\">\n                            {{tag.tag_slug}}\n                        </a>\n                        <span class=\"text-muted\" *ngIf=\"!post.tagged.length\">no tags</span>\n                    </div>\n                    <app-like\n                            [model]=\"'App\\\\Post'\"\n                            [model_id]=\"post.id\"\n                            [isLiked]=\"post.isLiked\"\n                            [like_counter]=\"post.likes_counter\"\n                    >\n                    </app-like>\n                </div>\n                <div class=\"card-block\">\n                    <img src=\"{{post.image_url}}\" alt=\"{{ post.name }}\" class=\"img-thumbnail\">\n                    <div class=\"clearfix\">{{post.preamble}}</div>\n                    <strong class=\"float-left text-left  m-1\"> Views: </strong>\n                    <strong class=\"text-muted float-left text-left m-1\"> {{post.view_counter.view_counter}}</strong>\n                    <strong class=\"float-left text-left m-1\"> Created: </strong>\n                    <strong class=\"text-muted float-left text-left  m-1\"> {{post.created}}</strong>\n                    <strong class=\"float-left text-left  m-1\">Writer:</strong>\n                    <a [routerLink]=\"['/user/', post.user.id]\"\n                       class=\"btn btn-link btn-sm text-right\">{{post.user.name}}</a>\n                    <a [routerLink]=\"['/posts/', post.id]\"\n                       class=\"btn btn-dark btn-sm float-right text-right m-1\">go to post</a>\n                    <a *ngIf=\"authenticated && post.user.email === user.email\"\n                       [routerLink]=\"['/posts/update/', post.id]\"\n                       class=\"btn btn-info btn-sm float-right text-right m-1\">edit post</a>\n                </div>\n            </div>\n        </div>\n        <hr style=\"border: dashed 1px darkgrey; width: 100%\">\n    </div>\n    <app-pagination [pagination]=\"pagination\"\n                    [page]=\"page\"\n                    (pageUpdated)=\"pageUpdated($event)\">\n    </app-pagination>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/posts/posts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostsComponent = (function () {
    function PostsComponent(postService, route, toastrService) {
        this.postService = postService;
        this.route = route;
        this.toastrService = toastrService;
        this.authenticated = false;
        this.user = {};
        var user = JSON.parse(localStorage.getItem("currentUser"));
        if (user && user.token) {
            this.authenticated = true;
        }
        else {
            this.authenticated = false;
        }
        this.user = user;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            var page = +params['page'];
            if (!page) {
                page = 1;
            }
            _this.page = page;
        });
        this.all(this.page);
    };
    PostsComponent.prototype.pageUpdated = function (page) {
        window.scrollTo(0, 0);
        this.all(page);
    };
    PostsComponent.prototype.all = function (page) {
        var _this = this;
        this.postService.getPosts(page).subscribe(function (response) {
            // get body data
            _this.posts = response.items.data;
            delete (response.items.data);
            _this.pagination = response.items;
        }, function (response) {
            // error callback
            _this.toastrService.add("error", "Error during posts render");
        });
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-posts",
        template: __webpack_require__("../../../../../src/app/components/posts/posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/posts/posts.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], PostsComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n\r\n  <h3>Please Sign Up</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n      <a href=\"#\" class=\"btn btn-lg btn-primary btn-block\">Facebook</a>\r\n    </div>\r\n    <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n      <a href=\"#\" class=\"btn btn-lg btn-info btn-block\">Google</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"login-or\">\r\n    <hr class=\"hr-or\">\r\n    <span class=\"span-or\">or</span>\r\n  </div>\r\n  <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n  <form name=\"form\" role=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !name.valid }\">\r\n      <label for=\"name\">Name</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">Name is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"confirm\">Confirmation</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.confirm\" #confirm=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !confirm.valid\" class=\"help-block\">Confirm is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">SignUp</button>\r\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n    </div>\r\n  </form>\r\n  <p>Have a login? <a [routerLink]=\"['/login']\"> Click</a></p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  padding-top: 15px;\n  font-size: 12px; }\n\n.main {\n  max-width: 320px;\n  margin: 0 auto; }\n\n.login-or {\n  position: relative;\n  font-size: 18px;\n  color: #aaa;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.span-or {\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: -2px;\n  margin-left: -25px;\n  background-color: #fff;\n  width: 50px;\n  text-align: center; }\n\n.hr-or {\n  background-color: #cdcdcd;\n  height: 1px;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\nh3 {\n  text-align: center;\n  line-height: 300%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, authenticationService, toastrService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.toastrService = toastrService;
        this.model = {};
        this.loading = false;
        this.error = "";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // reset login status
        if (this.authenticationService.token) {
            this.router.navigate(["/posts"]);
            this.toastrService.add("warning", "You are already registered");
        }
        else {
            // this.authenticationService.logout();
        }
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.register(this.model.name, this.model.email, this.model.password, this.model.confirm)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(["/posts"]);
            }
            else {
                _this.error = "Sorry your account isn\'t created";
                _this.loading = false;
            }
        }, function (data) {
            _this.error = "Sorry your account isn\'t created";
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-register",
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-inline my-2 my-lg-0\">\n    <input class=\"form-control mr-sm-2\" (input)=\"makeSearch($event)\" [(ngModel)]=\"searchQuery\"\n           type=\"text\" placeholder=\"Search\" aria-label=\"Search\" name=\"searchQuery\">\n    <ul class=\"result mr-sm-2\" *ngIf=\"searchResult\">\n        <li *ngFor=\"let item of searchResult\">\n            <button role=\"link\" style=\"cursor: pointer; text-align: left;\" class=\"btn btn-link\"\n                    (click)=\"goTo('/posts/'+ item.id)\">\n                {{item.name}}\n                <div class=\"clearfix\"></div>\n                <span class=\"float-left text-left m-0\">\n                    <i class=\"glyphicon glyphicon-calendar\"></i>: </span>\n                <span class=\"float-left text-left  m-0\"> {{item.created}}</span>\n                <span class=\"float-left text-left  m-0\">\n                    <i style=\"\" class=\"glyphicon glyphicon-eye-open\"></i>:\n                </span>\n                <span class=\"float-left text-left m-0\"> {{item.view_counter.view_counter}}</span>\n            </button>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.result {\n  position: absolute;\n  top: 60px;\n  list-style-type: none;\n  padding-left: 0;\n  display: inline-block;\n  vertical-align: middle;\n  white-space: normal;\n  overflow: hidden;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box; }\n  .result li {\n    padding: 0;\n    text-align: left; }\n    .result li button {\n      white-space: normal;\n      /* Отменяем перенос текста */\n      overflow: hidden;\n      /* Обрезаем содержимое */\n      width: 100%;\n      display: block;\n      padding: 3px 20px;\n      clear: both;\n      font-weight: normal;\n      line-height: 1.428571429;\n      color: #333;\n      border-bottom: 1px solid;\n      text-align: left; }\n      .result li button i {\n        color: #343a40; }\n      .result li button:hover {\n        background: #428bca;\n        color: #fff; }\n        .result li button:hover span {\n          color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(search, router) {
        var _this = this;
        this.search = search;
        this.router = router;
        this.searchQuery = "";
        this.searchResult = [];
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                _this.searchResult = [];
                _this.searchQuery = "";
            }
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.searchResult = [];
        this.searchQuery = "";
    };
    SearchComponent.prototype.makeSearch = function (event) {
        var _this = this;
        if (event.target.value.length > 1) {
            this.search.searchQuery(event.target.value)
                .subscribe(function (result) {
                _this.searchResult = result.data;
            }, function (error) {
                _this.searchResult = [];
            });
        }
        else {
            this.searchResult = [];
        }
    };
    SearchComponent.prototype.goTo = function (path) {
        window.location.href = path;
    };
    return SearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SearchComponent.prototype, "searchQuery", void 0);
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-search",
        template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"jumbotron justify-content-center\">\r\n  name: {{user['name']}}\r\n  email: {{user['email']}}\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(authService) {
        this.user = __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */];
        this.authService = authService;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.user;
        this.authService.userChange.subscribe(function (data) {
            _this.user = data;
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-user",
        template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], UserComponent);

var _a;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <!--The content below is only a placeholder and can be replaced.-->\r\n  <div style=\"width: 100%; text-align:center\">\r\n    <h1 class=\"text-info\">\r\n      Welcome here!\r\n    </h1>\r\n    <h1>\r\n      Hello Guys! <br>\r\n      This is the app that binds angular4 and laravel!\r\n      <br>\r\n      Welcome to {{title}}!\r\n    </h1>\r\n    <img width=\"400\" src=\"assets/images/laravel.png\">\r\n    <img width=\"300\"\r\n         src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\">\r\n  </div>\r\n  <h2 class=\"text-center\" style=\"width: 100%\">Here are some links to help you start: </h2>\r\n  <ul class=\"text-center\"  style=\"width: 100%; list-style-type: none\">\r\n    <li>\r\n      <h2><a target=\"_blank\" href=\"https://laravel.com/docs/5.4\">Laravel Docs</a></h2>\r\n    </li>\r\n    <li>\r\n      <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">Angular CLI\r\n        Documentation</a>\r\n      </h2>\r\n    </li>\r\n    <li>\r\n      <h2><a target=\"_blank\" href=\"https://getbootstrap.com/\">Bootstrap4 Documentation</a></h2>\r\n    </li>\r\n  </ul>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.title = "App";
    }
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-welcome",
        template: __webpack_require__("../../../../../src/app/components/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/welcome/welcome.component.scss")]
    })
], WelcomeComponent);

//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, toastrService) {
        this.router = router;
        this.toastrService = toastrService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem("currentUser")) {
            // logged in so return true
            return true;
        }
        this.toastrService.add("warning", "You are not allowed. Please log in!");
        // not logged in so redirect to login page
        this.router.navigate(["/login"]);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__["a" /* ToastrService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/user-allowed-to-post-guard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAllowedToPostGuardGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserAllowedToPostGuardGuard = (function () {
    function UserAllowedToPostGuardGuard(router, location, postService, toastr) {
        this.router = router;
        this.location = location;
        this.postService = postService;
        this.toastr = toastr;
        var user = JSON.parse(localStorage.getItem("currentUser"));
        if (user && user.token) {
            this.authenticated = true;
        }
        else {
            this.authenticated = false;
        }
        this.user = user;
    }
    UserAllowedToPostGuardGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.postService.findPost(next.params.id).map(function (data) {
            _this.post = data.post;
            if (_this.user.email === _this.post.user.email) {
                return true;
            }
            _this.toastr.add("warning", "You are not allowed to perform this action!");
            return false;
        }, function (error) {
            _this.toastr.add("warning", "You are not allowed to perform this action!");
            // not logged in so redirect to login page
            _this.location.back();
            return false;
        });
    };
    return UserAllowedToPostGuardGuard;
}());
UserAllowedToPostGuardGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toastr_service__["a" /* ToastrService */]) === "function" && _d || Object])
], UserAllowedToPostGuardGuard);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/user-allowed-to-post-guard.guard.js.map

/***/ }),

/***/ "../../../../../src/app/helpers/arrays.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrays; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

var arrays = {
    transformToArray: function ($obj) {
        var arrays = __WEBPACK_IMPORTED_MODULE_0_jquery__["map"]($obj, function (value, index) {
            return [value];
        });
        return arrays[0];
    }
};
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/arrays.js.map

/***/ }),

/***/ "../../../../../src/app/models/Post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__("../../../../../src/app/models/User.ts");

var Post = (function () {
    function Post() {
        this.created_at = "";
        this.user = new __WEBPACK_IMPORTED_MODULE_0__User__["a" /* User */];
        this.created = null;
        this.view_counter = "";
        this.user_id = null;
        this.tagged = [];
        this.isLiked = false;
        this.likes_counter = 0;
    }
    return Post;
}());

//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/Post.js.map

/***/ }),

/***/ "../../../../../src/app/models/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/User.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/keep-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeepHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeepHtmlPipe = (function () {
    function KeepHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    KeepHtmlPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    return KeepHtmlPipe;
}());
KeepHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "keepHtml", pure: false }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _a || Object])
], KeepHtmlPipe);

var _a;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/keep-html.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_posts_posts_component__ = __webpack_require__("../../../../../src/app/components/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_post_create_post_create_component__ = __webpack_require__("../../../../../src/app/components/post-create/post-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_personal_posts_personal_posts_component__ = __webpack_require__("../../../../../src/app/components/personal-posts/personal-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_edit_post_edit_post_component__ = __webpack_require__("../../../../../src/app/components/edit-post/edit-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_user_allowed_to_post_guard_guard__ = __webpack_require__("../../../../../src/app/guards/user-allowed-to-post-guard.guard.ts");











var appRoutes = [
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__["a" /* LoginComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_1__components_register_register_component__["a" /* RegisterComponent */] },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_2__components_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: "posts", component: __WEBPACK_IMPORTED_MODULE_3__components_posts_posts_component__["a" /* PostsComponent */], canActivate: [] },
    { path: "posts/create", component: __WEBPACK_IMPORTED_MODULE_4__components_post_create_post_create_component__["a" /* PostCreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: "posts/personal", component: __WEBPACK_IMPORTED_MODULE_6__components_personal_posts_personal_posts_component__["a" /* PersonalPostsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    {
        path: "posts/update/:id", component: __WEBPACK_IMPORTED_MODULE_7__components_edit_post_edit_post_component__["a" /* EditPostComponent */], canActivate: [
            __WEBPACK_IMPORTED_MODULE_10__guards_user_allowed_to_post_guard_guard__["a" /* UserAllowedToPostGuardGuard */]
        ]
    },
    { path: "posts/:id", component: __WEBPACK_IMPORTED_MODULE_8__components_post_post_component__["a" /* PostComponent */], canActivate: [] },
    { path: "user", component: __WEBPACK_IMPORTED_MODULE_9__components_user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    // otherwise redirect to home
    { path: "**", redirectTo: "" }
];
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_app__ = __webpack_require__("../../../../../src/config/app.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_arrays__ = __webpack_require__("../../../../../src/app/helpers/arrays.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toastr_service__ = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AuthenticationService = (function () {
    function AuthenticationService(http, toastrService) {
        this.http = http;
        this.toastrService = toastrService;
        /**
         * emit events
         *
         * @type {EventEmitter}
         */
        this.userEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser && currentUser.token;
    }
    /**
     * register this asshole
     *
     * @param email
     * @param password
     * @returns {Observable<R>}
     */
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/login", { email: email, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().meta.token;
            if (token) {
                // set token property
                _this.token = token;
                _this.userEvent.emit(response.json());
                var name = response.json().data.name ? response.json().data.name : "";
                // store email and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("currentUser", JSON.stringify({ name: name, email: email, token: token }));
                _this.getUser();
                _this.userChange.emit(response.json());
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthenticationService.prototype.getUser = function () {
        var _this = this;
        var that = this;
        this.user = this.getAuthenticatedUser().subscribe(function (users) {
            if (that.token) {
                that.user = __WEBPACK_IMPORTED_MODULE_4__helpers_arrays__["a" /* arrays */].transformToArray(users);
                that.authenticated = true;
                _this.userChange.emit(_this.user);
            }
        }, function (error) {
            that.user = [];
            that.authenticated = false;
            localStorage.removeItem("currentUser");
            localStorage.removeItem("io");
            _this.userChange.emit(null);
            that.logout();
        });
        return this.user;
    };
    /**
     * get all users
     *
     * @returns {Observable<R>}
     */
    AuthenticationService.prototype.getUsers = function () {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Authorization": "Bearer " + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/users", options)
            .map(function (response) { return response.json(); });
    };
    /**
     * get the authenticated user
     *
     * @returns {Observable<R>}
     */
    AuthenticationService.prototype.getAuthenticatedUser = function () {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Authorization": "Bearer " + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/user", options)
            .map(function (response) { return response.json(); });
    };
    /**
     * register this user
     *
     * @param {string} name
     * @param {string} email
     * @param {string} password
     * @param {string} confirm
     * @returns {Observable<boolean>}
     */
    AuthenticationService.prototype.register = function (name, email, password, confirm) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/register", {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirm
        })
            .map(function (response) {
            // register successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            if (token) {
                // set token property
                _this.token = token;
                _this.userEvent.emit(response.json());
                var name_1 = response.json().name ? response.json().name : "";
                var id = response.json().id ? response.json().id : 0;
                var user = { id: id, name: name_1, email: email, token: token };
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("currentUser", JSON.stringify(user));
                _this.user = user;
                _this.authenticated = true;
                _this.userChange.emit(_this.user);
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    /**
     * logout fucking user
     */
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem("currentUser");
        this.userChange.emit(null);
        this.toastrService.add("info", "You are logged out!");
    };
    return AuthenticationService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AuthenticationService.prototype, "userChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AuthenticationService.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AuthenticationService.prototype, "authenticated", void 0);
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__toastr_service__["a" /* ToastrService */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/file-upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_app__ = __webpack_require__("../../../../../src/config/app.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FileUploadService = (function () {
    function FileUploadService(http) {
        this.http = http;
        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser && currentUser.token;
    }
    FileUploadService.prototype.fileUpload = function (event, post) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append("file", file, file.name);
            formData.append("post_id", post.id);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Authorization": "Bearer " + this.token });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            // get users from api
            return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/blog/file/uploadFile", formData, options)
                .map(function (response) { return response.json(); });
        }
    };
    return FileUploadService;
}());
FileUploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FileUploadService);

var _a;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/file-upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/like.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_app__ = __webpack_require__("../../../../../src/config/app.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var LikeService = (function () {
    function LikeService(http) {
        this.http = http;
        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser && currentUser.token;
    }
    /**
     * toggle like
     *
     * @param {Like} like
     * @returns {Observable<any>}
     */
    LikeService.prototype.likeToggle = function (like) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Authorization": "Bearer " + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/blog/likeToggle", like, options)
            .map(function (response) { return response.json(); });
    };
    /**
     * toggle like
     *
     * @param {Like} like
     * @returns {Observable<any>}
     */
    LikeService.prototype.likesModelStatus = function (like) {
        if (this.token) {
            // add authorization header with jwt token
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Authorization": "Bearer " + this.token });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            // get users from api
            return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/blog/likesModelStatus?model=" + like.model + "&model_id=" + like.model_id, options)
                .map(function (response) { return response.json(); });
        }
        else {
            // get users from api
            return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/blog/likesModelStatus?model=" + like.model + "&model_id=" + like.model_id)
                .map(function (response) { return response.json(); });
        }
    };
    return LikeService;
}());
LikeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LikeService);

var _a;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/like.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_app__ = __webpack_require__("../../../../../src/config/app.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var PostService = (function () {
    function PostService(http) {
        this.http = http;
        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser && currentUser.token;
    }
    /**
     * get all users
     *
     * @returns {Observable<R>}
     */
    PostService.prototype.getPosts = function (page) {
        if (this.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Authorization": "Bearer " + this.token });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            // get users from api
            return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/blog/index?page=" + page, options)
                .map(function (response) { return response.json(); });
        }
        // get users from api
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/blog/index?page=" + page)
            .map(function (response) { return response.json(); });
    };
    /**
     * get all users
     *
     * @returns {Observable<R>}
     */
    PostService.prototype.findPost = function (id) {
        if (this.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Authorization": "Bearer " + this.token });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            // get users from api
            return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/blog/" + id, options)
                .map(function (response) { return response.json(); });
        }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/blog/" + id)
            .map(function (response) { return response.json(); });
    };
    /**
     * get personal posts
     *
     * @param {number} page
     * @returns {Observable<any>}
     */
    PostService.prototype.getPersonalPosts = function (page) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Authorization": "Bearer " + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/blog/personal?page=" + page, options)
            .map(function (response) { return response.json(); });
    };
    /**
     * save the post
     *
     * @param {Post} post
     * @returns {Observable<any>}
     */
    PostService.prototype.savePost = function (post) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Authorization": "Bearer " + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/blog/store", post, options)
            .map(function (response) { return response.json(); });
    };
    PostService.prototype.updatePost = function (post) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Authorization": "Bearer " + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/blog/update/" + post.id, post, options)
            .map(function (response) { return response.json(); });
    };
    /**
     * delete the post
     *
     * @param {number} id
     * @returns {Observable<any>}
     */
    PostService.prototype.deletePost = function (id) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Authorization": "Bearer " + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/blog/" + id, options)
            .map(function (response) { return response.json(); });
    };
    return PostService;
}());
PostService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PostService);

var _a;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/post.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_app__ = __webpack_require__("../../../../../src/config/app.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.searchQuery = function (search) {
        // get users from api
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/api/blog/search?search=" + search)
            .map(function (response) { return response.json(); });
    };
    SearchService.prototype.requestAutocompleteItems = function (text) {
        var url = __WEBPACK_IMPORTED_MODULE_3__config_app__["a" /* app */].api_url + "/search?search=" + text;
        return this.http
            .get(url)
            .map(function (data) { return data.json(); });
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/search.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/toastr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ToastrEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastrEvent = (function () {
    function ToastrEvent(name, message) {
        this.name = name;
        this.message = message;
    }
    return ToastrEvent;
}());

var ToastrService = (function () {
    function ToastrService() {
        this.events = [];
        this.eventAdded$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ToastrService.prototype.list = function () {
        return this.events;
    };
    ToastrService.prototype.add = function (name, message) {
        var toastr = new ToastrEvent(name, message);
        this.events.push(toastr);
        this.eventAdded$.emit(toastr);
    };
    return ToastrService;
}());
ToastrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ToastrService);

//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/toastr.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': "Minimum length " + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());
ValidationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ValidationService);

//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/validation.service.js.map

/***/ }),

/***/ "../../../../../src/app/support/CustomToastr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomToastr; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr_src_toast_options__ = __webpack_require__("../../../../ng2-toastr/src/toast-options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr_src_toast_options___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr_src_toast_options__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomToastr = (function (_super) {
    __extends(CustomToastr, _super);
    function CustomToastr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positionClass = "toast-bottom-right"; // you can override any options available
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        return _this;
    }
    return CustomToastr;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr_src_toast_options__["ToastOptions"]));

//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/CustomToastr.js.map

/***/ }),

/***/ "../../../../../src/app/support/zone.listener.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoneListener; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZoneListener = (function () {
    function ZoneListener(ngZone) {
        this.ngZone = ngZone;
        this.ngZone.onStable.subscribe(this.onZoneStable);
        this.ngZone.onUnstable.subscribe(this.onZoneUnstable);
        this.ngZone.onError.subscribe(this.onZoneError);
    }
    ZoneListener.prototype.onZoneStable = function () {
        console.log('ZoneListener: We are stable');
    };
    ZoneListener.prototype.onZoneUnstable = function () {
        console.log('ZoneListener: We are unstable');
    };
    ZoneListener.prototype.onZoneError = function (error) {
        console.error('ZoneListener: Error', error instanceof Error ? error.message : error.toString());
    };
    return ZoneListener;
}());
ZoneListener = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object])
], ZoneListener);

var _a;
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/zone.listener.js.map

/***/ }),

/***/ "../../../../../src/config/app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });
var app = {
    api_url: "http://lablog.dev",
    name: "BadCoders"
};
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/app.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_4__app_services_authentication_service__["a" /* AuthenticationService */]]);
//# sourceMappingURL=C:/Users/nilse/Code/lablog/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map