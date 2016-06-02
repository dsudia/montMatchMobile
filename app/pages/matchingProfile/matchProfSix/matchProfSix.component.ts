import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {Router} from "@angular/router-deprecated";
import {User} from "../../../shared/User/user";
import {UserService} from "../../../shared/User/userService";

@Component({
    selector: "matchProfSix",
    templateUrl: "pages/matchingProfile/matchProfSix/matchProfSix.html",
    styleUrls: ["pages/matchingProfile/matchProfSix/matchProfSix-common.css", "pages/matchingProfile/matchProfSix/matchProfSix.css"]
})

export class MatchProfSix {
    @ViewChild("container") container: ElementRef;
    
    constructor(private _router:Router, private page: Page, private _userService: UserService) {
    }
    
    ageRangesItems: string[] = ["0-3", "3-6", "6-9", "9-12", "12-15", "15-18"];
    
    importanceItems: string[] = ["Not Important", "Somewhat Important", "Important", "Extremely Important"];
    
    importanceMap = new Map()
    
    zeroToThree: boolean = false;
    threeToSix: boolean = false;
    sixToNine: boolean = false;
    nineToTwelve: boolean = false;
    twelveToFifteen: boolean = false;
    fifteenToEighteen: boolean = false;
    ageRanges = this._userService.user.matchingProfile.ageRanges;
    
    ngOnInit() {
        this.importanceMap.set(0, 1);
        this.importanceMap.set(1, 10);
        this.importanceMap.set(2, 50);
        this.importanceMap.set(3, 100);
    }
    
    zeroToThreeChange() {
        this.zeroToThree = !this.zeroToThree;
        console.log("value equals ", this.zeroToThree);
        if (this.zeroToThree === true) {
            this.ageRanges.push(0);
            console.log(this.ageRanges);
            return;
        }
        if (this.zeroToThree === false) {
            this.ageRanges.splice(this.ageRanges.indexOf(0), 1);
            console.log(this.ageRanges);
            return;
        }
    }
    
    threeToSixChange() {
        this.threeToSix = !this.threeToSix;
        if (this.threeToSix === true) {
            this.ageRanges.push(1);
            console.log(this.ageRanges);
            return;
        }
        if (this.threeToSix === false) {
            this.ageRanges.splice(this.ageRanges.indexOf(1), 1);
            console.log(this.ageRanges);
            return;
        }
    }
    
    sixToNineChange() {
        this.sixToNine = !this.sixToNine;
        if (this.sixToNine === true) {
            this.ageRanges.push(2);
            console.log(this.ageRanges);
            return;
        }
        if (this.sixToNine === false) {
            this.ageRanges.splice(this.ageRanges.indexOf(2), 1);
            console.log(this.ageRanges);
            return;
        }
    }
    
    nineToTwelveChange() {
        this.nineToTwelve = !this.nineToTwelve;
        if (this.nineToTwelve === true) {
            this.ageRanges.push(3);
            console.log(this.ageRanges);
            return;
        }
        if (this.nineToTwelve === false) {
            this.ageRanges.splice(this.ageRanges.indexOf(3), 1);
            console.log(this.ageRanges);
            return;
        }
    }
    
    twelveToFifteenChange() {
        this.twelveToFifteen = !this.twelveToFifteen;
        if (this.twelveToFifteen === true) {
            this.ageRanges.push(4);
            console.log(this.ageRanges);
            return;
        }
        if (this.twelveToFifteen === false) {
            this.ageRanges.splice(this.ageRanges.indexOf(4), 1);
            console.log(this.ageRanges);
            return;
        }
    }
    
    fifteenToEighteenChange() {
        this.fifteenToEighteen = !this.fifteenToEighteen;
        if (this.fifteenToEighteen === true) {
            this.ageRanges.push(5);
            console.log(this.ageRanges);
            return;
        }
        if (this.fifteenToEighteen === false) {
            this.ageRanges.splice(this.ageRanges.indexOf(5), 1);
            console.log(this.ageRanges);
            return;
        }
    }
    
    goToMatchProfSeven() {
        this._router.navigate(["/MatchProfSeven"])
    }
}