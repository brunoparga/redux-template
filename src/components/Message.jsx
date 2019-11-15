import React from 'react';

const Message = ({ msg: { author, time, content } }) => (
  <div className="message">
    <strong>{author}</strong> - <em>{time.toLocaleTimeString('pt-BR')}</em>
    <p>{content}</p>
  </div>
);

export default Message;
