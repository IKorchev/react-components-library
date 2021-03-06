import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src';
const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Custom Button</Button>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};
export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'disabled',
};
