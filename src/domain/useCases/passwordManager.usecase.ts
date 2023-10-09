import { CHARS, NUMBERS, SPECIAL_CHARS } from "../../constants/passwordManager.constants";

export const generatePassword = (addNumbers: boolean, addSpecialChars: boolean, length: number) => {
    let passwordChars = CHARS;
    if (addSpecialChars) passwordChars += SPECIAL_CHARS;
    if (addNumbers) passwordChars += NUMBERS;
    let password = '';
    for (let i = 0; i < length; i++) {
        password += passwordChars[Math.floor(Math.random() * passwordChars.length)];
    }

    return password;
}