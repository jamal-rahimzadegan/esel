type StepType = 'start' | 'move' | 'end';
type DirType = null | 'up' | 'down' | 'left' | 'right';

const TOUCH_RATIO = 100;
let touchStartX: number = 0;
let touchStartY: number = 0;
let touchStopX: number = 0;
let touchStopY: number = 0;
let dir: DirType = null;

export default function getSwipeDirection(step: StepType, e?: TouchEvent): null | Promise<DirType> {
  switch (step) {
    case 'start':
      touchStartX = e.targetTouches[0].clientX;
      touchStartY = e.targetTouches[0].clientY;
      break;
    case 'move':
      touchStopX = e.targetTouches[0].clientX;
      touchStopY = e.targetTouches[0].clientY;
      break;
    case 'end':
      if (touchStopX !== 0 && touchStopY !== 0) {
        if (touchStartY - touchStopY > TOUCH_RATIO) dir = 'up';
        if (touchStartY - touchStopY < -TOUCH_RATIO) dir = 'down';
        if (touchStartX - touchStopX < -TOUCH_RATIO) dir = 'right';
        if (touchStartX - touchStopX > TOUCH_RATIO) dir = 'left';
      }

      return new Promise((resolve) => {
        resolve(dir);

        touchStartX = 0;
        touchStartY = 0;
        touchStopX = 0;
        touchStopY = 0;
        dir = null;
      });
    default:
      return null;
  }
}
