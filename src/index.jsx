// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';

// internal modules
import App from './components/App';
import '../assets/stylesheets/application.scss';
import initialState from '../data/initial-state';

// State and reducers
import currentUserReducer from './reducers/current-user-reducer';
import channelsReducer from './reducers/channels-reducer';
import selectedChannelReducer from './reducers/selected-channel-reducer';
import messagesReducer from './reducers/messages-reducer';

const reducers = combineReducers({
  currentUser: currentUserReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  messages: messagesReducer,
});

const store = createStore(
  reducers, initialState, applyMiddleware(reduxThunk, logger),
);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
