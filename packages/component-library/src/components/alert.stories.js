import React from 'react';
import AlertComponent from './alert';

export default {
  title: 'Alert',
  component: AlertComponent,
};

export const Alert = () => <Button onClick={action('clicked')}>Hello Button</Button>;