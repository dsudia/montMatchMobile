var validator = require("email-validator");

export class User {
    token: string;
    // Original Sign Up
    email: string;
    password: string;
    confPassword: string;
    displayName: string;
    // Rest of the profile
    image: string;
    state: string;
    description: string;
    matchProfile: Object;
    isValidEmail() {
        return validator.validate(this.email);
    }
    isValidPassword() {
        var capital = false;
        var lower = false;
        var number = false;
        var symbol = false;
        if (this.password.length < 8) {
            return false;
        }
        capital = this.password.search(/[A-Z]/g) != -1;
        lower = this.password.search(/[a-z]/g) != -1;
        number = this.password.search(/[0-9]/g) != -1;
        symbol = this.password.search(/[^a-zA-Z0-9]/g) != -1;
        return capital && lower && number && symbol;
    }
}