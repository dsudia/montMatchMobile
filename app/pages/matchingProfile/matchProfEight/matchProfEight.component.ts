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
    
    importanceItems: string[] = ["Not Important", "Somewhat Important", "Important", "Extremely Important"];
    
    importanceMap = new Map()
    
    ambitious: boolean = false;
    humorous: boolean = false;
    collaborative: boolean = false;
    independent: boolean = false;
    extroverted: boolean = false;
    introverted: boolean = false;
    artistic: boolean = false;
    musical: boolean = false;
    creative: boolean = false;
    organized: boolean = false;
    playful: boolean = false;
    quiet: boolean = false;
    verbalCommunicator: boolean = false;
    writtenCommunicator: boolean = false;
    joyful: boolean = false;
    techOriented: boolean = false;
    analog: boolean = false;
    patient: boolean = false;
    spontaneous: boolean = false;
    routineOriented: boolean = false;
    traits = this._userService.user.matchingProfile.traits;
    
    ngOnInit() {
        this.importanceMap.set(0, 1);
        this.importanceMap.set(1, 10);
        this.importanceMap.set(2, 50);
        this.importanceMap.set(3, 100);
    }
    
    ambitiousChange() {
        this.ambitious = !this.ambitious;
        if (this.ambitious === true) {
            this.traits.push(0);
            return;
        }
        if (this.ambitious === false) {
            this.traits.splice(this.traits.indexOf(0), 1);
            return;
        }
    }
    
    humorousChange() {
        this.humorous = !this.humorous;
        if (this.humorous === true) {
            this.traits.push(1);
            return;
        }
        if (this.humorous === false) {
            this.traits.splice(this.traits.indexOf(1), 1);
            return;
        }
    }
    
    collaborativeChange() {
        this.collaborative = !this.collaborative;
        if (this.collaborative === true) {
            this.traits.push(2);
            return;
        }
        if (this.collaborative === false) {
            this.traits.splice(this.traits.indexOf(2), 1);
            return;
        }
    }
    
    independentChange() {
        this.independent = !this.independent;
        if (this.independent === true) {
            this.traits.push(3);
            return;
        }
        if (this.independent === false) {
            this.traits.splice(this.traits.indexOf(3), 1);
            return;
        }
    }
    
    extrovertedChange() {
        this.extroverted = !this.extroverted;
        if (this.extroverted === true) {
            this.traits.push(4);
            return;
        }
        if (this.extroverted === false) {
            this.traits.splice(this.traits.indexOf(4), 1);
            return;
        }
    }
    
    introvertedChange() {
        this.introverted = !this.introverted;
        if (this.introverted === true) {
            this.traits.push(5);
            return;
        }
        if (this.introverted === false) {
            this.traits.splice(this.traits.indexOf(5), 1);
            return;
        }
    }
    
    artisticChange() {
        this.artistic = !this.artistic;
        if (this.artistic === true) {
            this.traits.push(6);
            return;
        }
        if (this.artistic === false) {
            this.traits.splice(this.traits.indexOf(6), 1);
            return;
        }
    }
    
    musicalChange() {
        this.musical = !this.musical;
        if (this.musical === true) {
            this.traits.push(7);
            return;
        }
        if (this.musical === false) {
            this.traits.splice(this.traits.indexOf(7), 1);
            return;
        }
    }
    
    creativeChange() {
        this.creative = !this.creative;
        if (this.creative === true) {
            this.traits.push(8);
            return;
        }
        if (this.creative === false) {
            this.traits.splice(this.traits.indexOf(8), 1);
            return;
        }
    }
    
    organizedChange() {
        this.organized = !this.organized;
        if (this.organized === true) {
            this.traits.push(9);
            return;
        }
        if (this.organized === false) {
            this.traits.splice(this.traits.indexOf(9), 1);
            return;
        }
    }
    
    playfulChange() {
        this.playful = !this.playful;
        if (this.playful === true) {
            this.traits.push(10);
            return;
        }
        if (this.playful === false) {
            this.traits.splice(this.traits.indexOf(10), 1);
            return;
        }
    }
    
    quietChange() {
        this.quiet = !this.quiet;
        if (this.quiet === true) {
            this.traits.push(11);
            return;
        }
        if (this.quiet === false) {
            this.traits.splice(this.traits.indexOf(11), 1);
            return;
        }
    }
    
    verbalCommunicatorChange() {
        this.verbalCommunicator = !this.verbalCommunicator;
        if (this.extroverted === true) {
            this.traits.push(12);
            return;
        }
        if (this.verbalCommunicator === false) {
            this.traits.splice(this.traits.indexOf(12), 1);
            return;
        }
    }
    
    writtenCommunicatorChange() {
        this.writtenCommunicator = !this.writtenCommunicator;
        if (this.writtenCommunicator === true) {
            this.traits.push(13);
            return;
        }
        if (this.writtenCommunicator === false) {
            this.traits.splice(this.traits.indexOf(13), 1);
            return;
        }
    }
    
    joyfulChange() {
        this.joyful = !this.joyful;
        if (this.joyful === true) {
            this.traits.push(14);
            return;
        }
        if (this.joyful === false) {
            this.traits.splice(this.traits.indexOf(14), 1);
            return;
        }
    }
    
    techOrientedChange() {
        this.techOriented = !this.techOriented;
        if (this.techOriented === true) {
            this.traits.push(15);
            return;
        }
        if (this.techOriented === false) {
            this.traits.splice(this.traits.indexOf(15), 1);
            return;
        }
    }
    
    analogChange() {
        this.analog = !this.analog;
        if (this.analog === true) {
            this.traits.push(16);
            return;
        }
        if (this.analog === false) {
            this.traits.splice(this.traits.indexOf(16), 1);
            return;
        }
    }
    
    patientChange() {
        this.patient = !this.patient;
        if (this.patient === true) {
            this.traits.push(17);
            return;
        }
        if (this.patient === false) {
            this.traits.splice(this.traits.indexOf(17), 1);
            return;
        }
    }
    
    spontaneousChange() {
        this.spontaneous = !this.spontaneous;
        if (this.spontaneous === true) {
            this.traits.push(4);
            return;
        }
        if (this.spontaneous === false) {
            this.traits.splice(this.traits.indexOf(18), 1);
            return;
        }
    }
    
    routineOrientedChange() {
        this.routineOriented = !this.routineOriented;
        if (this.routineOriented === true) {
            this.traits.push(19);
            return;
        }
        if (this.routineOriented === false) {
            this.traits.splice(this.traits.indexOf(19), 1);
            return;
        }
    }
    
    traitsWgtSelectedIndexChanged(traitsWgtPicker) {
        this._userService.user.matchingProfile.traitsWgt = <number> this.importanceMap.get(traitsWgtPicker.selectedIndex);
    }
    
    goToMySuggestedMatches() {
        this._router.navigate(["/MySuggestedMatches"])
    }
    
}