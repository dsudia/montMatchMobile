import {Component, ElementRef, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {Router} from "@angular/router-deprecated";

@Component({
    selector: "schoolInfo",
    templateUrl: "pages/schoolSignUp/schoolInfo/schoolInfo.html",
    styleUrls: ["pages/schoolSignUp/schoolInfo/schoolInfo.common.css", "pages/schoolSignUp/schoolInfo/schoolInfo.css"]
})

export class SchoolInfo {
    @ViewChild("container") container: ElementRef;
    
    constructor(private _router:Router, private page: Page) {
    }
    
}