import React from 'react';
import { storiesOf } from '@storybook/react';
import base from 'paths.macro';
import App from './';

const storyPath = base.replace('/src/components', '');

storiesOf(`${storyPath}`, module).add('counter', () => <App />);
