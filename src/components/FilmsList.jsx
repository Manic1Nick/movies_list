import React from 'react';
import classNames from 'classnames';

import FilmPreview from './FilmPreview.jsx';

import films from '../films.json';

import './FilmsList.less';

const FilmsList = React.createClass({
	contextTypes: {
        router: React.PropTypes.object.isRequired,
        listIsOpen: React.PropTypes.bool
    },

	handlePreviewClick(filmId) {
        this.context.router.push(`/films/${filmId}`);
    },

	render() {
		let open = this.context.listIsOpen;
		const sidebarClass = classNames('FilmPreview', { open });
		const { filmId: selectedFilmId } = this.props.params;
		return (
			<div className={sidebarClass}>	
				<div className='films'>
					{
						films.map(film => 
							<FilmPreview 
								key={film.id}
								title={film.title}
								year={film.year}
								selected={film.id === selectedFilmId}
								onClick={this.handlePreviewClick.bind(null, film.id)}
							/>
						)
					}
				</div>
			</div>
		);
	}
});

export default FilmsList;