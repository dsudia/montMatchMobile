import {Component, ElementRef, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {User} from "../../shared/User/user";
import {Label} from "ui/label";
import {UserService} from "../../shared/User/userService";
import observableArray = require("data/observable-array");

@Component({
    selector: "SuggestedMatches",
    templateUrl: "pages/suggestedMatches/suggestedMatches.html",
    styleUrls: ["pages/suggestedMatches/suggestedMatches-common.css"]
})

export class SuggestedMatches {
    suggestedMatches: Array<Object>;
    isLoading = false;
    listLoaded = false;

    @ViewChild("container") container: ElementRef;
    
    constructor(private _router:Router, private page: Page, private _userService: UserService) {
    }
    
    ngOnInit() {
        this.isLoading = true;
        this._userService.getSuggestedMatches()
        .map(res => res.json())
        .subscribe(response => {
            this.suggestedMatches = response.suggestedMatches;
        });
        this.isLoading = false;
        this.listLoaded = true;
    }
    
    viewSingleProfile(email: string) {
        this._userService.user.currentlyViewingProfile = email;
        this._router.navigate(["/ViewProfile"]);
    }
    
}