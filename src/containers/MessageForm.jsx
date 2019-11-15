import React from 'react';

const MessageForm = () => (
  <div className="form-control">
    <form>
      <input type="text" name="new-message" placeholder="Say something..." />
      <button className="btn">Send</button>
    </form>
  </div>
);

export default MessageForm;
