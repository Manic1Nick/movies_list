import React from 'react';
import { Link } from 'react-router';

require('./Header.less');

const Header = React.createClass({
  	render() {
    	return (
      		<div className="header">
      			<Link className='header-item-link' to="/films" onClick={this.props.onClick}>Films</Link>
    		</div>
    	);
  	}
});

export default Header;