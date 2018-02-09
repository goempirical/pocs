var NavBar = React.createClass({
    displayName: 'NavBar',

    mixins: [HelperFunctions],

    showDashboard: function () {
        return ReactDOM.render(React.createElement(Dashboard, null), document.getElementById('page-wrapper'));
    },

    showLotBox: function () {
        return ReactDOM.render(React.createElement(LotBox, { url: '../api/lots' }), document.getElementById('page-wrapper'));
    },

    showSpecieBox: function () {
        return ReactDOM.render(React.createElement(SpecieBox, { url: '../api/species' }), document.getElementById('page-wrapper'));
    },

    showScheduleBox: function () {
        return ReactDOM.render(React.createElement(ScheduleBox, { url: '../api/schedule' }), document.getElementById('page-wrapper'));
    },

    logout: function () {
        this.redirectToLogin();
    },

    componentDidMount: function () {
        $('#side-menu').metisMenu();
        this.showLotBox();
    },

    render: function () {
        return React.createElement(
            'nav',
            { className: 'navbar navbar-default navbar-static-top', role: 'navigation', style: { marginBottom: '0' } },
            React.createElement(
                'div',
                { className: 'navbar-header' },
                React.createElement(
                    'button',
                    { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-collapse' },
                    React.createElement(
                        'span',
                        { className: 'sr-only' },
                        'Toggle navigation'
                    ),
                    React.createElement('span', { className: 'icon-bar' }),
                    React.createElement('span', { className: 'icon-bar' }),
                    React.createElement('span', { className: 'icon-bar' })
                ),
                React.createElement(
                    'a',
                    { className: 'navbar-brand', style: { background: 'white', width: '250px' }, href: '#index.html' },
                    React.createElement('img', { style: { maxWidth: '175px', marginTop: '-13px', marginLeft: '45px' }, src: 'build/dist/images/rsz_m2ingredients.jpg' })
                )
            ),
            React.createElement(
                'ul',
                { className: 'nav navbar-top-links navbar-right' },
                React.createElement(
                    'li',
                    { className: 'dropdown' },
                    React.createElement(
                        'a',
                        { className: 'dropdown-toggle', 'data-toggle': 'dropdown', href: '##' },
                        React.createElement('i', { className: 'fa fa-envelope fa-fw' }),
                        '  ',
                        React.createElement('i', { className: 'fa fa-caret-down' })
                    ),
                    React.createElement(
                        'ul',
                        { className: 'dropdown-menu dropdown-messages' },
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'strong',
                                        null,
                                        'John Smith'
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'pull-right text-muted' },
                                        React.createElement(
                                            'em',
                                            null,
                                            'Yesterday'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    null,
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
                                )
                            )
                        ),
                        React.createElement('li', { className: 'divider' }),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'strong',
                                        null,
                                        'John Smith'
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'pull-right text-muted' },
                                        React.createElement(
                                            'em',
                                            null,
                                            'Yesterday'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    null,
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
                                )
                            )
                        ),
                        React.createElement('li', { className: 'divider' }),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'strong',
                                        null,
                                        'John Smith'
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'pull-right text-muted' },
                                        React.createElement(
                                            'em',
                                            null,
                                            'Yesterday'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    null,
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
                                )
                            )
                        ),
                        React.createElement('li', { className: 'divider' }),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { className: 'text-center', href: '##' },
                                React.createElement(
                                    'strong',
                                    null,
                                    'Read All Messages'
                                ),
                                React.createElement('i', { className: 'fa fa-angle-right' })
                            )
                        )
                    )
                ),
                React.createElement(
                    'li',
                    { className: 'dropdown' },
                    React.createElement(
                        'a',
                        { className: 'dropdown-toggle', 'data-toggle': 'dropdown', href: '##' },
                        React.createElement('i', { className: 'fa fa-tasks fa-fw' }),
                        '  ',
                        React.createElement('i', { className: 'fa fa-caret-down' })
                    ),
                    React.createElement(
                        'ul',
                        { className: 'dropdown-menu dropdown-tasks' },
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'p',
                                        null,
                                        React.createElement(
                                            'strong',
                                            null,
                                            'Task 1'
                                        ),
                                        React.createElement(
                                            'span',
                                            { className: 'pull-right text-muted' },
                                            '40% Complete'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'progress progress-striped active' },
                                        React.createElement(
                                            'div',
                                            { className: 'progress-bar progress-bar-success', role: 'progressbar', 'aria-valuenow': '40', 'aria-valuemin': '0', 'aria-valuemax': '100', style: { width: '40%' } },
                                            React.createElement(
                                                'span',
                                                { className: 'sr-only' },
                                                '40% Complete (success)'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement('li', { className: 'divider' }),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'p',
                                        null,
                                        React.createElement(
                                            'strong',
                                            null,
                                            'Task 2'
                                        ),
                                        React.createElement(
                                            'span',
                                            { className: 'pull-right text-muted' },
                                            '20% Complete'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'progress progress-striped active' },
                                        React.createElement(
                                            'div',
                                            { className: 'progress-bar progress-bar-info', role: 'progressbar', 'aria-valuenow': '20', 'aria-valuemin': '0', 'aria-valuemax': '100', style: { width: '20%' } },
                                            React.createElement(
                                                'span',
                                                { className: 'sr-only' },
                                                '20% Complete'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement('li', { className: 'divider' }),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'p',
                                        null,
                                        React.createElement(
                                            'strong',
                                            null,
                                            'Task 3'
                                        ),
                                        React.createElement(
                                            'span',
                                            { className: 'pull-right text-muted' },
                                            '60% Complete'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'progress progress-striped active' },
                                        React.createElement(
                                            'div',
                                            { className: 'progress-bar progress-bar-warning', role: 'progressbar', 'aria-valuenow': '60', 'aria-valuemin': '0', 'aria-valuemax': '100', style: { width: '60%' } },
                                            React.createElement(
                                                'span',
                                                { className: 'sr-only' },
                                                '60% Complete (warning)'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement('li', { className: 'divider' }),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'p',
                                        null,
                                        React.createElement(
                                            'strong',
                                            null,
                                            'Task 4'
                                        ),
                                        React.createElement(
                                            'span',
                                            { className: 'pull-right text-muted' },
                                            '80% Complete'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'progress progress-striped active' },
                                        React.createElement(
                                            'div',
                                            { className: 'progress-bar progress-bar-danger', role: 'progressbar', 'aria-valuenow': '80', 'aria-valuemin': '0', 'aria-valuemax': '100', style: { width: '80%' } },
                                            React.createElement(
                                                'span',
                                                { className: 'sr-only' },
                                                '80% Complete (danger)'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement('li', { className: 'divider' }),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { className: 'text-center', href: '##' },
                                React.createElement(
                                    'strong',
                                    null,
                                    'See All Tasks'
                                ),
                                React.createElement('i', { className: 'fa fa-angle-right' })
                            )
                        )
                    )
                ),
                React.createElement(
                    'li',
                    { className: 'dropdown' },
                    React.createElement(
                        'a',
                        { className: 'dropdown-toggle', 'data-toggle': 'dropdown', href: '##' },
                        React.createElement('i', { className: 'fa fa-bell fa-fw' }),
                        '  ',
                        React.createElement('i', { className: 'fa fa-caret-down' })
                    ),
                    React.createElement(
                        'ul',
                        { className: 'dropdown-menu dropdown-alerts' },
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement('i', { className: 'fa fa-comment fa-fw' }),
                                    ' New Comment',
                                    React.createElement(
                                        'span',
                                        { className: 'pull-right text-muted small' },
                                        '4 minutes ago'
                                    )
                                )
                            )
                        ),
                        React.createElement('li', { className: 'divider' }),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement('i', { className: 'fa fa-twitter fa-fw' }),
                                    ' 3 New Followers',
                                    React.createElement(
                                        'span',
                                        { className: 'pull-right text-muted small' },
                                        '12 minutes ago'
                                    )
                                )
                            )
                        ),
                        React.createElement('li', { className: 'divider' }),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement('i', { className: 'fa fa-envelope fa-fw' }),
                                    ' Message Sent',
                                    React.createElement(
                                        'span',
                                        { className: 'pull-right text-muted small' },
                                        '4 minutes ago'
                                    )
                                )
                            )
                        ),
                        React.createElement('li', { className: 'divider' }),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement('i', { className: 'fa fa-tasks fa-fw' }),
                                    ' New Task',
                                    React.createElement(
                                        'span',
                                        { className: 'pull-right text-muted small' },
                                        '4 minutes ago'
                                    )
                                )
                            )
                        ),
                        React.createElement('li', { className: 'divider' }),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement('i', { className: 'fa fa-upload fa-fw' }),
                                    ' Server Rebooted',
                                    React.createElement(
                                        'span',
                                        { className: 'pull-right text-muted small' },
                                        '4 minutes ago'
                                    )
                                )
                            )
                        ),
                        React.createElement('li', { className: 'divider' }),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { className: 'text-center', href: '##' },
                                React.createElement(
                                    'strong',
                                    null,
                                    'See All Alerts'
                                ),
                                React.createElement('i', { className: 'fa fa-angle-right' })
                            )
                        )
                    )
                ),
                React.createElement(
                    'li',
                    { className: 'dropdown' },
                    React.createElement(
                        'a',
                        { className: 'dropdown-toggle', 'data-toggle': 'dropdown', href: '##' },
                        React.createElement('i', { className: 'fa fa-user fa-fw' }),
                        '  ',
                        React.createElement('i', { className: 'fa fa-caret-down' })
                    ),
                    React.createElement(
                        'ul',
                        { className: 'dropdown-menu dropdown-user' },
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement('i', { className: 'fa fa-user fa-fw' }),
                                ' User Profile'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement('i', { className: 'fa fa-gear fa-fw' }),
                                ' Settings'
                            )
                        ),
                        React.createElement('li', { className: 'divider' }),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#', onClick: this.logout },
                                React.createElement('i', { className: 'fa fa-sign-out fa-fw' }),
                                ' Logout'
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'navbar-default sidebar', role: 'navigation' },
                React.createElement(
                    'div',
                    { className: 'sidebar-nav navbar-collapse' },
                    React.createElement(
                        'ul',
                        { className: 'nav', id: 'side-menu' },
                        React.createElement(
                            'li',
                            { className: 'sidebar-search' },
                            React.createElement(
                                'div',
                                { className: 'input-group custom-search-form' },
                                React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Search...' }),
                                React.createElement(
                                    'span',
                                    { className: 'input-group-btn' },
                                    React.createElement(
                                        'button',
                                        { className: 'btn btn-default', type: 'button' },
                                        React.createElement('i', { className: 'fa fa-search' })
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#', onClick: this.showDashboard },
                                React.createElement('i', { className: 'fa fa-dashboard fa-fw' }),
                                ' Dashboard'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#', onClick: this.showLotBox },
                                React.createElement('i', { className: 'fa fa-bar-chart-o fa-fw' }),
                                ' Lots'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#', onClick: this.showSpecieBox },
                                React.createElement('i', { className: 'fa fa-edit fa-fw' }),
                                ' Species'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#', onClick: this.showScheduleBox },
                                React.createElement('i', { className: 'fa fa-table fa-fw' }),
                                ' Schedule'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement('i', { className: 'fa fa-wrench fa-fw' }),
                                ' Settings',
                                React.createElement('span', { className: 'fa arrow' })
                            ),
                            React.createElement(
                                'ul',
                                { className: 'nav nav-second-level' },
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#panels-wells.html' },
                                        'Panels and Wells'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#buttons.html' },
                                        'Buttons'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#notifications.html' },
                                        'Notifications'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#typography.html' },
                                        'Typography'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#icons.html' },
                                        ' Icons'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#grid.html' },
                                        'Grid'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement('i', { className: 'fa fa-sitemap fa-fw' }),
                                ' Multi-Level Menu',
                                React.createElement('span', { className: 'fa arrow' })
                            ),
                            React.createElement(
                                'ul',
                                { className: 'nav nav-second-level' },
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '##' },
                                        'Second Level Item'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '##' },
                                        'Second Level Item'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '##' },
                                        'Third Level ',
                                        React.createElement('span', { className: 'fa arrow' })
                                    ),
                                    React.createElement(
                                        'ul',
                                        { className: 'nav nav-third-level' },
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '##' },
                                                'Third Level Item'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '##' },
                                                'Third Level Item'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '##' },
                                                'Third Level Item'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '##' },
                                                'Third Level Item'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '##' },
                                React.createElement('i', { className: 'fa fa-files-o fa-fw' }),
                                ' Admin',
                                React.createElement('span', { className: 'fa arrow' })
                            ),
                            React.createElement(
                                'ul',
                                { className: 'nav nav-second-level' },
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#blank.html' },
                                        'Users'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#login.html' },
                                        'Permissions'
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