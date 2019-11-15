// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

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

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState)}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
