import React, { Component } from 'react';
import {orderBy} from 'lodash';
import Reports from './Report/Reports';
import items from './Report/reports.json';

class App extends Component {
  orderedList = orderBy(items, "updated", "desc");

  // set default state
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
        <Reports handleClose={this.handleClose} isVisible={this.state.isVisible} items={this.orderedList} />
      </div>
    );
  }
}

export default App;
