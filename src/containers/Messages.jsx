import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/Message';
import MessageForm from '../containers/MessageForm';
import { fetchMessages } from '../actions';

class Messages extends React.Component {
  componentWillMount() {
    const { channel, fetchMessages: messageFetcher } = this.props;
    messageFetcher(channel);
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
