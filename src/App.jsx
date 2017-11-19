import React from 'react';
import Header from './components/Header.jsx';

require('./App.less');

const App = React.createClass({
	contextTypes: {
        listIsOpen: React.PropTypes.bool
    },

	getInitialState() { 
	  	return { 
	  		sidebarOpen: false
	  	};
	},

	handleViewSidebar() {
		this.context.listIsOpen = `${!this.context.listIsOpen}`;
	},

	render() {
		return (
			<div className='app'>
				<Header onClick={this.handleViewSidebar} />

		        <div className='content'>
					{this.props.children}
				</div>
			</div>
		);
	}
});

export default App;