import { SELECT_CHANNEL } from '../actions';

export default function (state = null, { type, payload }) {
  switch (type) {
    case SELECT_CHANNEL:
      return payload;
    default:
      return state;
  }
}
