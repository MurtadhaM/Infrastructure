/**
 * REACT COMPONENT
 */

import React from 'react';
import './App.css';
import ChatComponent from './ChatComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat with Perplexity AI</h1>
      </header>
      <ChatComponent />
    </div>
  );
}

export default App;