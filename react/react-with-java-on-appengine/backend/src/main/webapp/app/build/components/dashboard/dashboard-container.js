var DashboardContainer = React.createClass({
  displayName: "DashboardContainer",

  render: function () {
    return React.createElement(
      "div",
      { className: "dashboardContainer" },
      React.createElement(NavBar, null),
      React.createElement("div", { id: "page-wrapper", style: { minHeight: '195px' } })
    );
  }
});