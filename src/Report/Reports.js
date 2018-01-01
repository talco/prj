import React, {Component} from 'react';

import Header from './Header';
import List from './List';
import Search from './Search';
import './reports.css';

class Reports extends Component {

  // set default state
  state = {
    query: "",    
    filteredItems: this.props.items
  };
  
  handleRefresh = (event) => {
    this.setState({
      query: "", 
      filteredItems: this.getFilterdList("")
    });
  }

  handleSearch = (event) => {    
    this.setState({
      query: event.target.value, 
      filteredItems: this.getFilterdList(event.target.value)
    });
  }

  getFilterdList (query) {
    const {items} = this.props; 
    
    if (!query) {
      return items;
    }
    
    return items.filter(item => 
      item.name.toLowerCase().includes(
        query.toLowerCase()
      )
    );
  }
  
  render() {
    const {query, filteredItems} = this.state;
    const {isVisible, handleClose} = this.props;    

    if (!isVisible) {
      return null;
    }
    
    return (
      <div className="reports-sidebar">
        <Header handleRefresh={this.handleRefresh} handleClose={handleClose}  numberOfItems={filteredItems.length} />
        <Search handleSearch={this.handleSearch} query={query} />
        <List items={filteredItems} />
      </div>
    );
  }
}

export default Reports;