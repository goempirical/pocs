var LoginForm = React.createClass({
	displayName: 'LoginForm',


	getInitialState: function () {
		return { id: '', secret: '', waitMessage: '' };
	},

	handleIdChange: function (e) {
		this.setState({ id: e.target.value });
	},

	handleSecretChange: function (e) {
		this.setState({ secret: e.target.value });
	},

	handleSubmit: function (e) {
		e.preventDefault();
		this.setState({ waitMessage: 'Please Wait. We are trying to log you in..' });
		var id = this.state.id.trim();
		var secret = this.state.secret.trim();
		if (!id || !secret) {
			return;
		}
		this.props.onLoginSubmit({ id: id, secret: secret });
	},

	render: function () {
		return React.createElement(
			'form',
			{ className: 'loginForm', role: 'form', onSubmit: this.handleSubmit },
			React.createElement(
				'fieldset',
				null,
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement('input', { className: 'form-control', placeholder: 'User id', name: 'id', type: 'text', value: this.state.id, onChange: this.handleIdChange, autofocus: true })
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement('input', { className: 'form-control', placeholder: 'Password', name: 'secret', type: 'password', value: this.state.secret, onChange: this.handleSecretChange })
				),
				React.createElement('input', { type: 'submit', value: 'Login', className: 'btn btn-lg btn-success btn-block' }),
				React.createElement('br', null)
			)
		);
	}
});