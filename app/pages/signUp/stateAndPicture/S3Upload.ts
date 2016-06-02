
import {Config} from "../../../shared/config";
import {SignS3Response} from "./signs3Response";
import fs = require('file-system');

export class S3Upload {
    fileType: string;
    fileName: string;
    filePath: string;
    progressCallback: (e) => void;
  constructor(fileType: string, fileName: string, filePath: string, progressCallback: (e) => void) {
      this.fileType = fileType;
      this.fileName = fileName;
      this.filePath = filePath;
      this.progressCallback = progressCallback;
  }
  getSignedRequest() {
      return new Promise<String> ((resolve, reject) => {
    //     var bghttp = require("nativescript-background-http");
    //     var session = bghttp.session("image-upload");
    //     var request = {
    //         url: Config.apiUrl + "profile/upload",
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/octet-stream",
    //             "File-Name": this.fileName
    //         },
    //         description: "{ 'uploading': " + this.fileName + "' }"
    //     };
    //     var task = session.uploadFile(this.filePath, request);
        
    //     task.on("progress", logEvent);
    //     task.on("error", logEvent);
    //     task.on("complete", logEvent);
        
    //     function logProgress(e) {
    //         console.log(e.eventName);
    //     }  
    //   })
        var xhr = new XMLHttpRequest();
        return new Promise<String>((resolve, reject) => {
            // let urlString = Config.apiUrl + "profile/signS3?fileName=" + this.fileName + "&fileType=" + this.fileType;
            let urlString = "http://benaychh.io/posts/signS3?fileName=" + this.fileName + "&fileType=" + this.fileType;
            xhr.open("GET", urlString);
            xhr.onload = () => {
                resolve(xhr.response);
            }
            xhr.onerror = () => {
                console.log();
                
                reject(xhr.response)
            }
            xhr.send();
        })
        .then(() => {
            console.log(JSON.parse(xhr.responseText));
            let response : SignS3Response = <SignS3Response> JSON.parse(xhr.responseText);
            return this.uploadFile(response.signedRequest, response.url);
        })
      });
  }
  uploadFile(signedRequest, url) {
    return new Promise<String>((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", signedRequest);
        xhr.setRequestHeader('x-amz-acl', 'public-read');
        xhr.onload = () => {
            console.log("onload, outside", JSON.stringify(xhr));
            if (xhr.status === 200) {
                console.log('Uploaded!');
            }
        };
        xhr.onprogress = () => {
            console.log("Progress!");
        }
        xhr.onerror = () => {
            alert("Could not upload file.");
        };
        xhr.send(fs.File.fromPath(this.filePath));
        
        // var bghttp = require('nativescript-background-http');
        // var session = bghttp.session("image-upload");
        // var request = {
        //     url: signedRequest,
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/octet-stream",
        //         "File-Name": this.fileName
        //     },
        //     description: "{ 'uploading': '" + this.fileName + "' }"
        // };
        // console.log(JSON.stringify(request));
        // var task = session.uploadFile("file://" + this.filePath, request);
        // task.on("progress", logEvent);
        // task.on("error", logEvent);
        // task.on("complete", logEvent);
        
        // function logEvent(e) {
        //     console.log('Inside the logEvent');
        //     console.log(e.eventName);
        // }
    });
  }
}