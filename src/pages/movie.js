import React, { Component } from 'react';
import Nav from '../navbar';

class movie extends Component {
	state = {};
	nav = (event) => {
		if (event.target.name == 'feed') {
			this.props.history.push('/dashboard');
		} else if (event.target.name == 'college') {
			this.props.history.push('/college');
		} else if (event.target.name == 'movies') {
			this.props.history.push('/movie');
		} else if (event.target.name == 'games') {
			this.props.history.push('/games');
		}
	};
	render() {
		return (
			<div>
				<Nav OnNav={this.nav} />
				<h2>movies</h2>
			</div>
		);
	}
}

export default movie;
