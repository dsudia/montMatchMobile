import {Component, ElementRef, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {User} from "../../shared/User/user";
import {Label} from "ui/label";
import {UserService} from "../../shared/User/userService";

@Component({
    selector: "TestButtons",
    templateUrl: "pages/testButtons/testButtons.html",
    styleUrls: ["pages/testButtons/testButtons-common.css"],
})

export class TestButtons {
    @ViewChild("container") container: ElementRef;
    statesBoolean: Object;
    statesArray: Array<String>;
    constructor(private _router:Router, private page: Page) {
        this.statesBoolean = {
            "AL": false,
            "AK": false,
            "AZ": false,
            "AR": false,
            "CA": false,
            "CO": false,
            "CT": false,
            "DE": false,
            "FL": false,
            "GA": false,
            "HI": false,
            "ID": false,
            "IL": false,
            "IN": false,
            "IA": false,
            "KS": false,
            "KY": false,
            "LA": false,
            "ME": false,
            "MD": false,
            "MA": false,
            "MI": false,
            "MN": false,
            "MS": false,
            "MO": false,
            "MT": false,
            "NE": false,
            "NV": false,
            "NH": false,
            "NJ": false,
            "NM": false,
            "NY": false,
            "NC": false,
            "ND": false,
            "OH": false,
            "OK": false,
            "OR": false,
            "PA": false,
            "RI": false,
            "SC": false,
            "SD": false,
            "TN": false,
            "TX": false,
            "UT": false,
            "VT": false,
            "VA": false,
            "WA": false,
            "WV": false,
            "WI": false,
            "WY": false,
        }
        this.statesArray = Object.keys(this.statesBoolean);
    }
    
    toggleState1(key: string) {
        this.toggle(this.statesArray, this.statesBoolean, key, false);
        console.log(this.getStateArray());
    }
    
    toggle(array: Array<any>, boolObject: Object, keyToChange: any, singleton: boolean) {
        boolObject[keyToChange] = !boolObject[keyToChange];
        if (singleton) {
            array.forEach(key => {
                if (key !== keyToChange) {
                    boolObject[key] = false;
                }
            });
        }
    }
    
    getStateArray() {
        return this.statesArray.map((key, index) => {
            return index;
        })
        .filter(index => {
            return this.statesBoolean[this.statesArray[index].toString()];
        })
    }
}