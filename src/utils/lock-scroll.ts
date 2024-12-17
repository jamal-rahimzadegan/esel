export default function lockScroll(shouldLock: boolean) {
  document.body.style.overflow = shouldLock ? 'hidden' : 'initial';
}
