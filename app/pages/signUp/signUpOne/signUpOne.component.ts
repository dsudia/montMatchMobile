import {Component, ElementRef, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {Router} from "@angular/router-deprecated";
import {User} from "../../../shared/User/user";

@Component({
    selector: "signUpOne",
    templateUrl: "pages/signUp/signUpOne/signUpOne.html",
    styleUrls: ["pages/signUp/signUpOne/signUpOne.common.css", "pages/signUp/signUpOne/signUpOne.css"]
})

export class SignUpOne {
    user: User;
    confPassword: string;
    
    @ViewChild("container") container: ElementRef;
    
    constructor(private _router:Router, private page: Page) {
        this.user = new User();
    }
    
}