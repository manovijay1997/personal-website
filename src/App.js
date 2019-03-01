import React, { Component } from 'react';
import './App.css';
import Note from './mainNote';
import { Icon } from 'semantic-ui-react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};
	}
	check = (event) => {
		console.log('name ', event.target.value);
		this.setState({
			name: event.target.value
		});
		if (event.target.value == 'vijay') {
			console.log('s true');
			this.props.history.push('/dashboard');
		}
	};
	move = () => {
		console.log('name ');
		if (this.state.name == 'vijay') {
			this.props.history.push('/dashboard');
		}
	};
	render() {
		return (
			<div className="body">
				<div className="App">
					<h1>
						<span>V</span>
						<span>J</span>
						<span>_</span>
						<span>G</span>
						<span>a</span>
						<span>m</span>
						<span>e</span>
						<span>l</span>
						<span>a</span>
						<span>n</span>
						<span>d</span>
					</h1>
					<br />
					<br />
					<Icon name="angle double right" fitted color="white" />
					<input
						type="text"
						className="input"
						onChange={(event) => this.check(event)}
						onDurationChange={this.move}
						Icon="angle double right"
					/>
				</div>
				<Note />
			</div>
		);
	}
}

export default App;
