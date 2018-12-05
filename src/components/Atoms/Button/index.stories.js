import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import base from 'paths.macro';
import Button from './';

const storyPath = base.replace('/src/components', '');

storiesOf(`${storyPath}`, module)
  .add('increment button', () => (
    <Button onClick={action('Increment button clicked')}>+</Button>
  ))
  .add('decrement button', () => (
    <Button onClick={action('Decrement button clicked')}>-</Button>
  ));
