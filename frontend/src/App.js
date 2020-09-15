import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    message: '',
    error: '',
  };

  componentDidMount() {
    fetch('http://localhost:8000/')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({ message: res.message });
      })
      .catch((err) => {
        this.setState({ error: 'Something went wrong' });
      });
  }

  render() {
    const { message, error } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>{message || null}</p>
          {error ? (
            <div className="alert alert-primary" role="alert">
              {error}
            </div>
          ) : null}
        </header>
      </div>
    );
  }
}

export default App;
