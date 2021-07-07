import React, { useState, useLayoutEffect } from "react";
import ChatStore from "../Chat";

const FirstPerson = () => {
  const [chatState, setChatState] = useState(ChatStore.initialState);

  useLayoutEffect(() => {
    ChatStore.subscribe(setChatState);
    ChatStore.init();
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const messageObject = {
      person: "first-person",
      text: e.target.elements.messageInput.value.trim()
    };
    ChatStore.sendMessage(messageObject);
    document.getElementById("messageForm").reset();
  };

  return (
    <div className="container">
      <h2>Mycroft</h2>
      <div className="chat-box">
        {chatState.data.map((message) => (
          <div>
            <p className={message.person}>{message.text}</p>
            <div className="clear"></div>
          </div>
        ))}
      </div>
      <form id="messageForm" onSubmit={onFormSubmit}>
        <input
          type="text"
          id="messageInput"
          name="messageInput"
          placeholder="type here..."
          required
        />
        <button type="submit">Send</button> <br />
      </form>
      <button className="clear-button" onClick={() => ChatStore.clearChat()}>
        Clear Chat
      </button>
    </div>
  );
};

export default FirstPerson;
