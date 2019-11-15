// TODO: add and export your own actions
export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export const fetchMessages = channel => (
  (dispatch) => {
    fetch(`http://localhost:3000/${channel}/messages`)
      .then(res => res.json())
      .then(({ messages }) => dispatch({
        type: FETCH_MESSAGES,
        payload: messages,
      }));
  }
);
