/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from "react"
import App from "../App";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

it("renders Task List heading", () => {
  render(<App />);
  const heading = screen.getByText(/Task List/i);
  expect(heading).toBeInTheDocument();
});