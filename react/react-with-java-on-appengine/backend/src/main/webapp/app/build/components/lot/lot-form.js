var LotForm = React.createClass({
    displayName: 'LotForm',


    getInitialState: function () {
        var lot = {};
        lot.code = '';
        lot.status = 'quarentine';
        lot.forStaubern = false;
        lot.weight = 0;
        return lot;
    },

    handleCodeChange: function (e) {
        this.setState({ code: e.target.value });
    },

    handleWeightChange: function (e) {
        this.setState({ weight: e.target.value });
    },

    handleStatusChange: function (e) {
        this.setState({ status: e.target.value });
    },

    handleForStaubernChange: function (e) {
        this.setState({ forStaubern: e.target.checked });
    },

    handleSubmit: function (e) {
        e.preventDefault();
        var lot = {};

        lot.code = this.state.code.trim();
        lot.status = this.state.status.trim();
        lot.weight = this.state.weight.trim();
        lot.forStaubern = this.state.forStaubern;
        if (!lot.code) {
            return;
        }
        this.props.onLotSubmit(lot);
        this.setState(this.getInitialState());
    },
    render: function () {
        return React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col-lg-12' },
                React.createElement(
                    'div',
                    { className: 'panel panel-default' },
                    React.createElement(
                        'div',
                        { className: 'panel-heading' },
                        'Lot Details'
                    ),
                    React.createElement(
                        'div',
                        { className: 'panel-body' },
                        React.createElement(
                            'form',
                            { role: 'form', className: 'lotForm', onSubmit: this.handleSubmit },
                            React.createElement(
                                'div',
                                { className: 'row' },
                                React.createElement(
                                    'div',
                                    { className: 'col-lg-6' },
                                    React.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        React.createElement(
                                            'label',
                                            null,
                                            'Lot #'
                                        ),
                                        React.createElement('input', {
                                            className: 'form-control',
                                            type: 'text',
                                            placeholder: 'Code',
                                            value: this.state.code,
                                            onChange: this.handleCodeChange
                                        })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        React.createElement(
                                            'label',
                                            null,
                                            'Weight (KG)'
                                        ),
                                        React.createElement('input', {
                                            className: 'form-control',
                                            type: 'text',
                                            placeholder: 'Weight',
                                            value: this.state.weight,
                                            onChange: this.handleWeightChange
                                        })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-lg-6' },
                                    React.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        React.createElement(
                                            'label',
                                            null,
                                            'For Staubern'
                                        ),
                                        React.createElement('input', {
                                            className: 'form-control',
                                            type: 'checkbox',
                                            placeholder: 'For Staubern',
                                            checked: this.state.forStaubern,
                                            onChange: this.handleForStaubernChange
                                        })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        React.createElement(
                                            'label',
                                            null,
                                            'Status'
                                        ),
                                        React.createElement(
                                            'select',
                                            { className: 'form-control', onChange: this.handleStatusChange },
                                            React.createElement(
                                                'option',
                                                { value: 'quarentine' },
                                                'quarentine'
                                            ),
                                            React.createElement(
                                                'option',
                                                { value: 'on_hold' },
                                                'on_hold'
                                            ),
                                            React.createElement(
                                                'option',
                                                { value: 'released' },
                                                'released'
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'row' },
                                React.createElement(
                                    'div',
                                    { className: 'col-lg-12' },
                                    React.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-info pull-right' },
                                        'Submit Button'
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});