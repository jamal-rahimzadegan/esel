import React, { VideoHTMLAttributes } from 'react';
import { ObjectFit } from 'types';
import { StyledVideo } from './VideoStyle';

interface VideoProps extends VideoHTMLAttributes<any> {
    objectFit?: ObjectFit;
    ref?: any;
}

export default function Video(props: VideoProps) {
    const { ref, objectFit, ...restProps } = props;
    return <StyledVideo ref={ref} objectFit={objectFit} {...restProps} />;
}
