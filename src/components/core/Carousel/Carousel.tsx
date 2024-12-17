import React, { useEffect, useState } from 'react';
import { useGetDevice } from 'hooks';
import {
  ArrowBtn,
  BulletContainer,
  BulletItem,
  CarouselContainer,
  Slide,
} from 'components/core/Carousel/CarouselStyle';

let touchStartPos = 0;
let touchStopPos = 0;

type ChangeSlideType = 'next' | 'prev' | 'direct';
interface CarouselProps {
  imgs: string[];
  height: string;
  width?: string;
  showBullets?: boolean;
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

export default function Carousel(props: CarouselProps): JSX.Element {
  const {
    className = '',
    imgs = [],
    height = '500px',
    width = '100%',
    showBullets = true,
    interval = 5000,
    autoPlay,
  } = props;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { isMobile } = useGetDevice();
  const lastIndex: number = imgs.length - 1;

  const changeSlide = (type: ChangeSlideType, i?: number) => {
    if (type === 'direct') setActiveIndex(i);

    if (type === 'next') {
      const shouldResetIndex = activeIndex === lastIndex;
      const nextIndex = shouldResetIndex ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }

    if (type === 'prev') {
      const shouldResetIndex = activeIndex === 0;
      const prevIndex = shouldResetIndex ? lastIndex : activeIndex - 1;
      setActiveIndex(prevIndex);
    }
  };

  const runOnTouchEnd = () => {
    if (touchStartPos - touchStopPos > 75) changeSlide('prev'); // run on left swipe
    if (touchStartPos - touchStopPos < -75) changeSlide('next'); // run on right swipe
  };

  const Arrow = ({ dir, changeImg }) => (
    <ArrowBtn dir={dir} onClick={changeImg}>
      <i className={'arrow ' + dir} />
    </ArrowBtn>
  );

  const Bullets = () => (
    <BulletContainer>
      {imgs.map((item, i) => (
        <BulletItem onClick={() => changeSlide('direct', i)} key={i} i={i} activeIndex={activeIndex} />
      ))}
    </BulletContainer>
  );

  useEffect(() => {
    const timeout = autoPlay ? setInterval(() => changeSlide('next'), interval) : null;
    return () => clearInterval(timeout);
  });

  return (
    <CarouselContainer height={height} width={width}>
      <div
        className={'center-items w-100 h-100 overflow-hidden ' + className}
        onTouchStart={({ targetTouches }) => (touchStartPos = targetTouches[0].clientX)}
        onTouchMove={({ targetTouches }) => (touchStopPos = targetTouches[0].clientX)}
        onTouchEnd={runOnTouchEnd}
      >
        {!isMobile ? <Arrow dir="right" changeImg={() => changeSlide('next')} /> : null}
        <Slide url={imgs[activeIndex]} />
        {!isMobile ? <Arrow dir="left" changeImg={() => changeSlide('prev')} /> : null}
      </div>
      {showBullets ? <Bullets /> : null}
    </CarouselContainer>
  );
}
