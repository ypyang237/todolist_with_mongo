'use strict';

const List = (

  state = ['first item'],
  action
) => {

  switch(action.type) {
    case 'ADD_ITEM' :
      return state.concat(action.thing);

    default :
      return state;
  }
};


module.exports = List;