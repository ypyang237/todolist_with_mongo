'use strict';

import React from 'react';
import { connect } from 'react-redux';

var ReduxList = React.createClass({

  getInitialState: function() {
      return {
        value : ''
      };
  },

  handleSubmit: function(){
    this.props.addItem(this.state.value);
  },

  handleInput : function(event) {
    this.setState({
      value : event.target.value
    })
  },


  render: function(){

    var Listing = this.props.reduxlist.map(function(element){
      return <p key={element}>{element}</p>
    })

    return (
      <div className="reduxlist">
        <h1>Redux List</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInput}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        {Listing}

      </div>
    )
  }
});


const mapStateToProps = (state) => {
  return {
    reduxlist : state.List
  }
}

const mapDispatchToProps = (dispatch ) => {
  return {
    addItem : (item) => {
      dispatch({
        type: 'ADD_ITEM',
        thing: item
      })
    }
  }
}


ReduxList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxList)

module.exports = ReduxList;