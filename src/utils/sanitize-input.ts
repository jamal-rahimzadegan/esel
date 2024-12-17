import { REGEX } from 'constant';

export default function sanitizeInput(inputTxt: string): string {
  if (REGEX.CONTAINS_HTML.test(inputTxt)) {
    console.log('Your input is not valid');
    return '';
  } else return inputTxt;
}
