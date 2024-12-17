type DirType = 'top' | 'right' | 'left' | 'bottom';

export default function scrollTo(targetId: string, direction?: DirType, offsetToScroll?: number) {
  const target = document.getElementById(targetId);

  switch (direction) {
    case 'left':
      target.scrollLeft -= offsetToScroll;
      break;
    case 'right':
      target.scrollLeft += offsetToScroll;
      break;
    case 'top':
      target.scrollTop += offsetToScroll;
      break;
    case 'bottom':
      target.scrollTop -= offsetToScroll;
      break;
    default:
      target.scrollIntoView();
      return;
  }
}
