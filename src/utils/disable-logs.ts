const ERRORS = [
  'warn',
  'assert',
  'log',
  'clear',
  'count',
  'debug',
  'dir',
  'dirxml',
  'error',
  'exception',
  'group',
  'groupCollapsed',
  'groupEnd',
  'info',
  'markTimeline',
  'profile',
  'profileEnd',
  'table',
  'time',
  'timeEnd',
  'timeline',
  'timelineEnd',
  'timeStamp',
  'trace',
];

export default function disableLogs() {
  try {
    if (typeof window?.console != 'undefined') {
      // @ts-ignore
      console = {};
      ERRORS.forEach((msgItem) => (console[msgItem] = () => {}));
    }

    // @ts-ignore
    if (typeof alert !== 'undefined') alert = () => {};
  } catch (e) {
    console.log(`--- err in hiding ----> `);
  }
}
