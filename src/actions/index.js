export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

export const fetchMessages = channel => dispatch =>
  fetch(`http://localhost:3000/${channel}/messages`)
    .then(res => res.json())
    .then(({ messages: payload }) => dispatch({ type: FETCH_MESSAGES, payload }));

export const createMessage = (channel, author, content) => (dispatch) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ author, content }),
  };
  fetch(`http://localhost:3000/${channel}/messages`, options)
    .then(res => res.json())
    .then(payload => dispatch({ type: CREATE_MESSAGE, payload }));
};

export const selectChannel = channel => ({
  type: SELECT_CHANNEL, payload: channel,
});
