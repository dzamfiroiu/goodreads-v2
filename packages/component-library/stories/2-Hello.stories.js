import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'HelloWorld',
  component: Button,
};

export const Hello = () => <Button onClick={action('clicked')}>Hello From the other side</Button>;