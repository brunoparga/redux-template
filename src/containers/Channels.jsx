import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, fetchMessages } from '../actions';

// eslint-disable-next-line no-shadow
class Channels extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  renderChannels = () => {
    const { channels, selectedChannel } = this.props;
    const weight = channel => (channel === selectedChannel ? 700 : 400);
    channels.map(channel => (
      <li
        key={channel}
        style={{ fontWeight: weight(channel) }}
        onClick={() => selectChannel(channel)}
      >
        {channel}
      </li>
    ),
    );
  }

  render() {
    return (
      <ul className="channels">
        {this.renderChannels()}
      </ul>);
  }
}

const mapStateToProps = state => ({
  channels: state.channels,
  selectedChannel: state.selectedChannel,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectChannel, fetchMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
