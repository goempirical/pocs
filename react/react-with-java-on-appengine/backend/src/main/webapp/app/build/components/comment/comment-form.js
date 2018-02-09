var CommentForm = React.createClass({
  displayName: 'CommentForm',

  getInitialState: function () {
    return { author: '', text: '' };
  },
  handleAuthorChange: function (e) {
    this.setState({ author: e.target.value });
  },
  handleTextChange: function (e) {
    this.setState({ text: e.target.value });
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({ author: author, text: text });
    this.setState({ author: '', text: '' });
  },
  render: function () {
    return React.createElement(
      'form',
      { className: 'commentForm', onSubmit: this.handleSubmit },
      React.createElement('input', {
        type: 'text',
        placeholder: 'Your name',
        value: this.state.author,
        onChange: this.handleAuthorChange
      }),
      React.createElement('input', {
        type: 'text',
        placeholder: 'Say something...',
        value: this.state.text,
        onChange: this.handleTextChange
      }),
      React.createElement('input', { type: 'submit', value: 'Post' })
    );
  }
});