import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {LandingPage} from "./pages/landing/landing.component";
import {LoginPage} from "./pages/login/login.component";
import {SchoolInfo} from "./pages/signUp/schoolInfo/schoolInfo.component";
import {SignUpOne} from "./pages/signUp/signUpOne/signUpOne.component";
import {StateAndPicture} from "./pages/signUp/stateAndPicture/stateAndPicture.component";
import {MatchProfInfo} from "./pages/matchingProfile/matchProfInfo/matchProfInfo.component";
import {MatchProfOne} from "./pages/matchingProfile/matchProfOne/matchProfOne.component";
import {MatchProfTwo} from "./pages/matchingProfile/matchProfTwo/matchProfTwo.component";
import {MatchProfThree} from "./pages/matchingProfile/matchProfThree/matchProfThree.component";
import {MatchProfFour} from "./pages/matchingProfile/matchProfFour/matchProfFour.component";
import {MatchProfFive} from "./pages/matchingProfile/matchProfFive/matchProfFive.component";
import {MatchProfSix} from "./pages/matchingProfile/matchProfSix/matchProfSix.component";
import {MatchProfSeven} from "./pages/matchingProfile/matchProfSeven/matchProfSeven.component";
import {MatchProfEight} from "./pages/matchingProfile/matchProfEight/matchProfEight.component";
import {SuggestedMatches} from "./pages/suggestedMatches/suggestedMatches.component";
import {ViewProfile} from "./pages/viewProfile/viewProfile.component";
import {TestButtons} from "./pages/testButtons/testButtons.component";
import {HTTP_PROVIDERS} from "@angular/http";
import {UserService} from "./shared/User/userService";
import fontModule = require("ui/styling/font");
fontModule.ios.registerFont("GoodJacket-Regular.otf");

@Component({
    selector: "main",
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, NS_ROUTER_PROVIDERS, UserService],
    template: "<page-router-outlet></page-router-outlet>"
})
@RouteConfig([
    { path: "/Landing", component: LandingPage, name: "Landing"},
    { path: "/StateAndPicture", component: StateAndPicture, name: "StateAndPicture"},
    { path: "/Login", component: LoginPage, name: "Login"},
    { path: "/SchoolInfo", component: SchoolInfo, name: "SchoolInfo" },
    { path: "/SignUpOne", component: SignUpOne, name: "SignUpOne"},
    { path: "/MatchProfInfo", component: MatchProfInfo, name: "MatchProfInfo"},
    { path: "/MatchProfOne", component: MatchProfOne, name: "MatchProfOne"},
    { path: "/MatchProfTwo", component: MatchProfTwo, name: "MatchProfTwo"},
    { path: "/MatchProfThree", component: MatchProfThree, name: "MatchProfThree"},
    { path: "/MatchProfFour", component: MatchProfFour, name: "MatchProfFour"},
    { path: "/MatchProfFive", component: MatchProfFive, name: "MatchProfFive"},
    { path: "/MatchProfSix", component: MatchProfSix, name: "MatchProfSix"},
    { path: "/MatchProfSeven", component: MatchProfSeven, name: "MatchProfSeven"},
    { path: "/MatchProfEight", component: MatchProfEight, name: "MatchProfEight"},
    { path: "/SuggestedMatches", component: SuggestedMatches, name: "SuggestedMatches", useAsDefault: true},
    { path: "/ViewProfile", component: ViewProfile, name: "ViewProfile"}
])
export class AppComponent {}
