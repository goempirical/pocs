var LotFormModal = React.createClass({
	displayName: 'LotFormModal',


	getInitialState: function () {
		var lot = {};
		lot.code = 'default';
		lot.status = 'quarentine';
		lot.forStauber = false;
		lot.weight = 0;
		return { lot: lot };
	},

	handleCodeChange: function (e) {
		lot = this.state.lot;
		lot.code = e.target.value;
		this.setState({ lot: lot });
	},

	handleWeightChange: function (e) {
		lot = this.state.lot;
		lot.weight = e.target.value;
		this.setState({ lot: lot });
	},

	handleStatusChange: function (e) {
		lot = this.state.lot;
		lot.status = e.target.value;
		this.setState({ lot: lot });
	},

	handleAssignedToChange: function (e) {
		lot = this.state.lot;
		lot.assignedTo = e.target.value;
		this.setState({ lot: lot });
	},

	handleAssignedToChange: function (e) {
		lot = this.state.lot;
		lot.assignedTo = e.target.value;
		this.setState({ lot: lot });
	},

	handleTestResultEstimatedDateChange: function (e) {
		lot = this.state.lot;
		lot.testResultEstimatedDate = e.target.value;
		//alert(JSON.stringify(lot));
		this.setState({ lot: lot });
	},

	handleTestResultReceivedDateChange: function (e) {
		lot = this.state.lot;
		lot.testResultReceivedDate = e.target.value;
		//alert(JSON.stringify(lot));
		this.setState({ lot: lot });
	},

	handleSubmit: function (e) {
		e.preventDefault();
		var lot = this.state.lot;
		if (!lot.code) {
			return;
		}
		this.props.onLotUpdate(lot);
		this.setState(this.getInitialState());
	},

	componentWillReceiveProps: function (nextProps) {
		this.setState({ lot: nextProps.selectedLot });
	},

	componentDidMount: function () {

		var that = this;

		$('#testResultEstimatedDatePicker').datetimepicker();
		$("#testResultEstimatedDatePicker").on("dp.change", function (e) {
			lot = that.state.lot;
			lot.testResultEstimatedDate = !e.date ? null : e.date;
			that.setState({ lot: lot });
		});

		$('#testResultReceivedDatePicker').datetimepicker();
		$("#testResultReceivedDatePicker").on("dp.change", function (e) {
			lot = that.state.lot;
			lot.testResultReceivedDate = !e.date ? null : e.date;
			that.setState({ lot: lot });
		});
	},

	render: function () {
		return React.createElement(
			'div',
			{ className: 'modal fade', id: 'lotFormModal', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'myModalLabel' },
			React.createElement(
				'div',
				{ className: 'modal-dialog', role: 'document' },
				React.createElement(
					'div',
					{ className: 'modal-content' },
					React.createElement(
						'form',
						{ role: 'form', className: 'lotForm', onSubmit: this.handleSubmit },
						React.createElement(
							'div',
							{ className: 'modal-header' },
							React.createElement(
								'button',
								{ type: 'button', className: 'close', 'data-dismiss': 'modal',
									'aria-label': 'Close' },
								React.createElement(
									'span',
									{ 'aria-hidden': 'true' },
									'×'
								)
							),
							React.createElement(
								'h4',
								{ className: 'modal-title', id: 'myModalLabel' },
								'Lot #: ',
								this.state.lot.code
							)
						),
						React.createElement(
							'div',
							{ className: 'modal-body' },
							React.createElement(
								'div',
								{ className: 'row' },
								React.createElement(
									'div',
									{ className: 'col-lg-6' },
									React.createElement(
										'div',
										{ className: 'form-group' },
										React.createElement(
											'label',
											null,
											'Lot #'
										),
										' ',
										React.createElement('input', { className: 'form-control', type: 'text',
											placeholder: 'Code', value: this.state.lot.code,
											onChange: this.handleCodeChange })
									),
									React.createElement(
										'div',
										{ className: 'form-group' },
										React.createElement(
											'label',
											null,
											'Weight (Kg)'
										),
										' ',
										React.createElement('input', { className: 'form-control',
											type: 'text', placeholder: 'Weight', value: this.state.lot.weight,
											onChange: this.handleWeightChange })
									),
									React.createElement(
										'div',
										{ className: 'form-group' },
										React.createElement(
											'label',
											null,
											'Test Result Estimated Date'
										),
										React.createElement(
											'div',
											{ className: 'input-group date',
												id: 'testResultEstimatedDatePicker' },
											React.createElement('input', { type: 'text', className: 'form-control',
												value: this.state.lot.testResultEstimatedDate ? dateFormat(this.state.lot.testResultEstimatedDate, "ddd, mmm dS, yyyy, h:MM TT") : "",
												onChange: this.handleTestResultEstimatedDateChange }),
											React.createElement(
												'span',
												{ className: 'input-group-addon' },
												' ',
												React.createElement('span', {
													className: 'glyphicon glyphicon-calendar' })
											)
										)
									)
								),
								React.createElement(
									'div',
									{ className: 'col-lg-6' },
									React.createElement(
										'div',
										{ className: 'form-group' },
										React.createElement(
											'label',
											null,
											'Assigned To'
										),
										' ',
										React.createElement(
											'select',
											{ className: 'form-control',
												value: this.state.lot.assignedTo,
												onChange: this.handleAssignedToChange },
											React.createElement(
												'option',
												{ value: 'M2' },
												'M2'
											),
											React.createElement(
												'option',
												{ value: 'Stauber' },
												'Stauber'
											)
										)
									),
									React.createElement(
										'div',
										{ className: 'form-group' },
										React.createElement(
											'label',
											null,
											'Status'
										),
										' ',
										React.createElement(
											'select',
											{ className: 'form-control',
												value: this.state.lot.status,
												onChange: this.handleStatusChange },
											React.createElement(
												'option',
												{ value: 'quarentine' },
												'Quarentine'
											),
											React.createElement(
												'option',
												{ value: 'on_hold' },
												'On Hold'
											),
											React.createElement(
												'option',
												{ value: 'released' },
												'Released'
											),
											React.createElement(
												'option',
												{ value: 'released_equine' },
												'Released (Pet/Equine)'
											)
										)
									),
									React.createElement(
										'div',
										{ className: 'form-group' },
										React.createElement(
											'label',
											null,
											'Test Result Received Date'
										),
										React.createElement(
											'div',
											{ className: 'input-group date',
												id: 'testResultReceivedDatePicker' },
											React.createElement('input', { type: 'text', className: 'form-control',
												value: this.state.lot.testResultReceivedDate ? dateFormat(this.state.lot.testResultReceivedDate, "ddd, mmm dS, yyyy, h:MM TT") : "",
												onChange: this.handleTestResultReceivedDateChange }),
											React.createElement(
												'span',
												{ className: 'input-group-addon' },
												' ',
												React.createElement('span', {
													className: 'glyphicon glyphicon-calendar' })
											)
										)
									)
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'modal-footer' },
							React.createElement(
								'button',
								{ type: 'button', className: 'btn btn-default',
									'data-dismiss': 'modal' },
								'Close'
							),
							React.createElement(
								'button',
								{ type: 'submit', className: 'btn btn-primary' },
								'Save Changes'
							)
						)
					)
				)
			)
		);
	}
});