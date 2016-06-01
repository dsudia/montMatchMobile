var validator = require("email-validator");

export class User {
    email: string;
    password: string;
    confPassword: string;
    displayName: string;
    isValidEmail() {
        return validator.validate(this.email);
    }
}