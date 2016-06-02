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
    
    trainingsItems: string[] = ["0-3", "3-6", "6-9", "9-12", "12-15", "15-18"];
    
    importanceItems: string[] = ["Not Important", "Somewhat Important", "Important", "Extremely Important"];
    
    importanceMap = new Map()
    
    AMI: boolean = false;
    AMS: boolean = false;
    MCI: boolean = false;
    SNM: boolean = false;
    other: boolean = false;
    trainings = this._userService.user.matchingProfile.trainings;
    
    ngOnInit() {
        this.importanceMap.set(0, 1);
        this.importanceMap.set(1, 10);
        this.importanceMap.set(2, 50);
        this.importanceMap.set(3, 100);
    }
    
    AMIChange() {
        this.AMI = !this.AMI;
        console.log("value equals ", this.AMI);
        if (this.AMI === true) {
            this.trainings.push(0);
            console.log(this.trainings);
            return;
        }
        if (this.AMI === false) {
            this.trainings.splice(this.trainings.indexOf(0), 1);
            console.log(this.trainings);
            return;
        }
    }
    
    AMSChange() {
        this.AMS = !this.AMS;
        if (this.AMS === true) {
            this.trainings.push(1);
            console.log(this.trainings);
            return;
        }
        if (this.AMS === false) {
            this.trainings.splice(this.trainings.indexOf(1), 1);
            console.log(this.trainings);
            return;
        }
    }
    
    MCIChange() {
        this.MCI = !this.MCI;
        if (this.MCI === true) {
            this.trainings.push(2);
            console.log(this.trainings);
            return;
        }
        if (this.MCI === false) {
            this.trainings.splice(this.trainings.indexOf(2), 1);
            console.log(this.trainings);
            return;
        }
    }
    
    SNMChange() {
        this.SNM = !this.SNM;
        if (this.SNM === true) {
            this.trainings.push(3);
            console.log(this.trainings);
            return;
        }
        if (this.SNM === false) {
            this.trainings.splice(this.trainings.indexOf(3), 1);
            console.log(this.trainings);
            return;
        }
    }
    
    otherChange() {
        this.other = !this.other;
        if (this.other === true) {
            this.trainings.push(4);
            console.log(this.trainings);
            return;
        }
        if (this.other === false) {
            this.trainings.splice(this.trainings.indexOf(4), 1);
            console.log(this.trainings);
            return;
        }
    }
    
    trainingsWgtSelectedIndexChanged(trainingsWgtPicker) {
        this._userService.user.matchingProfile.trainingsWgt = <number> this.importanceMap.get(trainingsWgtPicker.selectedIndex);
    }
    
    goToMatchProfEight() {
        this._router.navigate(["/MatchProfEight"])
    }
    
}