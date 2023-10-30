import React from "react";
import ChatInterface from "./ChatInterface";

function ChatPage() {
  return (
    <div>
      {/* Navigating to user providing feedback form */}
      {/* <Button variant="primary" onClick={handleShow}>
        Toggle static offcanvas
      </Button> */}

      {/* Main chat component */}
      <ChatInterface />
    </div>
  );
}

export default ChatPage;
