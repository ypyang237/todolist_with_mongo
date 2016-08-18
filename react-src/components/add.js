import React from 'react';

const Add = React.createClass({
  getInitialState: function() {
      return {
        name : '',
        completed_at : ''
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
      console.log(this);
    })

    newReq.open('POST', '/api');
    newReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    newReq.send(JSON.stringify({
      name : this.state.name,
      compeleted_at : this.state.completed_at
    }))
  },


  render : function(){

    return (
      <div className="add">
        <h1>Add something to do!</h1>
        <br/>
        <p>Task Title :</p>
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
          onChange={this.handleChange.bind(this, "completed_at")}
        />
        <br/>
        <br/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>

    )
  }

});

module.exports = Add;