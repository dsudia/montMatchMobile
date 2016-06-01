import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {Router} from "@angular/router-deprecated";
import {User} from "../../../shared/User/user";
import {UserService} from "../../../shared/User/userService";

@Component({
    selector: "matchProfTWo",
    templateUrl: "pages/matchingProfile/matchProfTwo/matchProfTwo.html",
    styleUrls: ["pages/matchingProfile/matchProfTwo/matchProfTwo-common.css", "pages/matchingProfile/matchProfTwo/matchProfTwo.css"]
})

export class MatchProfTwo {
    @ViewChild("container") container: ElementRef;
    
    constructor(private _router:Router, private page: Page, private _userService: UserService) {
    }

    calsItems: string[] = ["Traditional", "Year-Round"];
    
    statesItems: string[] = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"];
    
    importanceItems: string[] = ["Not Important", "Somewhat Important", "Important", "Extremely Important"];
    
    importanceMap = new Map()
    
    ngOnInit() {
        this.importanceMap.set(0, 1);
        this.importanceMap.set(1, 10);
        this.importanceMap.set(2, 50);
        this.importanceMap.set(3, 100);
    }
    
    calsSelectedIndexChanged(calsPicker) {
        this._userService.user.matchingProfile.cals.shift();
        this._userService.user.matchingProfile.cals.push(calsPicker.selectedIndex);
    }
    
    calsWgtSelectedIndexChanged(calsWgtPicker) {
        this._userService.user.matchingProfile.calsWgt = <number> this.importanceMap.get(calsWgtPicker.selectedIndex);
    }
    
    goToMatchProfThree() {
        this._router.navigate(["/MatchProfThree"])
    }
}