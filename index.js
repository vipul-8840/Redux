import { applyMiddleware, createStore }from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import {  thunk } from 'redux-thunk';;

const increment= 'increment';
const decrement = 'decrement';
const incrementByvipul = 'incrementByvipul'
const init = 'init';
const store = createStore(reducer,applyMiddleware(logger.default,thunk));

function reducer (state ={amount:1},action)
{
    // if(action.type==='increment')
    // {
    //     return {amount:state.amount+1};
    // }
      switch(action.type)
      {
        case increment:
                        return {amount:state.amount+1};
                       
        case decrement:
                        return {amount:state.amount-1};
                   
        case incrementByvipul:
                        return {amount:state.amount+ action.payload};
                      

        case init :
                        return {amount:action.payload}
                       
        default :
                   return state;
                   

      }    
        
}

// API CALL
 async function getUser(dispatch,getState)
 {
    const {data} = await axios.get("http://localhost:3000/accounts/1")
    dispatch(initUser(data.amount))
 }
//  getUser();
// setInterval(()=>{
//     store.dispatch({type:'increment'});
// },3000)
  function initUser(value)
  {
      return {type:init,payload:value};
  }
setTimeout(() => {
  store.dispatch(getUser);
}, 3000);
    

