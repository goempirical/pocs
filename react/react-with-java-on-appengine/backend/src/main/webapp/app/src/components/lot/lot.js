var Lot = React.createClass({
	handleLotDelete: function(){
		//if (confirm('Are you sure you want to delete this Lot?')) {
		//	this.props.onLotDelete(this.props.lot);
		//} 
		
		this.props.onLotDelete(this.props.lot);
	},
	
	handleLotReleased: function(){
		lot = this.props.lot;
		lot.status = "released";
		this.props.onLotUpdate(lot);
	},
	
	handleLotReleasedEquine: function(){
		lot = this.props.lot;
		lot.status = "released_equine";
		this.props.onLotUpdate(lot);
	},

	handleLotQuarentine: function() {
		lot = this.props.lot;
		lot.status = "quarentine";
	    this.props.onLotUpdate(lot);
	},
	
	handleLotOnHold: function() {
		lot = this.props.lot;
		lot.status = "on_hold";
	    this.props.onLotUpdate(lot);
	},
	
	handleLotEdit: function() {
		lot = this.props.lot;
	    this.props.onLotEdit(lot);
	},

	render: function() {
		return (
	    		<tr className={this.props.lot.status} onDoubleClick={this.handleLotEdit}>
		    		<td>{this.props.lot.code}</td>
		    		<td>{this.props.lot.specie}</td>
		    		<td>{this.props.lot.status}</td>
		    		<td>{this.props.lot.weight}</td>
		    		<td>{this.props.lot.assignedTo}</td>
		    		<td>{ this.props.lot.testResultEstimatedDate ? dateFormat(this.props.lot.testResultEstimatedDate, "ddd, mmm dS, yyyy, h:MM TT") : ""}</td>
		    		<td>{ this.props.lot.testResultReceivedDate? dateFormat(this.props.lot.testResultReceivedDate, "ddd, mmm dS, yyyy, h:MM TT"): ""}</td>
		    		<td>
		    			<div className="btn-group">
		    				<div className="btn-group">
		    					<button type="button" className="btn btn-default"
		    						onClick={this.handleLotEdit}>Edit</button>
		    					<button type="button" className="btn btn-default dropdown-toggle"
		    						data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		    						<span className="caret"></span> <span className="sr-only"></span>
		    					</button>
		    					<ul className="dropdown-menu">
		    						{/*<li><a href="#" onClick={this.handleLotEdit}>Edit</a></li>*/}
		    						<li><a href="#" onClick={this.handleLotQuarentine}>Set Quarentine</a></li>
		    						<li><a href="#" onClick={this.handleLotReleased}>Set Released</a></li>
		    						<li><a href="#" onClick={this.handleLotReleasedEquine}>Set Released (Pet/Equine)</a></li>
		    						<li><a href="#" onClick={this.handleLotOnHold}>Set On Hold</a></li>
		    						{/*
		    							<li className="dropdown-submenu"><a tabindex="-1" href="#">Hover me for more options</a>
		    							<ul className="dropdown-menu">
		    								<li><a tabIndex="-1" href="#">Second level</a></li>
		    								<li className="dropdown-submenu"><a href="#">Even More..</a>
		    									<ul className="dropdown-menu">
		    										<li><a href="#">3rd level</a></li>
		    										<li><a href="#">3rd level</a></li>
		    									</ul></li>
		    								<li><a href="#">Second level</a></li>
		    								<li><a href="#">Second level</a></li>
		    							</ul>
		    						</li>
		    						*/
		    						}
		    						{/*<li role="separator" className="divider"></li>*/} 
		    						{/*	<li><a href="#" onClick={this.handleLotDelete}>Delete</a></li>*/}
		    					</ul>
		    					<button type="button" className="btn btn-danger" onClick={this.handleLotDelete} style={{marginLeft:'15px'}}>Delete</button>
		    				</div>
		    			</div>
		    		</td>
		    	</tr>
	    );
	}
});