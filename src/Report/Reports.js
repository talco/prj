import React, { Component } from 'react';
import {orderBy} from 'lodash';

import Item from './Item';
import items from './reports.json';
import './reports.css';

class Reports extends React.Component {
  
  // set default state
  state = {
    q: "",    
    items: []
  };
  
  componentDidMount () {
    this.setState({items: orderBy(items, "updated", "desc")})
  }

  handleRefreash = (event) => {
    this.setState({q: ""})
  }

  handleSearch = (event) => {
    this.setState({q: event.target.value});
  }

  getFilterdList () {
    const {q, items} = this.state; 

    return items.filter(item => 
      !q || item.name.toLowerCase().includes(q.toLowerCase()));
  }
  
  render() {
    const {q, items} = this.state;
    const {isVisible} = this.props;
    const filteredList = this.getFilterdList();

    if (!isVisible) {
      return (<div></div>)
    }

    return (      
      <div className="reports-widget">        
        <div class="reports-widget-header">
          <h1>Reports {filteredList.length}</h1>        
          <i className="refresh" onClick={this.handleRefreash}>refresh</i>
          <i className="close" onClick={this.props.handleClose}>close</i>
        </div>
        <div className="reports-widget-search">
          <input value={this.state.q} type="text" placeholder="search reports" onChange={this.handleSearch} />
        </div>

        <div className="reports-widget-list">
          <div className="reports-widget-list-items">
            {filteredList.map(item =>
              <Item className="reports-widget-list-item" {...item}></Item>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Reports;