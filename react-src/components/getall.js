import React from 'react';

const GetAll = React.createClass({
  getInitialState : function(){
    return {
      tasks : []
    }
  },

  componentDidMount : function(){
    var that = this;

    var getReq = new XMLHttpRequest();
    getReq.addEventListener("load", function(){

      console.log(this.response);
      that.setState({
        tasks : JSON.parse(this.response).tasks
      })
    });

    getReq.open('GET', '/api');
    getReq.send();

  },

  render: function() {
    var that = this;

    var tasks = this.state.tasks.map(function(element){
      return (
        <div key={element.id}>
          <p>{element.id}</p>
          <p>{element.name}</p>
        </div>
      )
    })


    return (
      <div className="getall">
        <h1>All Tasks</h1>
        {tasks}
      </div>
    )
  }

})


module.exports = GetAll;