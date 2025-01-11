import React from 'react'
import { useState,useEffect } from 'react';
import useChatStore from '../store/chatStore';
const Chat = () => {
  const { messages, addMessage, joinRoom, sendMessage, initializeSocketListeners } = useChatStore();
  const [input,setInput]=useState('');
  useEffect(()=>{
    initializeSocketListeners();
    joinRoom("room1");

  },[initializeSocketListeners,joinRoom]);

  const handleSend=()=>{
    if(input.trim()){
      const message={id:1,message:input};
      sendMessage(message);
      setInput('');
    }
  }
  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
    <h2>Chat</h2>
    <ChatFeed
      messages={messages.map((msg, index) => new Message({ id: msg.id, message: msg.message }))}
      isTyping={false}
      hasInputField={false}
      showSenderName
      bubblesCentered={false}
    />
    <div style={{ display: 'flex', marginTop: '10px' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ flex: 1, padding: '10px' }}
      />
      <button onClick={handleSend} style={{ padding: '10px 20px' }}>
        Send
      </button>
    </div>
  </div>
  )
}

export default Chat
