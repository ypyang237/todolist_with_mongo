'use strict';

import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({



  render: function(){
    return (
      <div className="header">
        <h1>To-Do List</h1>
        <Link to='/'>Display All Tasks</Link>
        <br/>
        <Link to='/add'>Add a Task</Link>
        <br/>
        <Link to='/signup'>Sign Up</Link>
        <br/>
        <Link to='/signin'>Log In</Link>
        <br/>
        <Link to='/counter'>THIS IS THE COUNTER</Link>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Header;