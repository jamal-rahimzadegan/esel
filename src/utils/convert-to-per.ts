import { REGEX } from 'constant';

const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

export default function convertToPer(str: string): string {
  if (str && str?.toString()) {
    return str.toString().replace(REGEX.EN_NUM, (w) => persianDigits[+w]);
  }

  return str || '';
}
