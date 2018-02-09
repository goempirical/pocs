var ScheduleList = React.createClass({
	displayName: 'ScheduleList',


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
									'Area'
								),
								React.createElement(
									'th',
									null,
									'Mon 22'
								),
								React.createElement(
									'th',
									null,
									'Tue 23'
								),
								React.createElement(
									'th',
									null,
									'Wed 24'
								),
								React.createElement(
									'th',
									null,
									'Thu 25'
								),
								React.createElement(
									'th',
									null,
									'Fri 26'
								),
								React.createElement(
									'th',
									null,
									'Sat 27'
								),
								React.createElement(
									'th',
									null,
									'Sun 28'
								)
							)
						),
						React.createElement(
							'tbody',
							null,
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'INNOCULATE'
								),
								React.createElement('td', null),
								React.createElement(
									'td',
									null,
									'Cordyceps'
								),
								React.createElement(
									'td',
									null,
									'Cordyceps'
								),
								React.createElement(
									'td',
									null,
									'Maitake'
								),
								React.createElement(
									'td',
									null,
									'Maitake'
								),
								React.createElement(
									'td',
									null,
									'Maitake'
								),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'DEHYDRATE UNIT 1-AM'
								),
								React.createElement(
									'td',
									null,
									'121902C'
								),
								React.createElement(
									'td',
									null,
									'122202C'
								),
								React.createElement(
									'td',
									null,
									'122202C'
								),
								React.createElement(
									'td',
									null,
									'122302C'
								),
								React.createElement(
									'td',
									null,
									'122302C'
								),
								React.createElement(
									'td',
									null,
									'122204C'
								),
								React.createElement(
									'td',
									null,
									'122204C'
								)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'DEHYDRATE UNIT 1-PM'
								),
								React.createElement(
									'td',
									null,
									'121902C'
								),
								React.createElement(
									'td',
									null,
									'122202C'
								),
								React.createElement(
									'td',
									null,
									'122202C'
								),
								React.createElement(
									'td',
									null,
									'122302C'
								),
								React.createElement(
									'td',
									null,
									'122302C'
								),
								React.createElement(
									'td',
									null,
									'122204C'
								),
								React.createElement(
									'td',
									null,
									'122204C'
								)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'DEHYDRATE UNIT 2-AM'
								),
								React.createElement(
									'td',
									null,
									'121902C'
								),
								React.createElement(
									'td',
									null,
									'122202C'
								),
								React.createElement(
									'td',
									null,
									'122202C'
								),
								React.createElement(
									'td',
									null,
									'122302C'
								),
								React.createElement(
									'td',
									null,
									'122302C'
								),
								React.createElement(
									'td',
									null,
									'122204C'
								),
								React.createElement(
									'td',
									null,
									'122204C'
								)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'DEHYDRATE UNIT 2-PM'
								),
								React.createElement(
									'td',
									null,
									'121902C'
								),
								React.createElement(
									'td',
									null,
									'122202C'
								),
								React.createElement(
									'td',
									null,
									'122202C'
								),
								React.createElement(
									'td',
									null,
									'122302C'
								),
								React.createElement(
									'td',
									null,
									'122302C'
								),
								React.createElement(
									'td',
									null,
									'122204C'
								),
								React.createElement(
									'td',
									null,
									'122204C'
								)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'MILL'
								),
								React.createElement(
									'td',
									null,
									'120807C, 120907C'
								),
								React.createElement(
									'td',
									null,
									'120907C'
								),
								React.createElement(
									'td',
									null,
									'121702C'
								),
								React.createElement(
									'td',
									null,
									'121802C'
								),
								React.createElement(
									'td',
									null,
									'121902C'
								),
								React.createElement(
									'td',
									null,
									'122202C'
								),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'UV'
								),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'BLEND'
								),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'BULK PAC'
								),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'BLEND/RETAIL'
								),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'RETAIL PAC'
								),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'SAMPLE'
								),
								React.createElement(
									'td',
									null,
									'120807C'
								),
								React.createElement(
									'td',
									null,
									'120907C'
								),
								React.createElement('td', null),
								React.createElement(
									'td',
									null,
									'121702C'
								),
								React.createElement(
									'td',
									null,
									'121802C'
								),
								React.createElement(
									'td',
									null,
									'121902C'
								),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'SHIP'
								),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null),
								React.createElement('td', null)
							)
						)
					)
				)
			),
			React.createElement(LotFormModal, { onLotUpdate: this.handleLotUpdate, selectedLot: this.state.selectedLot })
		);
	}
});