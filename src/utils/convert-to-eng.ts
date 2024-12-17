import { REGEX } from 'constant';

const { PER_NUM, AR_NUM } = REGEX;
const replacePer = (char) => char.charCodeAt(0) - 1776 + '';
const replaceAr = (char) => char.charCodeAt(0) - 1632 + '';

export default function convertToEng(txt: string): string {
  return !!txt ? txt.replace(AR_NUM, replaceAr).replace(PER_NUM, replacePer) : '';
}
