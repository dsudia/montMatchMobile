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
            Config.apiUrl + "/auth/signup",
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
    
    handleErrors(error: Response) {
        console.log("the error is: ", JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}