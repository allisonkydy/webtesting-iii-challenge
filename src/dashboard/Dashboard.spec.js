import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from '../dashboard/Dashboard';

test('dashboard renders without crashing', () => {
  render(<Dashboard />);
});

test('dashboard matches snapshot', () => {
  expect(render(<Dashboard />)).toMatchSnapshot();
});

test('dashboard gate displaying, defaulting to unlocked and open', () => {
  const { getByText } = render(<Dashboard />);

  getByText(/unlocked/i);
  getByText(/open/i);
});

test('dashboard controls displaying', () => {
  const { getByText } = render(<Dashboard />);

  getByText(/lock gate/i);
  getByText(/close gate/i);
});
