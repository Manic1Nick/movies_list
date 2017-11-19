import React from 'react';
import classNames from 'classnames';

import './FilmPreview.less';

const FilmPreview = React.createClass({
	render() {
		const { title, year, selected, onClick } = this.props;

		const classes = classNames('FilmPreview', { selected });

		return (
			<div className={classes} onClick={onClick} >
				<div className='title'>
					{title}
				</div>
				<div className='year'>
					{year}
				</div>
			</div>
		);
	}
});

export default FilmPreview;