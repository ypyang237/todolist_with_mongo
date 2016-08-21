import React from 'react';
import { browserHistory } from 'react-router';

const Filter = require('./filter');

const GetAll = React.createClass({
  getInitialState : function(){
    return {
      tasks : [],
      view  : 'All'
    }
  },

  componentWillMount : function(){
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

  handleToggle : function(id){
    var that = this;
    var status;

    var newState = this.state.tasks.map(function(element){

      if(element.id === id){
        if(element.done === true){
          element.done = false;
          status = false;
        } else {
          element.done = true;
          status = true;
        }
      }

      return {
        id : element.id,
        name : element.name,
        completed_at : element.completed_at,
        done : element.done
      }
    })

    console.log(newState)

    this.setState({
      tasks : newState
    })

    var xmlReq = new XMLHttpRequest();

    xmlReq.addEventListener('load', function(){
      console.log(this)
    })

    xmlReq.open('PUT', '/api/toggle');
    xmlReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlReq.send(JSON.stringify({
      id : id,
      done: status
    }))
  },

  setView : function(view){
    this.setState({
      view : view
    })
  },

  render : function() {
    var that = this;

    var tasksToShow = this.state.tasks;

    if(this.state.tasks.length > 0){
      tasksToShow = this.state.tasks.filter(function(element){
        if(that.state.view === 'Uncompleted'){
          if(element.done === true){
            return false;
          }
          else {
            return true;
          }
        }
        if(that.state.view === 'Completed'){
          if(element.done === false){
            return false;
          }
          else {
            return true;
          }
        }
        else {
          return true;
        }
      });
    }

    var tasks = tasksToShow.map(function(element){
      return (
        <div key={element.id}>
          <p>{element.name}</p>
          <p>{element.completed_at}</p>
          <input
          type="checkbox"
          name="done"
          value={element.done}
          checked={element.done === true}
          onChange={that.handleToggle.bind(that, element.id)}
          />
          <button onClick={that.handleEdit.bind(that, element.id)}>Edit</button>
          <button onClick={that.handleDelete.bind(that, element.id)}>Delete</button>

        </div>
      )
    })


    return (
      <div className="getall">
        <Filter setView={this.setView}/>
        <h1>All Tasks</h1>
        {tasks}
      </div>
    )
  }

})


module.exports = GetAll;