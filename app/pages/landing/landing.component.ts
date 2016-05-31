import {Component, ElementRef, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {Router} from "@angular/router-deprecated";

@Component({
    selector: "landing",
    templateUrl: "pages/landing/landing.html",
    styleUrls: ["pages/landing/landing.common.css", "pages/landing/landing.css"]
})

export class LandingPage {
    @ViewChild("container") container: ElementRef;
    
    constructor(private _router:Router, private page: Page) {
    }
    
    goToLogin() {
        this._router.navigate(["/Login"])
    }
}