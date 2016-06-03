import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {User} from "./user";
import {Config} from "../config";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
    user: User;
    
    constructor(private _http: Http) {
        this.user = new User();
    }
    
    register() {
        console.log("you are trying to register!");
        console.log(this.user.email);
        console.log(this.user.password);
        console.log(this.user.displayName);
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this._http.post(
            Config.apiUrl + "auth/signup",
            JSON.stringify({
                email: this.user.email,
                password: this.user.password,
                isTeacher: false,
                displayName: this.user.displayName
            }),
            { headers: headers }
        )
        .catch(this.handleErrors);
    }
    
    getSuggestedMatches() {
        var observableArray = require("data/observable-array");
        console.log("Called!!!");
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        this._http.get(
            Config.apiUrl + "matches/suggested?token=" + this.user.token,
            { headers: headers }
        )
        .map(res => res.json())
        .subscribe(response => {
            console.log('Response', response);
            console.log('matches', response.suggestedMatches);
            this.user.suggestedMatches = new observableArray.ObservableArray(response.suggestedMatches);
            this.user.suggestedMatches.forEach(match => {
                console.log(match);  
            })
        }, error => {
            this.handleErrors(error);
        })
    }
    getProfile(profileEmail: string) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this._http.get(
            Config.apiUrl + "profile/get?token=" + this.user.token + "&profile=" + profileEmail,
            { headers: headers }
        )
        .catch(this.handleErrors);
    }
    
    handleErrors(error: Response) {
        console.log("the error is: ", JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}