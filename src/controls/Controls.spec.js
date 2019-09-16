import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Controls from "../controls/Controls";

test("Controls renders without crashing", () => {
  render(<Controls />);
});

test("Controls provides buttons to toggle the closed and locked states", () => {
  const { getByText } = render(<Controls locked={false} closed={false} />);

  getByText(/lock gate/i);
  getByText(/close gate/i);
});

test("Closed toggle button text changes to open when clicked", () => {
  const { getByText } = render(<Controls locked={false} closed={true} />);

  getByText(/open gate/i);
});

test("Closed toggle button text changes to close when clicked", () => {
  const { getByText } = render(<Controls locked={false} closed={false} />);

  getByText(/close gate/i);
});

test("Locked toggle button text changes to unlock when clicked", () => {
  const { getByText } = render(<Controls locked={true} closed={true} />);

  getByText(/unlock gate/i);
});

test("Locked toggle button text changes to lock when clicked", () => {
  const { getByText } = render(<Controls locked={false} closed={true} />);

  getByText(/lock gate/i);
});

test("Closed toggle button is disabled if gate is locked", () => {
  const { getByText } = render(<Controls locked={true} closed={true} />);
  expect(getByText(/open gate/i).disabled).toBe(true);
});

test("Locked toggle button is disabled if gate is open", () => {
  const { getByText } = render(<Controls locked={false} closed={false} />);
  expect(getByText(/lock gate/i).disabled).toBe(true);
});
