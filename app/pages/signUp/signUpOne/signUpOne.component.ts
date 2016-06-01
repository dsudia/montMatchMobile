import {Component, ElementRef, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {Router} from "@angular/router-deprecated";
import {User} from "../../../shared/User/user";
import {UserService} from "../../../shared/User/userService";

@Component({
    selector: "signUpOne",
    templateUrl: "pages/signUp/signUpOne/signUpOne.html",
    styleUrls: ["pages/signUp/signUpOne/signUpOne-common.css", "pages/signUp/signUpOne/signUpOne.css"]
})

export class SignUpOne {
    user: User;
    @ViewChild("container") conatiner: ElementRef;
    
    constructor(private _router: Router, private page: Page, private _userService: UserService) {
        this.user = _userService.user;
    }
}