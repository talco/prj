import React, { Component } from 'react';
import {orderBy} from 'lodash';
import Reports from './Report/Reports';
import items from './Report/reports.json';

class App extends Component {
  //get list of items for report sidebar
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
    if(!this.state.isVisible) {
      return (
        <a onClick={this.handleOpen}>Open widget</a>
      )
    }
    return (
      <div className="App">
        <Reports handleClose={this.handleClose} isVisible={this.state.isVisible} items={this.orderedList} />
      </div>
    );
  }
}

export default App;
