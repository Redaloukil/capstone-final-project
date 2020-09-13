import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    message:'',
    error:'',
  }
	componentDidMount() {
		fetch('localhost:8000/').then((res) => { 
      this.setState({message:res});
    }).catch((err) => {
      this.setState({error:err});
    });
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>Reda doing some Javascript</p>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
