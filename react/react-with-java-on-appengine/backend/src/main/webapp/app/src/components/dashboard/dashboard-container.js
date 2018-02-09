var DashboardContainer = React.createClass({
  render: function() {
    return (
    		<div className="dashboardContainer">
    			<NavBar />
    			<div id="page-wrapper" style={{minHeight: '195px'}}></div>
    		</div>
    );
  }
});