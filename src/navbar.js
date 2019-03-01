import React, { Component } from 'react';
import './navbar.css';
import logo from './image/logo.png';

class Nav extends Component {
	state = {};

	render() {
		return (
			<div>
				<header>
					<nav class="fill">
						<ul>
							<img className="img" src={logo} alt="logo" />
							<li>
								<button name="feed" onClick={(name) => this.props.OnNav(name)}>
									Feed
								</button>
							</li>
							<li>
								<button name="college" onClick={(name) => this.props.OnNav(name)}>
									My college
								</button>
							</li>
							<li>
								<button name="movies" onClick={(name) => this.props.OnNav(name)}>
									My Movies
								</button>
							</li>
							<li>
								<button name="games" onClick={(name) => this.props.OnNav(name)}>
									My Games
								</button>
							</li>
						</ul>
					</nav>
				</header>
			</div>
		);
	}
}

export default Nav;
