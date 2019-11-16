import { FETCH_MESSAGES, CREATE_MESSAGE } from '../actions';

const fixMessage = (message) => {
  const { id, author, content, created_at: time } = message;
  return { id, author, content, time };
};

export default function (state = null, { type, payload }) {
  switch (type) {
    case FETCH_MESSAGES:
      return payload.map(fixMessage);
    case CREATE_MESSAGE:
      return state.messages.push(fixMessage(payload));
    default:
      return state;
  }
}
