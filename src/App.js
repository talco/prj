import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Reports from './Report/Reports';

class App extends Component {
  state = {
    isVisible: true
  };

  handleOpen = () => {
    this.setState({isVisible: true})
  }

  handleClose = () => {
    this.setState({isVisible: false})
  }

  render() {
    return (
      <div className="App">
    
        <a onClick={this.handleOpen}>Open widget</a>
        <Reports handleClose={this.handleClose} isVisible={this.state.isVisible} />
        
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
