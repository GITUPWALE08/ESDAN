import React, { useState } from "react";
//import { Fragment } from "react";
import useGlobalState from "./globalState";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { from: 'user', text: input }]);
    setInput('');
    // the responce data from the RAG will be added to the logic to get the bot response asynchronously and append it to messages
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: 'This is a bot response.' }]);
    }, 1000);
  };

  const handleInputChange = (e) => setInput(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const {chatOpen, setChatOpen} = useGlobalState();
  console.log(chatOpen);

  return (
    <div style={{
      zIndex: 1050,
      maxWidth: 400, 
      margin: 'auto', 
      fontFamily: 'Arial, sans-serif',
      height: "75vh",
      alignItems: "flex-end",
      display: chatOpen ? "flex" : "none",
      flexDirection: "column",
      transition: "width 1s",
      overflowX: "hidden",
      overflowY: "auto",
      left: 0,
      flexGrow: 1,
      }}>
      
      <div className="d-flex flex-column align-items-center py-2">
        <button
          className="btn btn-outline-success mb-3"
          onClick={() => setChatOpen(!chatOpen)}
          aria-label={chatOpen ? "Close chat" : "Open chat"}
          style={{
            alignSelf: "end",
            marginRight: "5px",
            color: "#009B77", 
            fontSize: "larger",
            fontWeight: "bolder",
          }}
        >
          {chatOpen && "X"}
        </button>
      </div>
      <div style={{ border: '1px solid #ccc', padding: 10, maxHeight: "100vh", overflowY: 'auto' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            textAlign: msg.from === 'user' ? 'right' : 'left',
            margin: '10px 0'
          }}>
            <div style={{
              display: 'inline-block',
              backgroundColor: msg.from === 'user' ? '#dcf8c6' : '#fff',
              border: '1px solid #ccc',
              borderRadius: 8,
              padding: 8,
              maxWidth: '80%'
            }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <textarea
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        rows={3}
        style={{ 
          width: '100%', 
          marginTop: 10, 
          padding: 5, 
          resize: 'none',
          borderRadius: "8px"
        }}
        placeholder="Type your message"
      />
      <button onClick={handleSend} style={{ marginTop: 5, padding: '8px 16px', borderRadius: "8px" }}>
        Send
      </button>
    </div>
  );
};

export default Chatbot;