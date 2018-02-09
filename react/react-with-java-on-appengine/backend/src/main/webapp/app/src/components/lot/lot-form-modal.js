var LotFormModal = React.createClass({

	getInitialState: function() {
		var lot = {};
		lot.code = 'default';
		lot.status = 'quarentine';
		lot.forStauber = false;
		lot.weight = 0;
		return {lot: lot};
	},
	
	handleCodeChange: function(e) {
		lot = this.state.lot;
		lot.code = e.target.value
		this.setState({lot: lot});
	},
  
	handleWeightChange: function(e) {
		lot = this.state.lot;
		lot.weight = e.target.value
		this.setState({lot: lot});
	},
  
	handleStatusChange: function(e) {
		lot = this.state.lot;
		lot.status = e.target.value
		this.setState({lot: lot});
	},
  
	handleAssignedToChange: function(e) {
		lot = this.state.lot;
		lot.assignedTo = e.target.value
		this.setState({lot: lot});
	},
	
	handleAssignedToChange: function(e) {
		lot = this.state.lot;
		lot.assignedTo = e.target.value
		this.setState({lot: lot});
	},
	
	handleTestResultEstimatedDateChange: function(e) {
		lot = this.state.lot;
		lot.testResultEstimatedDate = e.target.value
		//alert(JSON.stringify(lot));
		this.setState({lot: lot});
	},
	
	handleTestResultReceivedDateChange: function(e) {
		lot = this.state.lot;
		lot.testResultReceivedDate = e.target.value
		//alert(JSON.stringify(lot));
		this.setState({lot: lot});
	},
  
	handleSubmit: function(e) {
		e.preventDefault();
		var lot = this.state.lot;
		if (!lot.code) {
			return;
		}
		this.props.onLotUpdate(lot);
		this.setState(this.getInitialState());
	},

	componentWillReceiveProps: function(nextProps) {
		this.setState( {lot: nextProps.selectedLot} );
	},
	
	componentDidMount: function(){
		
		var that = this;
		
		$('#testResultEstimatedDatePicker').datetimepicker();
		$("#testResultEstimatedDatePicker").on("dp.change", function (e) {
			lot = that.state.lot;
			lot.testResultEstimatedDate = !e.date ? null : e.date;
			that.setState({lot: lot});
        });
		
		$('#testResultReceivedDatePicker').datetimepicker();
		$("#testResultReceivedDatePicker").on("dp.change", function (e) {
			lot = that.state.lot;
			lot.testResultReceivedDate = !e.date ? null : e.date;
			that.setState({lot: lot});
        });
	},

	render: function() {
		return (
				<div className="modal fade" id="lotFormModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<form role="form" className="lotForm" onSubmit={this.handleSubmit}>
								<div className="modal-header">
									<button type="button" className="close" data-dismiss="modal"
										aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
									<h4 className="modal-title" id="myModalLabel">Lot #: {this.state.lot.code}</h4>
								</div>
								<div className="modal-body">
									<div className="row">
										<div className="col-lg-6">
											<div className="form-group">
												<label>Lot #</label> <input className="form-control" type="text"
													placeholder="Code" value={this.state.lot.code}
													onChange={this.handleCodeChange} />
											</div>
											<div className="form-group">
												<label>Weight (Kg)</label> <input className="form-control"
													type="text" placeholder="Weight" value={this.state.lot.weight}
													onChange={this.handleWeightChange} />
											</div>
											<div className="form-group">
												<label>Test Result Estimated Date</label>
												<div className='input-group date'
													id='testResultEstimatedDatePicker'>
													<input type='text' className="form-control"
														value={this.state.lot.testResultEstimatedDate ? dateFormat(this.state.lot.testResultEstimatedDate, "ddd, mmm dS, yyyy, h:MM TT"): ""}
																onChange={this.handleTestResultEstimatedDateChange} />
													<span className="input-group-addon"> <span
														className="glyphicon glyphicon-calendar"></span>
													</span>
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<label>Assigned To</label> <select className="form-control"
													value={this.state.lot.assignedTo}
													onChange={this.handleAssignedToChange}>
													<option value="M2">M2</option>
													<option value="Stauber">Stauber</option>
												</select>
											</div>
											<div className="form-group">
												<label>Status</label> <select className="form-control"
													value={this.state.lot.status}
													onChange={this.handleStatusChange}>
													<option value="quarentine">Quarentine</option>
													<option value="on_hold">On Hold</option>
													<option value="released">Released</option>
													<option value="released_equine">Released (Pet/Equine)</option>
												</select>
											</div>
											<div className="form-group">
												<label>Test Result Received Date</label>
												<div className='input-group date'
													id='testResultReceivedDatePicker'>
													<input type='text' className="form-control"
														value={this.state.lot.testResultReceivedDate ? dateFormat(this.state.lot.testResultReceivedDate, "ddd, mmm dS, yyyy, h:MM TT"): ""}
														onChange={this.handleTestResultReceivedDateChange} />
													<span className="input-group-addon"> <span
														className="glyphicon glyphicon-calendar"></span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-default"
										data-dismiss="modal">Close</button>
									<button type="submit" className="btn btn-primary">Save
										Changes</button>
								</div>
							</form>
						</div>
					</div>
				</div>
		);
	}
});
