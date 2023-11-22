import generateDate from './dateMaker';
import generatePassword from './passwordGenerator';
import { generate } from 'randomstring';


class User {
    userId: string
    username: string
    password: string
    createdDate: string

    constructor(username: string){
        this.userId = generate({
            length: 4,
            charset: 'numeric'
          });
        this.username = username 
        this.password = generatePassword()
        this.createdDate = generateDate()
      }

    prettyPrint() {
        return "ID: " +this.userId + "\n" + "Username: " +this.username + "\n" + "Password: " + this.password + "\n" + "Created On: " + this.createdDate;
    }
}

export default User;