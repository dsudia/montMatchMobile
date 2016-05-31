import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {LandingPage} from "./pages/landing/landing.component";
import {LoginPage} from "./pages/login/login.component";

@Component({
    selector: "main",
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [NS_ROUTER_PROVIDERS],
    template: "<page-router-outlet></page-router-outlet>"
})
@RouteConfig([
    { path: "/Landing", component: LandingPage, name: "Landing", useAsDefault: true},
    { path: "/Login", component: LoginPage, name: "Login" }
])
export class AppComponent {}
