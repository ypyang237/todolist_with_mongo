'use strict';

import React from 'react';
import { Link } from 'react-router';

const Header = react.createClass({
  render: function() {
    return (
      <div className="header">
        <h1>To-Do List</h1>

        {this.props.children}
      </div>
    )
  }

});

module.exports = Header;