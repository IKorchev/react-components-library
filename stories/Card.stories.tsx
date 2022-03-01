import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from '../src';
/** Icon */
const meta: Meta = {
  title: 'Card',
  component: Card,
};

export default meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

/** Paragraph  should be less than 150 characters or it will be truncated */
export const Default = Template.bind({});
Default.args = {
  img: 'https://images.pexels.com/photos/4869123/pexels-photo-4869123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'Card Title',
  paragraph:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit. Fuga nostrum ratione nobis! Ducimus et soluta minima rem aliquam explicabo blanditiis!',
  rounded: true,
  alt: 'A beautiful scenery',
  linkTitle: 'Learn more',
  size: 'lg',
};

export const Small = Template.bind({});
Small.args = {
  img: 'https://images.pexels.com/photos/4869123/pexels-photo-4869123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'Card Title',
  paragraph:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit. Fuga nostrum ratione nobis! Ducimus et soluta minima rem aliquam explicabo blanditiis!',
  rounded: true,
  alt: 'A beautiful scenery',
  linkTitle: 'Learn more',
  size: 'xl',
};

export const Large = Template.bind({});
Large.args = {
  img: 'https://images.pexels.com/photos/4869123/pexels-photo-4869123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'Card Title',
  paragraph:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione corrupti earum recusandae quibusdam nihil dolores officia architecto, dolore deleniti.',
  rounded: true,
  alt: 'A beautiful scenery',
  linkTitle: 'Learn more',
  size: 'sm',
};
