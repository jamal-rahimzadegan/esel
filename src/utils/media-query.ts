type BreakPointType = 320 | 480 | 768 | 1024 | 1200;
type BreakType = 'max-width' | 'min-width';

export default function mediaQuery(size: BreakPointType, type: BreakType): string {
  return `@media screen and (${type}: ${size}px)`;
}
