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

    calsItems: string[] = ["Traditional", "Year-Round"];
    
    statesItems: string[] = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"];
    
    orgTypesSelectedIndexChanged(orgTypesPicker) {
        console.log(orgTypesPicker.selectedIndex);
        this._userService.user.matchingProfile.orgTypes.shift();
        this._userService.user.matchingProfile.orgTypes.push(orgTypesPicker.selectedIndex));
    }
}