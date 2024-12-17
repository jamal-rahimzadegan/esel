import { DARK_THEME, LIGHT_THEME } from 'assets/style/theme';

export default function toggleTheme(theme: string): object {
  return theme === 'light' ? LIGHT_THEME : DARK_THEME;
}
