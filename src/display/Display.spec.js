import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import Display from '../display/Display';

test('Display renders without crashing', () => {
  render(<Display />)
});

test('Display shows Locked if locked is true', () => {
  const { getByText } = render(<Display locked={true} />);
  getByText(/locked/i)
})

test('Display shows Unlocked if locked is false', () => {
  const { getByText } = render(<Display locked={false} />);
  getByText(/unlocked/i)
})

test('Display shows Open if closed is false', () => {
  const { getByText } = render(<Display closed={false} />);
  getByText(/open/i)
})

test('Display shows Closed if closed is true', () => {
  const { getByText } = render(<Display closed={true} />);
  getByText(/closed/i)
})

test('Display elements use red-led class when locked or closed', () => {
  const { getByText } = render(<Display locked={true} closed={true} />);
  expect(getByText(/closed/i)).toHaveClass('red-led');
  expect(getByText(/locked/i)).toHaveClass('red-led');
})

test('Display elements use green-led class when unlocked or open', () => {
  const { getByText } = render(<Display locked={false} closed={false} />);
  expect(getByText(/open/i).classList.contains('green-led')).toBe(true);
  expect(getByText(/unlocked/i).classList.contains('green-led')).toBe(true);
})
