var LotFormQuick = React.createClass({
	displayName: 'LotFormQuick',


	getInitialState: function () {
		var lot = {};
		lot.code = '';
		lot.status = 'quarentine';
		lot.assignedTo = 'M2';
		lot.weight = 0;
		return lot;
	},

	handleCodeChange: function (e) {
		this.setState({ code: e.target.value });
	},

	handleSubmit: function (e) {
		e.preventDefault();
		var lot = this.getInitialState();
		lot.code = this.state.code.trim();
		if (!lot.code) {
			return;
		}
		this.props.onLotSubmit(lot);
		this.setState(this.getInitialState());
	},

	render: function () {
		return React.createElement(
			'form',
			{ role: 'form', className: 'lotForm', onSubmit: this.handleSubmit },
			React.createElement(
				'div',
				{ className: 'row' },
				React.createElement(
					'div',
					{ className: 'col-lg-6' },
					React.createElement(
						'div',
						{ className: 'input-group' },
						React.createElement(
							'span',
							{ className: 'input-group-btn' },
							React.createElement(
								'button',
								{ className: 'btn btn-info', type: 'submit' },
								'Create'
							)
						),
						React.createElement('input', { className: 'form-control', type: 'text',
							placeholder: 'Enter Lot #', value: this.state.code,
							onChange: this.handleCodeChange })
					)
				)
			)
		);
	}
});