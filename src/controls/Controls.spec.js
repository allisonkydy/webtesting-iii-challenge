import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';

import Controls from '../controls/Controls';

test('Controls renders without crashing', () => {
  render(<Controls />);
})

test('Controls provides buttons to toggle the closed and locked states', () => {
  const { getByText } = render(<Controls />);

  getByText(/lock gate/i);
  getByText(/close gate/i);
})

// test("Closed toggle button's text changes when clicked", () => {
//   let closed = false;
//   const toggleClosed = jest.fn(() => closed = true);
//   const { getByText } = render(<Controls closed={closed} toggleClosed={toggleClosed} />);

//   const closeButton = getByText(/close gate/i);
//   fireEvent.click(closeButton);
//   expect(toggleClosed).toHaveBeenCalled();
//   getByText(/open gate/i);
// })

test('Closed toggle button is disabled if gate is locked', () => {
  const { getByText } = render(<Controls locked={true} closed={true} />);
  expect(getByText(/open gate/i).disabled).toBe(true);
})

test('Locked toggle button is disabled if gate is open', () => {
  const { getByText } = render(<Controls locked={false} closed={false} />);
  expect(getByText(/lock gate/i).disabled).toBe(true);
})
