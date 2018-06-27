import React, { Component } from 'react';
import Message from 'components/Message';
import './Chat.css';

export default class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  messageRef = React.createRef();

  componentDidUpdate() {
    const messageList = this.messageRef.current;
    messageList.scrollTop = messageList.scrollHeight;
  }

  changeInputMessage = event => {
    const inputValue = event.target.value;
    this.setState({ messageInput: inputValue });
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      this.setState(state => ({
        messages: [...state.messages, { text: state.messageInput }],
        messageInput: ''
      }));
    }
  };

  render() {
    const { messages } = this.state;
    return (
      <div className={'chat'}>
        <div className={'message-list'} ref={this.messageRef}>
          <ul className={'messages'}>
            {messages.map((message, index) => {
              return <Message key={index} text={message.text} />;
            })}
          </ul>
        </div>
        <input
          className={'input-message'}
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}
