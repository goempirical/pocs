var LotList = React.createClass({
	displayName: 'LotList',


	getInitialState: function () {
		return { data: [], selectedLot: { code: 'placeHolder' }, filter: "all" };
	},

	handleLotDelete: function (lot) {
		this.props.onLotDelete(lot);
	},

	handleLotUpdate: function (lot) {
		this.props.onLotUpdate(lot);
	},

	handleLotEdit: function (lot) {
		$('#lotFormModal').modal('show');
		this.setState({ selectedLot: lot });
	},

	handleFilterChange: function (e) {
		//alert(e.target.value);
		var filterVal = e.target.value;
		if (!filterVal) filterVal = "all";

		this.setState({ filter: filterVal });
	},

	handleRefresh: function () {
		this.props.onRefresh();
	},

	componentDidMount: function () {
		this.setState({ selectedLot: { id: '1234', code: 'placeholder' } });
	},

	render: function () {
		var lotNodes = this.props.data.map(function (lot) {
			if (this.state.filter == "all" || lot.status.contains(this.state.filter) || lot.code.contains(this.state.filter) || lot.assignedTo && lot.assignedTo.toLowerCase().contains(this.state.filter) || lot.specie && lot.specie.toLowerCase().contains(this.state.filter)) {
				return React.createElement(Lot, { key: lot.id, lot: lot, onLotDelete: this.handleLotDelete, onLotUpdate: this.handleLotUpdate, onLotEdit: this.handleLotEdit });
			}
		}, this);
		// pay attention to this this is awesome! if you pass this you can call the component
		// http://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-context-inside-a-callback

		return React.createElement(
			'div',
			{ className: 'lotList' },
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
								{ className: 'btn btn-default', type: 'button' },
								React.createElement('i', { className: 'fa fa-search' })
							)
						),
						' ',
						React.createElement('input', { className: 'form-control', type: 'text',
							placeholder: 'Enter filter  here', onChange: this.handleFilterChange })
					)
				),
				React.createElement(
					'div',
					{ className: 'col-lg-6' },
					React.createElement(
						'div',
						{ className: 'input-group' },
						React.createElement(
							'button',
							{ className: 'btn btn-default', type: 'button', onClick: this.handleRefresh },
							React.createElement('i', { className: 'fa fa-refresh' })
						)
					)
				)
			),
			React.createElement('br', null),
			React.createElement(
				'div',
				{ className: 'row' },
				React.createElement(
					'div',
					{ className: 'col-lg-12' },
					React.createElement(
						'table',
						{ className: 'table table-striped table-bordered table-hover',
							id: 'dataTables-example' },
						React.createElement(
							'thead',
							null,
							React.createElement(
								'tr',
								null,
								React.createElement(
									'th',
									null,
									'Lot #'
								),
								React.createElement(
									'th',
									null,
									'Specie'
								),
								React.createElement(
									'th',
									null,
									'Status'
								),
								React.createElement(
									'th',
									null,
									'Weight (Kg)'
								),
								React.createElement(
									'th',
									null,
									'Assigned To'
								),
								React.createElement(
									'th',
									null,
									'Test Results Estimated Date'
								),
								React.createElement(
									'th',
									null,
									'Test Results Received Date'
								),
								React.createElement(
									'th',
									null,
									'Actions'
								)
							)
						),
						React.createElement(
							'tbody',
							null,
							lotNodes
						)
					)
				)
			),
			React.createElement(LotFormModal, { onLotUpdate: this.handleLotUpdate, selectedLot: this.state.selectedLot })
		);
	}
});