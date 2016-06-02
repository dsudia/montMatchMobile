import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {Router} from "@angular/router-deprecated";
import {User} from "../../../shared/User/user";
import {UserService} from "../../../shared/User/userService";

@Component({
    selector: "matchProfFive",
    templateUrl: "pages/matchingProfile/matchProfFive/matchProfFive.html",
    styleUrls: ["pages/matchingProfile/matchProfFive/matchProfFive-common.css", "pages/matchingProfile/matchProfFive/matchProfFive.css"]
})

export class MatchProfFive {
    @ViewChild("container") container: ElementRef;
    
    constructor(private _router:Router, private page: Page, private _userService: UserService) {
    }
    
    locTypesItems: string[] = ["Urban", "Suburban", "Small City", "Rural"];
    
    importanceItems: string[] = ["Not Important", "Somewhat Important", "Important", "Extremely Important"];
    
    importanceMap = new Map()
    
    ngOnInit() {
        this.importanceMap.set(0, 1);
        this.importanceMap.set(1, 10);
        this.importanceMap.set(2, 50);
        this.importanceMap.set(3, 100);
    }
    
    locTypesSelectedIndexChanged(locTypesPicker) {
        this._userService.user.matchingProfile.cals.shift();
        this._userService.user.matchingProfile.cals.push(locTypesPicker.selectedIndex);
    }
    
    locTypesWgtSelectedIndexChanged(locTypesWgtPicker) {
        this._userService.user.matchingProfile.locTypesWgt = <number> this.importanceMap.get(locTypesWgtPicker.selectedIndex);
    }
    
    goToMatchProfSix() {
        this._router.navigate(["/MatchProfSix"])
    }
}