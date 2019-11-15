import React from 'react';
import Message from '../components/Message';
import MessageForm from '../containers/MessageForm';

// const Messages = ({ messages }) => {
const Messages = () => {
  const messages = [
    {
      author: 'Bruno',
      time: (new Date(Date.now() - 60000)),
      content: 'Hello World!',
    },
    {
      author: 'Someone else',
      time: (new Date(Date.now() - 30000)),
      content: 'Geez that\'s so cliche',
    },
  ];
  const messageList = messages.map(msg => <Message msg={msg} key={msg.time} />);
  return (
    <div className="messages">
      <h3>Channel #chan</h3>
      {messageList}
      <MessageForm />
    </div>
  );
};

export default Messages;
