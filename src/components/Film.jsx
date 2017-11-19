import React from 'react';
import classNames from 'classnames';

import films from '../films.json';

import './Film.less';

const Film = React.createClass({
    contextTypes: {
        listIsOpen: React.PropTypes.bool
    },

	render() {
        const { filmId: selectedFilmId } = this.props.params;
		let film = films.find(film => film.id === +selectedFilmId);

        let open = this.context.listIsOpen;
        const filmClass = classNames('FilmPreview', { open });
		return (
            <div className={filmClass}>
                {
                    film ? 
                        <div className="filmText">
                            <p>{film.title}</p>
                            <p>{film.year}</p>
                            <p><img src={film.poster} className="poster" /></p>
                            <p>{film.director}</p>
                            <p>{film.stars}</p>
                            <p>{film.description}</p>
                        </div>      
                    : <div /> 
                }             
            </div>
		);
	}
});

export default Film;