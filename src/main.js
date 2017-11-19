import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import App from './App.jsx';
import FilmsList from './components/FilmsList.jsx';
import Film from './components/Film.jsx';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/films" component={FilmsList} />
			<Route path="/films/:filmId" component={Film} />
		</Route>
	</Router>,
	document.getElementById('mount-point')
);