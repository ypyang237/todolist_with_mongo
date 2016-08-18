'use strict';

import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({



  render: function(){
    return (
      <div className="header">
        <h1>To-Do List</h1>
        <Link to='/'>Display All Tasks</Link>
        <Link to='/add'>Add a Task</Link>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Header;