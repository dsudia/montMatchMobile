import {Component, ElementRef, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {User} from "../../shared/User/user";
import {Label} from "ui/label";
import {GridLayout} from "ui/layouts/grid-layout";
import {UserService} from "../../shared/User/userService";
import {MatchParams} from "./MatchParams";
import observableArray = require("data/observable-array");

@Component({
    selector: "ViewProfile",
    templateUrl: "pages/viewProfile/viewProfile.html",
    styleUrls: ["pages/viewProfile/viewProfile-common.css"]
})

export class ViewProfile {
    @ViewChild("container") container: ElementRef;
    theirEmail: string;
    theirProfile: User;
    myMatchProfile: Object;
    paramMap: Object;
    map: Object;
    constructor(private _router:Router, private page: Page, private _userService: UserService) {
        this.theirEmail = 'teacher1@test.com';
        this.theirProfile = new User();
        this.myMatchProfile = new Object();
        this.map = {
            Location: 'locTypes',
            Organization: 'orgTypes',
            Size: 'sizes',
            Calendar: 'cals',
            Traits: 'traits',
            States: 'states',
            Certification: 'training'
        }
        this.paramMap = {
            Location: {
                mine: [],
                theirs: [],
            },
            Traits: {
                mine: [],
                theirs: [],
            }
        }
    }
    ngOnInit() {
        this._userService.getProfile(this.theirEmail)
        .map(res => res.json())
        .subscribe(response => {
            this.theirProfile.displayName = response.profile.displayName;
            this.theirProfile.image = response.profile.avatarUrl;
            this.theirProfile.description = response.profile.description;
            this.theirProfile.state = response.profile.state;
            this.theirProfile.matchPercent = response.profile.matchPercent;
            this.theirProfile.isTeacher = response.profile.isTeacher;
            this.theirProfile.matchingProfile = response.theirMatchProfile;
            this.myMatchProfile = response.myMatchProfile;
            this.paramMapper("Location", true);
            this.paramMapper("Location", false);
            this.paramMapper("Traits", true);
            this.paramMapper("Traits", false);
        }, error => {
            console.log('Something went wrong!');
        })
    }
    /**
     * Creates a grid of the traits/params/whatever for the comparison
     */
    paramMapper(param: string, me: boolean){
        console.log('hello?');
        
        let oArray = [];
        if(me) {
            let webName = this.map[param];
            if (this.myMatchProfile[webName]){
                this.myMatchProfile[webName].forEach(num => {
                    let match: string = 'nomatch';
                    if (this.theirProfile.matchingProfile[this.map[param]].indexOf(num) !== -1) {
                        match = 'match';
                    }
                    oArray.push({
                        name: MatchParams.params[webName][num],
                        match: match,
                    });
                });
                console.log(JSON.stringify(oArray));
                this.paramMap[param].mine = oArray.sort(this.sortByMatches);
            }
        } else {
            let webName = this.map[param];
            if (this.theirProfile.matchingProfile[webName]){
                this.theirProfile.matchingProfile[webName].forEach(num => {
                    let match: string = 'nomatch';
                    if (this.myMatchProfile[this.map[param]].indexOf(num) !== -1) {
                        match = 'match';
                    }
                    oArray.push({
                        name: MatchParams.params[webName][num],
                        match: match,
                    });
                });
                console.log(JSON.stringify(oArray));
                this.paramMap[param].theirs = oArray.sort(this.sortByMatches);
            } 
        }
    }
    sortByMatches(a, b) {
        if (a.match == 'match') {
            if (b.match == 'match') {
                return 0;
            }
            return -1;
        }
        if (b.match == 'match') {
            return 0;
        }
        return 1;
    }
}