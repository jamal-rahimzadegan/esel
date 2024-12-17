import React from 'react';
import { NextArrow, PrevArrow } from './SideArrowStyle';

type SideArrow = {
  onGoNext: Function;
  onGoPrev: Function;
};

export default function SideArrow(props: SideArrow): JSX.Element {
  const { onGoNext, onGoPrev } = props;
  return (
    <>
      <NextArrow hasTranslate={false} bgColor="DISABLED_TEXT" textColor="APP_ACCENT" onClick={onGoNext}>
        {/*<FcNext />*/}
      </NextArrow>
      <PrevArrow hasTranslate={false} bgColor="DISABLED_TEXT" textColor="APP_ACCENT" onClick={onGoPrev}>
        {/*<FcPrevious />*/}
      </PrevArrow>
    </>
  );
}
