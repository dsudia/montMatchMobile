var validator = require("email-validator");

export class User {
    email: string;
    password: string;
    displayName: string;
    isValidEmail() {
        return validator.validate(this.email);
    }
}