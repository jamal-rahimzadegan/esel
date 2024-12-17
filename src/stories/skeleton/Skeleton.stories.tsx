import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import Skeleton from '../../components/core/Skeleton/Skeleton'; //don't use aliases

// 1- create a template of your component
const SkeletonTemplate: Story<ComponentProps<typeof Skeleton>> = (args) => <Skeleton {...args} />;

// 2- add some props to it
export const Circle = SkeletonTemplate.bind({});
Circle.args = {
  height: '100px',
  width: '100px',
  className: 'rounded-circle',
};

export const Rounded = SkeletonTemplate.bind({});
Rounded.args = {
  height: '50px',
  width: '300px',
  className: 'rounded shadow-sm',
};

// 3- export your component
export default {
  title: 'Skeleton',
  component: Skeleton,
} as Meta;
