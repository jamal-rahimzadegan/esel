import { FnType } from 'types';
import { generateError } from 'utils';

let timer;

export default function debounce(fn: FnType, timeout: number = 300) {
  try {
    return (...args) => {
      if (!timer) fn.apply(this, args);
      clearTimeout(timer);
      timer = setTimeout(() => (timer = undefined), timeout);
    };
  } catch (e) {
    generateError(e);
  }
}
