import React, { useEffect, useState } from 'react';
import { StrType } from 'types';

interface CountDownProps {
  duration?: number; //  minutes
  onStart?: () => {} | void;
  onEnd?: () => {} | void;
  className?: string;
  shouldReset?: boolean;
}

function CountDown(props: CountDownProps): JSX.Element {
  const { duration = 2, onEnd, onStart, className = '', shouldReset } = props;
  const [minutes, setMinutes] = useState<StrType>(0);
  const [seconds, setSeconds] = useState<StrType>(0);

  const ONE_MINUTE = 1000 * 60;
  const ONE_HOUR = ONE_MINUTE * 60;
  const futureDate = new Date(new Date().getTime() + duration * 60000);
  const countDownDate = new Date(futureDate).getTime();
  let time;

  const setTimer = () => {
    onStart?.();

    // Update the countdown every 1 second
    let counter = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      setMinutes(handleDate('min', distance));
      setSeconds(handleDate('sec', distance));

      // When the count down is over
      if (distance < 0) {
        clearInterval(counter);

        setMinutes(0);
        setSeconds(0);

        onEnd?.();
      }
    }, 1000);
  };

  const handleDate = (type, distance) => {
    switch (type) {
      case 'day':
        time = distance / (ONE_HOUR * 24);
        break;
      case 'hour':
        time = (distance % (ONE_HOUR * 24)) / ONE_HOUR;
        break;
      case 'min':
        time = (distance % ONE_HOUR) / ONE_MINUTE;
        break;
      case 'sec':
        time = (distance % ONE_MINUTE) / 1000;
        break;
      default:
        return;
    }

    return Math.floor(time);
  };

  const formatedSeconds = (() => {
    if (seconds) return seconds > 9 ? seconds : '0' + seconds;
    else return '00';
  })();

  useEffect(setTimer, []);

  useEffect(setTimer, [shouldReset]);

  return (
    <span className={className}>
      {minutes}:{formatedSeconds}
    </span>
  );
}

export default React.memo(CountDown);
