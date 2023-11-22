import { generate } from 'randomstring';

export default function generatePassword() {
    return generate(15);
  }