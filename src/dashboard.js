import React, { Component } from 'react';
import './dash.css';
import Nav from './navbar';
import Slide from './carousel';
class Dash extends Component {
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
			<React.Fragment>
				<Nav OnNav={this.nav} />
				{/* <Slide /> */}
				<div className="totalcont">
					<div className="columnRight">
						<div className="cont1 cont1a">
							<div className="conttext">
								<h1>cont text</h1>
							</div>
							<div className="contimg">
								<h1>cont img</h1>
							</div>
						</div>

						<div className="cont1 cont2a">
							<div className="contimg">
								<h1>cont img</h1>
							</div>
							<div className="conttext">
								<h1>cont text</h1>
							</div>
						</div>

						<div className="cont1 cont1a">
							<div className="conttext">
								<h1>cont text</h1>
							</div>
							<div className="contimg">
								<h1>cont img</h1>
							</div>
						</div>

						<div className="cont1 cont2a">
							<div className="contimg">
								<h1>cont img</h1>
							</div>
							<div className="conttext">
								<h1>cont text</h1>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Dash;
