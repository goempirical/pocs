var SpecieList = React.createClass({

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
		    		{/*<div className="row">
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
		    		<br />*/}
		    		<div className="row">
		    			<div className="col-lg-12">
		    				<table className="table table-striped table-bordered table-hover"
		    					id="dataTables-example">
		    					<thead>
		    						<tr>
		    							<th>Lot # Last Digits</th>
		    							<th>Vendor Strain Number</th>
		    							<th>Name</th>
		    							<th>Common Name</th>
		    							<th>Actions</th>
		    						</tr>
		    					</thead>
		    					<tbody>
		    						{/*lotNodes*/}
		    						<tr>
		    							<td>01</td>
		    							<td>CS-533</td>
		    							<td>Agaricus blazei</td>
		    							<td>Himematsutake, Royal Sun Aga...</td>
		    							<td></td>
		    						</tr>
		    						<tr>
		    							<td>02</td>
		    							<td>CS-95</td>
		    							<td>Ganoderma lucidum</td>
		    							<td>Reishi, Ling Zhi</td>
		    							<td></td>
		    						</tr>
		    						<tr>
		    							<td>03</td>
		    							<td>CS-441</td>
		    							<td>Trametes versicolor</td>
		    							<td>Turkey Tail, Yun Zhi</td>
		    							<td></td>
		    						</tr>
		    						<tr>
		    							<td>04</td>
		    							<td>CS-521</td>
		    							<td>Cordyceps militaris</td>
		    							<td>Dong Cao</td>
		    							<td></td>
		    						</tr>
		    						<tr>
		    							<td>05</td>
		    							<td>CS-534</td>
		    							<td>Antrodia camphorata</td>
		    							<td>Niu Chang Chih</td>
		    							<td></td>
		    						</tr>
		    						<tr>
		    							<td>06</td>
		    							<td>CS-HKTO</td>
		    							<td>Hypsizygus marmoreus</td>
		    							<td>Beech, Buna shimeji</td>
		    							<td></td>
		    						</tr>
		    						<tr>
		    							<td>07</td>
		    							<td>CS-494</td>
		    							<td>Grifola frondosa</td>
		    							<td>Maitake</td>
		    							<td></td>
		    						</tr>
		    						<tr>
		    							<td>08</td>
		    							<td>CS-452</td>
		    							<td>Pleurotus eryngii</td>
		    							<td>King Trumpet, Eryngii</td>
		    							<td></td>
		    						</tr>
		    						<tr>
		    							<td>09</td>
		    							<td>CS-600</td>
		    							<td>Inonotus obliquus</td>
		    							<td>Chaga</td>
		    							<td></td>
		    						</tr>
		    						<tr>
		    							<td>10</td>
		    							<td>CS-124</td>
		    							<td>Hericium erinaceus</td>
		    							<td>Lion's Mane, Yambushitake</td>
		    							<td></td>
		    						</tr>
		    						<tr>
		    							<td>11</td>
		    							<td>CS-321</td>
		    							<td>Lentinula edodes</td>
		    							<td>Shiitake</td>
		    							<td></td>
		    						</tr>
		    						<tr>
		    							<td>12</td>
		    							<td>CS-201</td>
		    							<td>Cordyceps sinesis</td>
		    							<td>Cordyceps (source AM)</td>
		    							<td></td>
		    						</tr>
		    						<tr>
		    							<td>13</td>
		    							<td>CS-202</td>
		    							<td>Cordyceps sinesis</td>
		    							<td>Cordyceps (source AM)</td>
		    							<td></td>
		    						</tr>
		    					</tbody>
		    				</table>
		    			</div>
		    		</div>
		    		<LotFormModal onLotUpdate={this.handleLotUpdate} selectedLot={this.state.selectedLot} />
		    	</div>
	    );
	}
});