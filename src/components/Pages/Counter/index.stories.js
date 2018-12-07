import React from 'react';
import { storiesOf } from '@storybook/react';
import base from 'paths.macro';
import Counter from './';

const storyPath = base.replace('/src/components', '');

storiesOf(`${storyPath}`, module).add('Counter', () => <Counter />);
