import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {Router} from "@angular/router-deprecated";
import {User} from "../../../shared/User/user";
import {UserService} from "../../../shared/User/userService";

@Component({
    selector: "matchProfEight",
    templateUrl: "pages/matchingProfile/matchProfEight/matchProfEight.html",
    styleUrls: ["pages/matchingProfile/matchProfEight/matchProfEight-common.css", "pages/matchingProfile/matchProfEight/matchProfEight.css"]
})

export class MatchProfEight {
    @ViewChild("container") container: ElementRef;
    
    constructor(private _router:Router, private page: Page, private _userService: UserService) {
    }
    
    importanceItems: string[] = ["Not Important", "Somewhat Important", "Important", "Extremely Important"];
    
    importanceMap = new Map()
    
    ngOnInit() {
        this.importanceMap.set(0, 1);
        this.importanceMap.set(1, 10);
        this.importanceMap.set(2, 50);
        this.importanceMap.set(3, 100);
    }
    
}