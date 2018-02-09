var Dashboard = React.createClass({
	displayName: "Dashboard",

	render: function () {
		return React.createElement(
			"div",
			{ className: "dashboard" },
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"div",
					{ className: "col-lg-12" },
					React.createElement(
						"h1",
						{ className: "page-header" },
						"Dashboard"
					)
				)
			),
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"div",
					{ className: "col-lg-3 col-md-6" },
					React.createElement(
						"div",
						{ className: "panel panel-primary" },
						React.createElement(
							"div",
							{ className: "panel-heading" },
							React.createElement(
								"div",
								{ className: "row" },
								React.createElement(
									"div",
									{ className: "col-xs-3" },
									React.createElement("i", { className: "fa fa-comments fa-5x" })
								),
								React.createElement(
									"div",
									{ className: "col-xs-9 text-right" },
									React.createElement(
										"div",
										{ className: "huge" },
										"26"
									),
									React.createElement(
										"div",
										null,
										"New Comments!"
									)
								)
							)
						),
						React.createElement(
							"a",
							{ href: "#" },
							React.createElement(
								"div",
								{ className: "panel-footer" },
								React.createElement(
									"span",
									{ className: "pull-left" },
									"View Details"
								),
								React.createElement(
									"span",
									{ className: "pull-right" },
									React.createElement("i", { className: "fa fa-arrow-circle-right" })
								),
								React.createElement("div", { className: "clearfix" })
							)
						)
					)
				),
				React.createElement(
					"div",
					{ className: "col-lg-3 col-md-6" },
					React.createElement(
						"div",
						{ className: "panel panel-green" },
						React.createElement(
							"div",
							{ className: "panel-heading" },
							React.createElement(
								"div",
								{ className: "row" },
								React.createElement(
									"div",
									{ className: "col-xs-3" },
									React.createElement("i", { className: "fa fa-tasks fa-5x" })
								),
								React.createElement(
									"div",
									{ className: "col-xs-9 text-right" },
									React.createElement(
										"div",
										{ className: "huge" },
										"12"
									),
									React.createElement(
										"div",
										null,
										"New Tasks!"
									)
								)
							)
						),
						React.createElement(
							"a",
							{ href: "#" },
							React.createElement(
								"div",
								{ className: "panel-footer" },
								React.createElement(
									"span",
									{ className: "pull-left" },
									"View Details"
								),
								React.createElement(
									"span",
									{ className: "pull-right" },
									React.createElement("i", { className: "fa fa-arrow-circle-right" })
								),
								React.createElement("div", { className: "clearfix" })
							)
						)
					)
				),
				React.createElement(
					"div",
					{ className: "col-lg-3 col-md-6" },
					React.createElement(
						"div",
						{ className: "panel panel-yellow" },
						React.createElement(
							"div",
							{ className: "panel-heading" },
							React.createElement(
								"div",
								{ className: "row" },
								React.createElement(
									"div",
									{ className: "col-xs-3" },
									React.createElement("i", { className: "fa fa-shopping-cart fa-5x" })
								),
								React.createElement(
									"div",
									{ className: "col-xs-9 text-right" },
									React.createElement(
										"div",
										{ className: "huge" },
										"124"
									),
									React.createElement(
										"div",
										null,
										"New Orders!"
									)
								)
							)
						),
						React.createElement(
							"a",
							{ href: "#" },
							React.createElement(
								"div",
								{ className: "panel-footer" },
								React.createElement(
									"span",
									{ className: "pull-left" },
									"View Details"
								),
								React.createElement(
									"span",
									{ className: "pull-right" },
									React.createElement("i", { className: "fa fa-arrow-circle-right" })
								),
								React.createElement("div", { className: "clearfix" })
							)
						)
					)
				),
				React.createElement(
					"div",
					{ className: "col-lg-3 col-md-6" },
					React.createElement(
						"div",
						{ className: "panel panel-red" },
						React.createElement(
							"div",
							{ className: "panel-heading" },
							React.createElement(
								"div",
								{ className: "row" },
								React.createElement(
									"div",
									{ className: "col-xs-3" },
									React.createElement("i", { className: "fa fa-support fa-5x" })
								),
								React.createElement(
									"div",
									{ className: "col-xs-9 text-right" },
									React.createElement(
										"div",
										{ className: "huge" },
										"13"
									),
									React.createElement(
										"div",
										null,
										"Support Tickets!"
									)
								)
							)
						),
						React.createElement(
							"a",
							{ href: "#" },
							React.createElement(
								"div",
								{ className: "panel-footer" },
								React.createElement(
									"span",
									{ className: "pull-left" },
									"View Details"
								),
								React.createElement(
									"span",
									{ className: "pull-right" },
									React.createElement("i", { className: "fa fa-arrow-circle-right" })
								),
								React.createElement("div", { className: "clearfix" })
							)
						)
					)
				)
			),
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement("div", { className: "col-lg-12" })
			)
		);
	}
});