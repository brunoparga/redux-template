import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel } from '../actions';

// eslint-disable-next-line no-shadow
const Channels = ({ channels, selectChannel, selectedChannel }) => {
  const weight = channel => (channel === selectedChannel ? 700 : 400);
  return (
    <ul className="channels">
      {channels.map(channel => (
        <li
          key={channel}
          style={{ fontWeight: weight(channel) }}
          onClick={() => selectChannel(channel)}
        >
          {channel}
        </li>
      ),
      )}
    </ul>);
};

const mapStateToProps = state => ({
  channels: state.channels,
  selectedChannel: state.selectedChannel,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectChannel }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
