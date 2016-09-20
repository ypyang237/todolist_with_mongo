'use strict';

import React from 'react';
import { connect } from 'react-redux';

var Counter = React.createClass({

  handleIncrement : function() {
    this.props.increment();
  },

  handleDecrement : function() {
    this.props.decrement();
  },

  render: function(){
    return (
      <div className="counter">
        <h1>COUNTER</h1>

        <p>Counter: {this.props.counter}</p>

        <button onClick={this.handleIncrement}>Increment Me</button>
        <button onClick={this.handleDecrement}>Decrement Me</button>
      </div>
    )
  }
});

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch ) => {
  return {
    increment : () => {
      dispatch ({
        type: 'INCREMENT'
      })
    },
    decrement : () => {
      dispatch ({
        type: 'DECREMENT'
      })
    }
  }
}


Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);


module.exports = Counter;