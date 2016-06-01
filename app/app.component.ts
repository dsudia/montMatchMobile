import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {LandingPage} from "./pages/landing/landing.component";
import {LoginPage} from "./pages/login/login.component";
import {SchoolInfo} from "./pages/signUp/schoolInfo/schoolInfo.component";
import {SignUpOne} from "./pages/signUp/signUpOne/signUpOne.component";
import {HTTP_PROVIDERS} from "@angular/http";
import {UserService} from "./shared/User/userService";

@Component({
    selector: "main",
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, NS_ROUTER_PROVIDERS, UserService],
    template: "<page-router-outlet></page-router-outlet>"
})
@RouteConfig([
    { path: "/Landing", component: LandingPage, name: "Landing", useAsDefault: true},
    { path: "/Login", component: LoginPage, name: "Login" },
    { path: "/SchoolInfo", component: SchoolInfo, name: "SchoolInfo" },
    { path: "/SignUpOne", component: SignUpOne, name: "SignUpOne"}
])
export class AppComponent {}
