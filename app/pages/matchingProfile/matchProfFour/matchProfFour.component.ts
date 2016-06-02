import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {Router} from "@angular/router-deprecated";
import {User} from "../../../shared/User/user";
import {UserService} from "../../../shared/User/userService";

@Component({
    selector: "matchProfFour",
    templateUrl: "pages/matchingProfile/matchProfFour/matchProfFour.html",
    styleUrls: ["pages/matchingProfile/matchProfFour/matchProfFour-common.css", "pages/matchingProfile/matchProfFour/matchProfFour.css"]
})

export class MatchProfFour {
    @ViewChild("container") container: ElementRef;
    
    constructor(private _router:Router, private page: Page, private _userService: UserService) {
    }
    
    sizesItems: string[] = ["<4 classrooms", "4-9 classrooms", "10-19 classrooms", ">20 classrooms"];
    
    importanceItems: string[] = ["Not Important", "Somewhat Important", "Important", "Extremely Important"];
    
    importanceMap = new Map()
    
    ngOnInit() {
        this.importanceMap.set(0, 1);
        this.importanceMap.set(1, 10);
        this.importanceMap.set(2, 50);
        this.importanceMap.set(3, 100);
    }
    
    sizesSelectedIndexChanged(sizesPicker) {
        this._userService.user.matchingProfile.cals.shift();
        this._userService.user.matchingProfile.cals.push(sizesPicker.selectedIndex);
    }
    
    sizesWgtSelectedIndexChanged(sizesWgtPicker) {
        this._userService.user.matchingProfile.sizesWgt = <number> this.importanceMap.get(sizesWgtPicker.selectedIndex);
    }
    
    goToMatchProfFive() {
        this._router.navigate(["/MatchProfFive"])
    }
}