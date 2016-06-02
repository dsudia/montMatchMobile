import {Component, ElementRef, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import cameraModule = require('camera')
import imageModule  = require('ui/image')
import enumsModule  = require('ui/enums')
import fsModule     = require('file-system')
import {S3Upload} from './S3Upload';
import {Router} from "@angular/router-deprecated";
import {User} from "../../../shared/User/user";
import {UserService} from "../../../shared/User/userService";

@Component({
    selector: "stateAndPicture",
    templateUrl: "pages/signUp/stateAndPicture/stateAndPicture.html",
    styleUrls: ["pages/signUp/signUpOne/signUpOne-common.css", "pages/signUp/signUpOne/signUpOne.css"]
})

export class StateAndPicture {
    @ViewChild("container") conatiner: ElementRef;

    constructor(private _router: Router, private page: Page, private _userService: UserService) {
    }

    upload() {
      const format = enumsModule.ImageFormat.png
      cameraModule.takePicture().then(img => {
        let savePath = fsModule.knownFolders.documents().path;
        console.log('Save Path', savePath);
        let fileName = "img_" + new Date().getTime() + "." + format;
        console.log('fileName', fileName);
        let filePath = fsModule.path.join(savePath, fileName);
        console.log('FilePath', filePath);
        if ( img.saveToFile( filePath, format ) ) {
          let s3Upload = new S3Upload(format, fileName, filePath, this.progressCallback);
          s3Upload.getSignedRequest()
          .then((url) => {
            alert(url);
          })
          .catch(error => {
            console.log('Error!');
            alert(error);
          })
        }
      });
    }
    progressCallback(e: any) {
      console.log(e);
    }
}
