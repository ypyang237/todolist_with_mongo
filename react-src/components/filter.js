'use strict';

import React from 'react';

const Filter = React.createClass({

  getInitialState : function() {
    return {
      status : "All"
    };
  },

  handleChange : function(event){
    this.props.setView(event.target.value);
    this.setState({
      status : event.target.value
    })
  },

  render : function(){

    return (
      <select value={this.state.status} onChange={this.handleChange}>
          <option value='Uncompleted'>Show Uncompleted Tasks</option>
          <option value="Completed">Show Completed Tasks</option>
          <option value="All">Show All Tasks</option>
        </select>
    )
  }
});

module.exports = Filter;