var LotList = React.createClass({

	getInitialState: function() {
		  return {data: [], selectedLot: { code: 'placeHolder'}, filter: "all"};
	},
	  
	handleLotDelete: function(lot) {
	    this.props.onLotDelete(lot);
	},

	handleLotUpdate: function(lot) {
	    this.props.onLotUpdate(lot);
	},
	
	handleLotEdit: function(lot){
		$('#lotFormModal').modal('show');
		this.setState({selectedLot: lot})
	},
	
	handleFilterChange: function(e){
		//alert(e.target.value);
		var filterVal = e.target.value;
		if(!filterVal)
			filterVal = "all";
		
		this.setState({filter: filterVal})
	},
	
	handleRefresh: function(){
		this.props.onRefresh();
	},

	componentDidMount: function() {
		this.setState({selectedLot: {id: '1234' , code: 'placeholder'}})
	},

	render: function() {
	    var lotNodes = this.props.data.map(function(lot) {
	    	if(this.state.filter == "all" 
	    		|| lot.status.contains(this.state.filter) 
	    		|| lot.code.contains(this.state.filter)
	    		|| (lot.assignedTo && lot.assignedTo.toLowerCase().contains(this.state.filter))
	    		|| (lot.specie && lot.specie.toLowerCase().contains(this.state.filter))
	    		){
	    		return (
		    			<Lot key={lot.id} lot={lot} onLotDelete={this.handleLotDelete} onLotUpdate={this.handleLotUpdate} onLotEdit={this.handleLotEdit} />
		    	);
	    	}
	    }, this); 
	    // pay attention to this this is awesome! if you pass this you can call the component
	    // http://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-context-inside-a-callback
	    
	    return (
	    		<div className="lotList">
		    		<div className="row">
		    			<div className="col-lg-6">
		    				<div className="input-group">
		    					<span className="input-group-btn">
		    						<button className="btn btn-default" type="button">
		    							<i className="fa fa-search"></i>
		    						</button>
		    					</span> <input className="form-control" type="text"
		    						placeholder="Enter filter  here" onChange={this.handleFilterChange} />
		    				</div>
		    			</div>
		    			<div className="col-lg-6">
		    				<div className="input-group">
	    						<button className="btn btn-default" type="button" onClick={this.handleRefresh}>
	    							<i className="fa fa-refresh"></i>
	    						</button>
		    				</div>
		    			</div>
		    		</div>
		    		<br />
		    		<div className="row">
		    			<div className="col-lg-12">
		    				<table className="table table-striped table-bordered table-hover"
		    					id="dataTables-example">
		    					<thead>
		    						<tr>
		    							<th>Lot #</th>
		    							<th>Specie</th>
		    							<th>Status</th>
		    							<th>Weight (Kg)</th>
		    							<th>Assigned To</th>
		    							<th>Test Results Estimated Date</th>
		    							<th>Test Results Received Date</th>
		    							<th>Actions</th>
		    						</tr>
		    					</thead>
		    					<tbody>{lotNodes}
		    					</tbody>
		    				</table>
		    			</div>
		    		</div>
		    		<LotFormModal onLotUpdate={this.handleLotUpdate} selectedLot={this.state.selectedLot} />
		    	</div>
	    );
	}
});