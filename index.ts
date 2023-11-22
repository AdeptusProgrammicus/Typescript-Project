import generateDate from './dateMaker';
import generatePassword from './passwordGenerator';
import User from './user';

const userNames = [
  "Bob Bobertson",
  "Will Williamson",
  "Vali Valison",
  "Joyefully Joye"
]

userNames.forEach(u => console.log(new User(u).prettyPrint()+ "\n"));