import React, { Component } from 'react';
import './mainNote.css';

class Note extends Component {
	state = {};
	render() {
		return (
			<div className="container">
				<p className="header">Hello viewers, MySelf Vj.</p>
				<p className="second">
					Welcome to the gameland About input box just pick a password from me and enter it. In this section
					you just know about me. this website contain some intresting news about me and also some more games
					and movies reviews. Ok Buddies lets get In!!!!!!
				</p>
			</div>
		);
	}
}

export default Note;
