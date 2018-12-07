import React from 'react';
import { render } from 'react-testing-library';
import Counter from '../';

test('Counter', () => {
  const { container } = render(<Counter />);
  expect(container).toMatchSnapshot();
});
