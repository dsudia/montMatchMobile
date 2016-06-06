import {Component, ElementRef, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {Router} from "@angular/router-deprecated";
import {User} from "../../shared/User/user";
import {UserService} from "../../shared/User/userService";

@Component({
    selector: "login",
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})

export class LoginPage {
    user: User;
    loginEmail: string;
    loginPass: string;
    errorMessage: string;
    @ViewChild("container") container: ElementRef;
    
    constructor(private _router:Router, private page: Page, private _userService: UserService) {
        this.errorMessage = "";
        this.user = this._userService.user;
    }
    
    login() {
        console.log(this.loginEmail, this.loginPass);
        this._userService.loginUser(this.loginEmail, this.loginPass)
        .map(res => res.json())
        .subscribe((response) => {
            this.errorMessage = "";
            this._userService.user.token = response.token;
            this._router.navigate(["/SuggestedMatches"]);
        },
        (error) => {
            this.errorMessage = error._body.message;
        });
    }
    
}