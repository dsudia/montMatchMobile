import {Component, ElementRef, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {Router} from "@angular/router-deprecated";
import {UserService} from "../../shared/User/userService";

@Component({
    selector: "login",
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})

export class LoginPage {
    loginEmail: string;
    loginPass: string;
    @ViewChild("container") container: ElementRef;
    
    constructor(private _router:Router, private page: Page, private _userService: UserService) {
        this.loginEmail = "";
        this.loginPass = "";
    }
    
}