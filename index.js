import { applyMiddleware, combineReducers, createStore }from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import {  thunk } from 'redux-thunk';;

const increment= 'increment';
const decrement = 'decrement';
const incrementByAmount= 'incrementByAmount'
const init = 'init';
const incBonous = 'bonous/incBonous '
const store = createStore(combineReducers({
  account:accountReducer,
  bonous:bonousReducer
}),applyMiddleware(logger.default,thunk));
//Multiple Reducer

function accountReducer (state ={amount:1},action)
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
                   
        case incrementByAmount:
                        return {amount:state.amount+ action.payload};
                      

        case init :
                        return {amount:action.payload}
                       
        default :
                   return state;
                   

      }    
        
}

function bonousReducer(state ={points:0},action )
{
  switch(action.type)
  {
    case incBonous :
                    return {points:state.points + 1};
    case incrementByAmount :
              if(action.payload>100)
              return {points:state.points+1};
      default:
              return state;
  }
}

// API CALL
 function getUser(id)
 {
     return async(dispatch,getState)=>{
      const {data} = await axios.get(`http://localhost:3000/accounts/${id}`)
       dispatch(initUser(data.amount))
     }
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
  store.dispatch({type:incBonous ,payload:100});
}, 3000);
    

