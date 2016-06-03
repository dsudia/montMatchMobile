import {Component, ElementRef, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {User} from "../../shared/User/user";
import {Label} from "ui/label";
import {UserService} from "../../shared/User/userService";

@Component({
    selector: "SuggestedMatches",
    templateUrl: "pages/suggestedMatches/suggestedMatches.html",
    styleUrls: ["pages/suggestedMatches/suggestedMatches-common.css"]
})

export class SuggestedMatches {
    @ViewChild("container") container: ElementRef;
    
    constructor(private _router:Router, private page: Page, private _userService: UserService) {
    }
    
    ngOnInit() {
        
        this._userService.getSuggestedMatches();
    }
    hello(e) {
        console.log('Hello World!');
        console.log(e);
    }
    listViewItemTap(index) {
        console.log(index);   
    }
    
}