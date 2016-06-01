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
    @ViewChild("container") conatiner: ElementRef;
    
    constructor(private _router: Router, private page: Page, private _userService: UserService) {
    }
    
    register() {
        if (!this._userService.user.isValidEmail()) {
            alert("Please enter a valid email");
            return;
        }
        if (!this._userService.user.isValidPassword()) {
            alert("Please enter a password that is at least 8 characters long, and contains one uppercase, one lowercase, one number and one special character.")
            return;
        }
        if (this._userService.user.password !== this._userService.user.confPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (this._userService.user.displayName === "" || this._userService.user.displayName === undefined) {
            alert("Please enter a school name.");
            return;
        }
        this._userService.register()
        .map(res => res.json())
        .subscribe(body => {
            console.log('----------- Res ---------', body);
            this._router.navigate(["/SchoolInfo"]);
        }, error => {
            alert(error._body.message);
        })
    }
}