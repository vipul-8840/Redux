
// import {createStore} from 'redux'

//console.log("hello world")
//global store
// const store = createStore(reducer);
//reducer
// function reducer(state={amount:1},action)
// {
//     return state 
// }

// console.log(store.getState())

import {createStore} from 'redux'
const store = createStore(reducer);
function reducer(state={amount:1},action){
    if(action.type=='increment')
    {
        return {amount:state.amount+1};
    }
      return state;
}
console.log(store.getState());
store.dispatch({type:'increment'});
console.log(store.getState());