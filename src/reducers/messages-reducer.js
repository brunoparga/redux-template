import { FETCH_MESSAGES } from '../actions';

const fixMessages = messages => messages.map((message) => {
  const { id, author, content, created_at: time } = message;
  return { id, author, content, time };
});

export default function (state = null, { type, payload: messages }) {
  switch (type) {
    case FETCH_MESSAGES:
      return fixMessages(messages);
    default:
      return state;
  }
}
