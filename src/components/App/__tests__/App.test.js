import React from 'react';
import { render } from 'react-testing-library'
import App from '../';

test('App', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
