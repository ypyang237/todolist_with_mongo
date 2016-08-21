import React from 'react';
import { browserHistory } from 'react-router';

const GetAll = React.createClass({
  getInitialState : function(){
    return {
      tasks : [],
    }
  },

  componentDidMount : function(){
    var that = this;

    var getReq = new XMLHttpRequest();
    getReq.addEventListener("load", function(){

      that.setState({
        tasks : JSON.parse(this.response).tasks
      })
    });

    getReq.open('GET', '/api');
    getReq.send();

  },


  handleEdit : function(id){
    browserHistory.push('/edit/' + id)
  },

  handleDelete : function(id){
    var that = this;

    var xmlReq = new XMLHttpRequest();
    xmlReq.addEventListener('load', function(){
      // that.componentDidMount();
      console.log(that.state.tasks)

      var newState = that.state.tasks.filter(function(element){
        if(element.id === id){
          return false
        }
        else{
          return true
        }
      })
      console.log('new',newState)

      that.setState({
        tasks : newState
      })
    })

    xmlReq.open('DELETE', '/api');
    xmlReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlReq.send(JSON.stringify({
      id : id
    }));
  },

  render: function() {
    var that = this;

    var tasks = this.state.tasks.map(function(element){
      return (
        <div key={element.id}>
          <p>{element.name}</p>
          <p>{element.completed_at}</p>
          <button onClick={that.handleEdit.bind(that, element.id)}>Edit</button>
          <button onClick={that.handleDelete.bind(that, element.id)}>Delete</button>

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