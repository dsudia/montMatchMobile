import {Component, ElementRef, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {Router} from "@angular/router-deprecated";

@Component({
    selector: "schoolInfo",
    templateUrl: "pages/signUp/schoolInfo/schoolInfo.html",
    styleUrls: ["pages/signUp/schoolInfo/schoolInfo-common.css", "pages/signUp/schoolInfo/schoolInfo.css"]
})

export class SchoolInfo {
    @ViewChild("container") container: ElementRef;
    
    constructor(private _router:Router, private page: Page) {
    }
    
    goToSignUpOne() {
        this._router.navigate(["/SignUpOne"]);
    }
    
}