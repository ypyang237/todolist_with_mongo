import React from 'react';

const Signin = React.createClass({
  getInitialState : function() {
    return {
      username : '',
      password : ''
    };
  },

  handleChange : function(field, event){
    var nextState = {};
    nextState[field] = event.target.value;
    this.setState(nextState);
  },

  handleSubmit : function(){
    var newReq = new XMLHttpRequest();
    newReq.addEventListener('load', function(){
      console.log('signIn', this);
    })

    newReq.open('POST', '/api/signin');
    newReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    newReq.send(JSON.stringify({
      username : this.state.username,
      password : this.state.password
    }))
  },


  render : function(){

    return (

      <div>
      <h2>Sign In</h2>
      <p>Username</p>
      <input
      type="text"
      value={this.state.username}
      onChange={this.handleChange.bind(this, "username")}
      />
      <p>Password</p>
      <input
      type="password"
      value={this.state.password}
      onChange={this.handleChange.bind(this, "password")}
      />
      <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }


});


module.exports = Signin;