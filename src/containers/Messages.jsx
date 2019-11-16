import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/Message';
import MessageForm from '../containers/MessageForm';
import { fetchMessages } from '../actions';

class Messages extends React.Component {
  componentWillMount() {
    // eslint-disable-next-line no-shadow
    const { channel, fetchMessages } = this.props;
    fetchMessages(channel);
  }

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { channel, fetchMessages } = this.props;
    const interval = window.setInterval(() => fetchMessages(channel), 3333);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ interval });
  }

  componentWillUnmount() {
    window.clearInterval(this.state.interval);
  }

  render() {
    const { channel, messages } = this.props;
    const messageList = messages.map(msg => <Message msg={msg} key={msg.id} />);
    return (
      <div className="messages">
        <h3>Channel {channel}</h3>
        {messageList}
        <MessageForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  channel: state.selectedChannel,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { fetchMessages }, dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
