import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {Router} from "@angular/router-deprecated";
import * as applicationSettings from "application-settings";
import absoluteLayoutModule = require("ui/layouts/absolute-layout");

@Component({
    selector: "landing",
    templateUrl: "pages/landing/landing.html",
    styleUrls: ["pages/landing/landing-common.css", "pages/landing/landing.css"]
})

export class LandingPage {
    @ViewChild("container") container: ElementRef;

    // public credential: boolean;

    // ngOnInit() {
    //     this.credential = applicationSettings.hasKey("user");
    //     if(this.credential === false) {
    //         this._router.navigate(["/Login"])
    //     }
    // }

    constructor(private _router: Router, private page: Page) {
    }

    goToLogin() {
        this._router.navigate(["/Login"])
        console.log('tapped the Log In button')
    }

    goToSchoolInfo() {
        this._router.navigate(["/SchoolInfo"])
    }
}