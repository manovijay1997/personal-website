import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dash from './dashboard';
import App from './App';

import Movie from './pages/movie';
import Games from './pages/game';
import College from './pages/college';

class Routes extends Component {
	state = {};
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/dashboard" component={Dash} exact />
						<Route path="/" component={App} exact />
						<Route path="/movie" component={Movie} exact />
						<Route path="/games" component={Games} exact />
						<Route path="/college" component={College} exact />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default Routes;
