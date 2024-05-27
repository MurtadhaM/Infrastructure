import React, { useState } from 'react';
import axios from 'axios';
import './ChatComponent.scss';
// Set the API key to the value of the API_KEY environment variable
import dotenv from 'dotenv';

assert(process.env.API_KEY, 'API_KEY is not defined in the environment variables');
const API_KEY = dotenv.config().parsed.API_KEY;
const API_ENDPOINT = 'https://api.perplexity.ai/chat/completions';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async () => {
    const newMessage = { role: 'user', content: inputText };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post(API_ENDPOINT, {
        model: 'pplx-70b-online', // Replace with the desired model identifier
        messages: [...messages, newMessage]
      }, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        }
      });

      const botResponse = { role: 'system', content: response.data.choices[0].message.content };
      setMessages([...messages, newMessage, botResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setInputText(''); // Clear input after sending
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type your message here..."
      />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};

export default ChatComponent;