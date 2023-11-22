"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dateMaker_1 = __importDefault(require("./dateMaker"));
const passwordGenerator_1 = __importDefault(require("./passwordGenerator"));
const randomstring_1 = require("randomstring");
class User {
    constructor(username) {
        this.userId = (0, randomstring_1.generate)({
            length: 4,
            charset: 'numeric'
        });
        this.username = username;
        this.password = (0, passwordGenerator_1.default)();
        this.createdDate = (0, dateMaker_1.default)();
    }
    prettyPrint() {
        return "ID: " + this.userId + "\n" + "Username: " + this.username + "\n" + "Password: " + this.password + "\n" + "Created On: " + this.createdDate;
    }
}
exports.default = User;
