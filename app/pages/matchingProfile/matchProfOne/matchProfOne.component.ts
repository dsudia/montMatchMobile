import {Component, ElementRef, ViewChild} from "@angular/core";
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
    
    orgTypesSelectedIndexChanged(picker) {
        this._userService.user.matchingProfile.orgTypes.push(picker.selectedIndex);
    }
}