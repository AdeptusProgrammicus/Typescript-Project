"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomstring_1 = require("randomstring");
function generatePassword() {
    return (0, randomstring_1.generate)(15);
}
exports.default = generatePassword;
