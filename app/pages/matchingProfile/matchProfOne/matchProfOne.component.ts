import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {Router} from "@angular/router-deprecated";
import {User} from "../../../shared/User/user";
import {UserService} from "../../../shared/User/userService";

@Component({
    selector: "matchProfOne",
    templateUrl: "pages/matchingProfile/matchProfOne/matchProfOne.html",
    styleUrls: ["pages/matchingProfile/matchProfOne/matchProfOne-common.css", "pages/matchingProfile/matchProfOne/matchProfOne.css"]
})

export class MatchProfOne {
    @ViewChild("container") container: ElementRef;
    
    constructor(private _router:Router, private page: Page, private _userService: UserService) {
    }
    
    orgTypesItems: string[] = ["Public District", "Public Magnet", "Public Charter", "Public Innovation", "Private For-Profit, Single Owner", "Private For-Profit, Corporate Owner", "Private Non-Profit"];
    
    importanceItems: string[] = ["Not Important", "Somewhat Important", "Important", "Extremely Important"];
    
    importanceMap = new Map()
    
    ngOnInit() {
        this.importanceMap.set(0, 1);
        this.importanceMap.set(1, 10);
        this.importanceMap.set(2, 50);
        this.importanceMap.set(3, 100);
    }
    
    orgTypesSelectedIndexChanged(orgTypesPicker) {
        this._userService.user.matchingProfile.orgTypes.shift();
        this._userService.user.matchingProfile.orgTypes.push(orgTypesPicker.selectedIndex);
    }
    
    orgTypesWgtSelectedIndexChanged(orgTypesWgtPicker) {
        this._userService.user.matchingProfile.orgTypesWgt = <number> this.importanceMap.get(orgTypesWgtPicker.selectedIndex);
    }
    
    goToMatchProfTwo() {
        this._router.navigate(["/MatchProfTwo"]);
    }
}