import dynamic from 'next/dynamic';
import { sharedRegex as REGEX } from './regex';
import {
  pathToImg as IMG_PATH,
  apiBaseUrl as API_BASE_URL,
  iconPath as ICON_PATH,
  filesBaseUrl as FILES_BASE_URL,
} from './path';
import { BorderRadius as BORDER_RADIUS, FontSizes as FONT_SIZES, BreakPoints as BREAK_POINTS } from './sizes';
import { isSSR, selectorState, TELEGRAM_CHANNELS, isDev } from './misc';
import { ROUTES } from 'constant/routes';
import { TEXTS } from 'constant/texts';
import { LIGHT_THEME as THEME } from 'assets/style/theme';

export {
  REGEX,
  FONT_SIZES,
  BORDER_RADIUS,
  IMG_PATH,
  ICON_PATH,
  API_BASE_URL,
  BREAK_POINTS,
  selectorState,
  ROUTES,
  TEXTS,
  TELEGRAM_CHANNELS,
  dynamic as lazyLoad,
  isSSR,
  THEME,
  FILES_BASE_URL,
  isDev,
};
