import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: 'Say something...' };
  }

  sendMessage = () => {
    // eslint-disable-next-line no-shadow
    const { channel, author, createMessage } = this.props;
    createMessage(channel, author, this.state.content);
  }

  handleInput = (event) => {
    this.setState({ content: event.target.value });
  }

  removePlaceholder = (event) => {
    if (event.target.value === 'Say something...') {
      this.setState({ content: '' });
    }
  }

  render() {
    const { content } = this.state;
    return (
      <div className="form-control">
        <form onSubmit={this.sendMessage}>
          <input
            type="text"
            value={content}
            onFocus={this.removePlaceholder}
            onChange={this.handleInput}
          />
          <button
            type="submit"
            className="btn"
          >Send</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  channel: state.selectedChannel,
  author: state.currentUser,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { createMessage }, dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
