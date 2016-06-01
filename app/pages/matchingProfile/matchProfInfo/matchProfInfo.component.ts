import {Component, ElementRef, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {Router} from "@angular/router-deprecated";

@Component({
    selector: "matchProfInfo",
    templateUrl: "pages/matchingProfile/matchProfInfo/matchProfInfo.html",
    styleUrls: ["pages/matchingProfile/matchProfInfo/matchProfInfo-common.css", "pages/matchingProfile/matchProfInfo/matchProfInfo.css"]
})

export class MatchProfInfo {
    @ViewChild("container") container: ElementRef;
    
    constructor(private _router:Router, private page: Page) {
    }
    
    goToMatchProfOne() {
        this._router.navigate(["/MatchProfOne"])
    }
}