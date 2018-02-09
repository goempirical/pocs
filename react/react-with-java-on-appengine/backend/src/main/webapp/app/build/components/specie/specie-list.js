var SpecieList = React.createClass({
	displayName: 'SpecieList',


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
									'Lot # Last Digits'
								),
								React.createElement(
									'th',
									null,
									'Vendor Strain Number'
								),
								React.createElement(
									'th',
									null,
									'Name'
								),
								React.createElement(
									'th',
									null,
									'Common Name'
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
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'01'
								),
								React.createElement(
									'td',
									null,
									'CS-533'
								),
								React.createElement(
									'td',
									null,
									'Agaricus blazei'
								),
								React.createElement(
									'td',
									null,
									'Himematsutake, Royal Sun Aga...'
								),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'02'
								),
								React.createElement(
									'td',
									null,
									'CS-95'
								),
								React.createElement(
									'td',
									null,
									'Ganoderma lucidum'
								),
								React.createElement(
									'td',
									null,
									'Reishi, Ling Zhi'
								),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'03'
								),
								React.createElement(
									'td',
									null,
									'CS-441'
								),
								React.createElement(
									'td',
									null,
									'Trametes versicolor'
								),
								React.createElement(
									'td',
									null,
									'Turkey Tail, Yun Zhi'
								),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'04'
								),
								React.createElement(
									'td',
									null,
									'CS-521'
								),
								React.createElement(
									'td',
									null,
									'Cordyceps militaris'
								),
								React.createElement(
									'td',
									null,
									'Dong Cao'
								),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'05'
								),
								React.createElement(
									'td',
									null,
									'CS-534'
								),
								React.createElement(
									'td',
									null,
									'Antrodia camphorata'
								),
								React.createElement(
									'td',
									null,
									'Niu Chang Chih'
								),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'06'
								),
								React.createElement(
									'td',
									null,
									'CS-HKTO'
								),
								React.createElement(
									'td',
									null,
									'Hypsizygus marmoreus'
								),
								React.createElement(
									'td',
									null,
									'Beech, Buna shimeji'
								),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'07'
								),
								React.createElement(
									'td',
									null,
									'CS-494'
								),
								React.createElement(
									'td',
									null,
									'Grifola frondosa'
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
									'08'
								),
								React.createElement(
									'td',
									null,
									'CS-452'
								),
								React.createElement(
									'td',
									null,
									'Pleurotus eryngii'
								),
								React.createElement(
									'td',
									null,
									'King Trumpet, Eryngii'
								),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'09'
								),
								React.createElement(
									'td',
									null,
									'CS-600'
								),
								React.createElement(
									'td',
									null,
									'Inonotus obliquus'
								),
								React.createElement(
									'td',
									null,
									'Chaga'
								),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'10'
								),
								React.createElement(
									'td',
									null,
									'CS-124'
								),
								React.createElement(
									'td',
									null,
									'Hericium erinaceus'
								),
								React.createElement(
									'td',
									null,
									'Lion\'s Mane, Yambushitake'
								),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'11'
								),
								React.createElement(
									'td',
									null,
									'CS-321'
								),
								React.createElement(
									'td',
									null,
									'Lentinula edodes'
								),
								React.createElement(
									'td',
									null,
									'Shiitake'
								),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'12'
								),
								React.createElement(
									'td',
									null,
									'CS-201'
								),
								React.createElement(
									'td',
									null,
									'Cordyceps sinesis'
								),
								React.createElement(
									'td',
									null,
									'Cordyceps (source AM)'
								),
								React.createElement('td', null)
							),
							React.createElement(
								'tr',
								null,
								React.createElement(
									'td',
									null,
									'13'
								),
								React.createElement(
									'td',
									null,
									'CS-202'
								),
								React.createElement(
									'td',
									null,
									'Cordyceps sinesis'
								),
								React.createElement(
									'td',
									null,
									'Cordyceps (source AM)'
								),
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