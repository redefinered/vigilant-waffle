/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from "react";
import App from "../App";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

it("renders Task List heading", () => {
  render(<App />);
  const heading = screen.getByText(/Task List/i);
  expect(heading).toBeInTheDocument();
});

it("renders input fields", () => {
  render(<App />);
  const nameInput = screen.getByPlaceholderText(/Task Name/i);
  const descInput = screen.getByPlaceholderText(/Task Description/i);
  
  expect(nameInput).toBeInTheDocument();
  expect(descInput).toBeInTheDocument();
});

it("renders an 'Add Task' button", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /Add Task/i });
  expect(button).toBeInTheDocument();
});

it("allows users to type in the input field", () => {
  render(<App />);
  const nameInput = screen.getByPlaceholderText(/Task Name/i);
  
  fireEvent.change(nameInput, { target: { value: "New Task" } });
  expect(nameInput.value).toBe("New Task");
});