// Import the necessary dependencies for testing
import React from "react";
import { render } from "@testing-library/react";
import ChatMessage from "../components/ChatMessage";

describe("ChatMessage Component", () => {
  it("should render a message from the user", () => {
    const { getByText } = render(
      <ChatMessage message="Hello, there!" sender="user" />
    );
    const messageElement = getByText("Hello, there!");
    expect(messageElement).toBeInTheDocument();
  });

  it("should render a message from the bot", () => {
    const { getByText } = render(
      <ChatMessage message="Hi, I'm a bot." sender="bot" />
    );
    const messageElement = getByText("Hi, I'm a bot.");
    expect(messageElement).toBeInTheDocument();
  });

  it("should render user message with light background", () => {
    const { container } = render(
      <ChatMessage message="User message" sender="user" />
    );
    const messageContainer = container.querySelector(".bg-light");
    expect(messageContainer).toBeInTheDocument();
  });

  it("should render bot message with info background", () => {
    const { container } = render(
      <ChatMessage message="Bot message" sender="bot" />
    );
    const messageContainer = container.querySelector(".bg-info");
    expect(messageContainer).toBeInTheDocument();
  });

  it("should render user message with dark text", () => {
    const { container } = render(
      <ChatMessage message="User message" sender="user" />
    );
    const messageText = container.querySelector(".text-dark");
    expect(messageText).toBeInTheDocument();
  });

  it("should render bot message with white text", () => {
    const { container } = render(
      <ChatMessage message="Bot message" sender="bot" />
    );
    const messageText = container.querySelector(".text-white");
    expect(messageText).toBeInTheDocument();
  });
});
