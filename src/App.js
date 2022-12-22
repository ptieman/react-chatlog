import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // const messages = chatMessages.map((message) => (
  //   <ChatEntry
  //     sender={message.sender}
  //     body={message.body}
  //     timeStamp={message.timeStamp}
  //     liked={message.liked}
  //   ></ChatEntry>
  // ))

  // const messages = <ChatLog entries={chatMessages}></ChatLog>
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages}></ChatLog>
      </main>
    </div>
  );
};



export default App;
