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
var LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;
import observableArray = require("data/observable-array");
import dialogs = require("ui/dialogs");

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
    paramMapKeys: Array<String>;
    message: string;
    messageVisible: boolean = false;
    loader;
    bigPicture: boolean = false;
    
    constructor(private _router:Router, private page: Page, private _userService: UserService) {
        this.loader = new LoadingIndicator();
        this.loader.show();
        this.theirEmail = _userService.user.currentlyViewingProfile;
        this.theirProfile = new User();
        this.myMatchProfile = new Object();
        this.map = {
            Location: 'locTypes',
            Organization: 'orgTypes',
            Size: 'sizes',
            Calendar: 'cals',
            Traits: 'traits',
            States: 'states',
            Certification: 'training',
            "Age Ranges": 'ageRanges',
        }
        this.paramMap = {
            Location: {
                percent: 0,
                target: 100,
                mine: [],
                theirs: [],
                single: true,
                rowMatch: false,
            },
            Traits: {
                percent: 0, 
                target: 70,               
                mine: [],
                theirs: [],
                single: false,
                rowMatch: false,
            },
            Organization: {
                percent: 0,
                target: 100,
                mine: [],
                theirs: [],
                single: true,
                rowMatch: false,
            },
            Size: {
                percent: 0,
                target: 100,
                mine: [],
                theirs: [],
                single: true,
                rowMatch: false,
            },
            Calendar: {
                percent: 0,
                target: 100,
                mine: [],
                theirs: [],
                single: true,
                rowMatch: false,
            },
            States: {
                percent: 0,
                target: 100,
                mine: [],
                theirs: [],
                single: true,
                rowMatch: false,
            },
            Certification: {
                percent: 0,
                target: 100,
                mine: [],
                theirs: [],
                single: true,
                rowMatch: false,
            },
            "Age Ranges": {
                percent: 0,
                target: 100,
                mine: [],
                theirs: [],
                single: false,
                rowMatch: false,
            }
        }
        this.paramMapKeys = Object.keys(this.paramMap);
    }
    ngOnInit() {
        this.getProfile();
    }
    
    togglePicture() {
        this.bigPicture = !this.bigPicture;
    }
    
    getProfile(callback? : () => void) {
        this._userService.getProfile(this.theirEmail)
        .map(res => res.json())
        .subscribe(response => {
            this.theirProfile.displayName = response.profile.displayName;
            this.theirProfile.image = response.profile.avatarUrl;
            this.theirProfile.description = response.profile.description;
            this.theirProfile.state = response.profile.state;
            this.theirProfile.interest = response.profile.interest;
            this.theirProfile.match = response.profile.match;
            this.theirProfile.matchPercent = response.profile.matchPercent;
            this.theirProfile.isTeacher = response.profile.isTeacher;
            this.theirProfile.email = response.profile.email;
            this.theirProfile.displayName = response.profile.displayName;
            this.theirProfile.matchingProfile = response.theirMatchProfile;
            this.myMatchProfile = response.myMatchProfile;
            this.paramMapKeys.forEach(key => {
                this.paramMapper(key);
            })
            this.loader.hide()
            if (callback) {
                callback();
            }
        }, error => {
            alert('Something went wrong!');
        })
    }
    showInterest() {
        this.loader.show();
        this._userService.showInterest()
        .map(res =>  res.json())
        .subscribe(result => {
            this.getProfile(() => {
                this.displayMessage(result.message, 2000)
            });
        }, error => {
            this.loader.hide();
            alert('Something went wrong!');
            
       })
    }
    removeInterest() {
        this.loader.show();
        this._userService.removeInterest()
        .map(res =>  res.json())
        .subscribe(result => {
            this.getProfile(() => {
                this.displayMessage(result.message, 2000)
            });
        }, error => {
            this.loader.hide();
            alert('Something went wrong!');
            
        })
    }
    
    displayMessage(message: string, milliseconds: number) {
        
        dialogs.alert({
            title: "Message",
            message: message,
            okButtonText: "OK"
        })
        .then(() => {
        });
        // this.message = message;
        // this.messageVisible = true;
        // setTimeout(() => {
        //     this.messageVisible = false;
        // }, milliseconds)
    }
    
    /**
     * Creates a grid of the traits/params/whatever for the comparison
     */
    paramMapper(param){
        let meArray = [];
        let theirArray = [];
        let webName = this.map[param];
        this.paramMap[param].percent = 0;
        if (this.myMatchProfile[webName]){
            this.myMatchProfile[webName].forEach(num => {
                let match: string = 'nomatch';
                if (this.theirProfile.matchingProfile[webName].indexOf(num) !== -1) {
                    if (this.paramMap[param].single) {
                        this.paramMap[param].percent = 100;
                    } else {
                        this.paramMap[param].percent += 1 / this.myMatchProfile[webName].length * 100 
                    }
                    match = 'match';
                }
                meArray.push({
                    name: MatchParams.params[webName][num],
                    match: match,
                });
            });
            this.paramMap[param].percent = Math.ceil(this.paramMap[param].percent);
            if (this.paramMap[param].percent >= this.paramMap[param].target) {
                this.paramMap[param].rowMatch = true;
            }
            this.paramMap[param].mine = meArray.sort(this.sortByMatches);
        }
        if (this.theirProfile.matchingProfile[webName]){
            this.theirProfile.matchingProfile[webName].forEach(num => {
                let match: string = 'nomatch';
                if (this.myMatchProfile[this.map[param]].indexOf(num) !== -1) {
                    match = 'match';
                }
                theirArray.push({
                    name: MatchParams.params[webName][num],
                    match: match,
                });
            });
            this.paramMap[param].theirs = theirArray.sort(this.sortByMatches); 
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