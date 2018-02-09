var LotFormQuick = React.createClass({
	
	getInitialState: function() {
		var lot = {};
		lot.code = '';
		lot.status = 'quarentine';
		lot.assignedTo = 'M2';
		lot.weight = 0;
		return lot;
	},
	
	handleCodeChange: function(e) {
		this.setState({code: e.target.value});
	},

	handleSubmit: function(e) {
		e.preventDefault();
		var lot = this.getInitialState();
		lot.code = this.state.code.trim();
		if (!lot.code) {
			return;
		}
		this.props.onLotSubmit(lot);
		this.setState(this.getInitialState());
	},
  
	render: function() {
		return (
			<form role="form" className="lotForm" onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="col-lg-6">
						<div className="input-group">
						   <span className="input-group-btn">
		         	       		<button className="btn btn-info" type="submit">Create</button>
		         	       </span>
	             	       <input className="form-control" type="text"
								placeholder="Enter Lot #" value={this.state.code}
								onChange={this.handleCodeChange} />
	             	    </div>
					</div>
				</div>
			</form>
    	);
  	}
});
