var LoginBox = React.createClass({

	handleLoginSubmit: function(user) {
		this.setState({waitMessage: "Please wait.."})
	    $.ajax({
	    	url: this.props.url,
	    	dataType: 'json',
	    	contentType: "application/json;charset=utf-8",
	    	type: 'POST',
	    	data: JSON.stringify(user),
	    	success: function(data) {
	    		sessionStorage.setObject("tokenData", data);
	    		this.showHome();
	    	}.bind(this),
	    	error: function(xhr, status, err) {
	    		this.setState({waitMessage: 'Please try again. Error: ' + err.toString()});
	    		console.error(this.props.url, status, err.toString());
	    	}.bind(this)
    	});
    },
    
    showHome: function() {
    	return (
    			ReactDOM.render(
					<DashboardContainer/>, 
					document.getElementById('container')
    			)	
    	);
    },
    
    getInitialState: function() {
    	return { data: []};
    },
  
    componentDidMount: function() {
    	if(sessionStorage.getObject("tokenData") != null){
    		this.showHome();
    	}else{
    		// alert("no data");
    	}
    },
  
    render: function() {
    	return (
    			<div>
	    			<div className="row">
	    				<div className="col-md-4 col-md-offset-4">
	    					<h3 className="page-header text-center login-panel-header" >M2Ingredients</h3>
	    				</div>
	    			</div>
	    			<div className="row">
	    				<div className="col-md-4 col-md-offset-4">
	    					<div className="loginBox login-panel panel panel-default">
	    						<div className="panel-heading">
	    							<h3 className="panel-title">Sign In</h3>
	    						</div>
	    						<div className="panel-body">
	    							<LoginForm onLoginSubmit={this.handleLoginSubmit} />
	    							<div>{this.state.waitMessage}</div>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
    	);
    }
});