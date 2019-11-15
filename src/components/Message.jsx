import React from 'react';

const Message = ({ msg: { author, time, content } }) => {
  const formattedTime = new Date(time).toLocaleTimeString('pt-BR');
  return (
    <div className="message">
      <strong>{author}</strong> - <em>{formattedTime}</em>
      <p>{content}</p>
    </div>
  );
};

export default Message;
