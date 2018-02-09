var Lot = React.createClass({
	displayName: "Lot",

	handleLotDelete: function () {
		//if (confirm('Are you sure you want to delete this Lot?')) {
		//	this.props.onLotDelete(this.props.lot);
		//}

		this.props.onLotDelete(this.props.lot);
	},

	handleLotReleased: function () {
		lot = this.props.lot;
		lot.status = "released";
		this.props.onLotUpdate(lot);
	},

	handleLotReleasedEquine: function () {
		lot = this.props.lot;
		lot.status = "released_equine";
		this.props.onLotUpdate(lot);
	},

	handleLotQuarentine: function () {
		lot = this.props.lot;
		lot.status = "quarentine";
		this.props.onLotUpdate(lot);
	},

	handleLotOnHold: function () {
		lot = this.props.lot;
		lot.status = "on_hold";
		this.props.onLotUpdate(lot);
	},

	handleLotEdit: function () {
		lot = this.props.lot;
		this.props.onLotEdit(lot);
	},

	render: function () {
		return React.createElement(
			"tr",
			{ className: this.props.lot.status, onDoubleClick: this.handleLotEdit },
			React.createElement(
				"td",
				null,
				this.props.lot.code
			),
			React.createElement(
				"td",
				null,
				this.props.lot.specie
			),
			React.createElement(
				"td",
				null,
				this.props.lot.status
			),
			React.createElement(
				"td",
				null,
				this.props.lot.weight
			),
			React.createElement(
				"td",
				null,
				this.props.lot.assignedTo
			),
			React.createElement(
				"td",
				null,
				this.props.lot.testResultEstimatedDate ? dateFormat(this.props.lot.testResultEstimatedDate, "ddd, mmm dS, yyyy, h:MM TT") : ""
			),
			React.createElement(
				"td",
				null,
				this.props.lot.testResultReceivedDate ? dateFormat(this.props.lot.testResultReceivedDate, "ddd, mmm dS, yyyy, h:MM TT") : ""
			),
			React.createElement(
				"td",
				null,
				React.createElement(
					"div",
					{ className: "btn-group" },
					React.createElement(
						"div",
						{ className: "btn-group" },
						React.createElement(
							"button",
							{ type: "button", className: "btn btn-default",
								onClick: this.handleLotEdit },
							"Edit"
						),
						React.createElement(
							"button",
							{ type: "button", className: "btn btn-default dropdown-toggle",
								"data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
							React.createElement("span", { className: "caret" }),
							" ",
							React.createElement("span", { className: "sr-only" })
						),
						React.createElement(
							"ul",
							{ className: "dropdown-menu" },
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "#", onClick: this.handleLotQuarentine },
									"Set Quarentine"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "#", onClick: this.handleLotReleased },
									"Set Released"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "#", onClick: this.handleLotReleasedEquine },
									"Set Released (Pet/Equine)"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "#", onClick: this.handleLotOnHold },
									"Set On Hold"
								)
							)
						),
						React.createElement(
							"button",
							{ type: "button", className: "btn btn-danger", onClick: this.handleLotDelete, style: { marginLeft: '15px' } },
							"Delete"
						)
					)
				)
			)
		);
	}
});