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
    // TODO: replace this sh*t with websockets
    const interval = window.setInterval(() => fetchMessages(channel), 3333);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ interval });
  }

  componentDidUpdate() {
    this.messageList.scrollTop = this.messageList.scrollHeight;
  }

  componentWillUnmount() {
    window.clearInterval(this.state.interval);
  }

  render() {
    const { channel, messages } = this.props;
    const messageList = messages.map(msg => <Message msg={msg} key={msg.id} />);
    return (
      <div className="messages-container">
        <h3>Channel {channel}</h3>
        <div className="messages" ref={(list) => { this.messageList = list; }}>
          {messageList}
        </div>
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
