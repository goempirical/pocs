var LoginBox = React.createClass({
	displayName: "LoginBox",


	handleLoginSubmit: function (user) {
		this.setState({ waitMessage: "Please wait.." });
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			contentType: "application/json;charset=utf-8",
			type: 'POST',
			data: JSON.stringify(user),
			success: function (data) {
				sessionStorage.setObject("tokenData", data);
				this.showHome();
			}.bind(this),
			error: function (xhr, status, err) {
				this.setState({ waitMessage: 'Please try again. Error: ' + err.toString() });
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},

	showHome: function () {
		return ReactDOM.render(React.createElement(DashboardContainer, null), document.getElementById('container'));
	},

	getInitialState: function () {
		return { data: [] };
	},

	componentDidMount: function () {
		if (sessionStorage.getObject("tokenData") != null) {
			this.showHome();
		} else {
			// alert("no data");
		}
	},

	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"div",
					{ className: "col-md-4 col-md-offset-4" },
					React.createElement(
						"h3",
						{ className: "page-header text-center login-panel-header" },
						"M2Ingredients"
					)
				)
			),
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"div",
					{ className: "col-md-4 col-md-offset-4" },
					React.createElement(
						"div",
						{ className: "loginBox login-panel panel panel-default" },
						React.createElement(
							"div",
							{ className: "panel-heading" },
							React.createElement(
								"h3",
								{ className: "panel-title" },
								"Sign In"
							)
						),
						React.createElement(
							"div",
							{ className: "panel-body" },
							React.createElement(LoginForm, { onLoginSubmit: this.handleLoginSubmit }),
							React.createElement(
								"div",
								null,
								this.state.waitMessage
							)
						)
					)
				)
			)
		);
	}
});