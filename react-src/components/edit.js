import React from 'react';

const Edit = React.createClass({
  getInitialState : function(){
      return {
        id   : this.props.params.id,
        name : '',
        completed_at : ''
      };
  },

  componentDidMount : function(){
    var that = this;

    var getReq = new XMLHttpRequest();

    getReq.addEventListener('load', function(){

      var name         = JSON.parse(this.response).task.name;
      var completed_at = JSON.parse(this.response).task.completed_at;

      that.setState({
        name : name,
        completed_at : completed_at
      })

    })



    getReq.open('GET', '/api/id/' + this.state.id)

  },

  handleChange : function(field, event){
    var nextState = {};
    nextState[field] = event.target.value
    this.setState(nextState);
  },

  handleSubmit : function(){
    var newReq = new XMLHttpRequest();

    newReq.addEventListener('load', function(){
      console.log(this);

    })

    newReq.open('PUT', '/api')
    newReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    newReq.send(JSON.stringify({
      id           : this.state.id,
      name         : this.state.name,
      completed_at : this.state.completed_at
    }))
  },

  render : function(){

    return (
      <div>
        <h2>EDIT ME</h2>
        <br/>
        <p>Name :</p>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange.bind(this, 'name')}
        />
        <br/>
        <p>Completed At :</p>
        <input
          type="text"
          value={this.state.completed_at}
          onChange={this.handleChange.bind(this, 'completed_at')}
        />
        <br/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }

});

module.exports = Edit;