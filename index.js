
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

// import {createStore} from 'redux'
// const store = createStore(reducer);
// function reducer(state={amount:1},action){
//     if(action.type=='increment')
//     {
//         return {amount:state.amount+1};
//     }
//       return state;
// }
// console.log(store.getState());
// store.dispatch({type:'increment'});
// console.log(store.getState());

// import {createStore} from 'redux';
// const store = createStore(reducer);
// const history=[]
// function reducer(state={amount:1},action)
// {
//     if(action.type=='increment')
//     {
//         // wrong way doing this 
//         state.amount=state.amount+1;
//     }
//     return state;
// }

// store.subscribe(()=>{
//     history.push(store.getState());
//    console.log(history)
// })

// setInterval(()=>{
    
//     store.dispatch({type:'increment'})
 

// },2000)

// import {createStore} from 'redux'
// const store = createStore(reducer);
// const history=[]
// function reducer(state={amount:1},action)
// {
//     if(action.type=='increment')
//         return {amount:state.amount+1};
//     return state;
// }

// store.subscribe(()=>{
//     history.push(store.getState());
//     console.log(history)
// })
// setInterval(()=>{
//     store.dispatch({type:'increment'});
// },2000)

// import {createStore,applyMiddleware} from 'redux';
// import logger from 'redux-logger'
// const store = createStore(reducer,applyMiddleware(logger.default));
// function reducer(state={amount:1},action)
// {
//     if(action.type=='increment')
//     {
//         return {amount:state.amount+1}
//     }
//     return state;
// }
// setInterval(()=>{
//    store.dispatch({type:'increment'})
// },5000)

// adding payload

// import {createStore,applyMiddleware} from 'redux';
// import logger from 'redux-logger';
// const store = createStore(reducer,applyMiddleware(logger.default));
// function reducer(state={amount:1},action)
// {
//     if(action.type=='increment' )
//     {
//         return {amount:state.amount+1};
//     }
//     if(action.type=='incrementByAmount' )
//     {
//         return {amount:state.amount+action.payload};
//     }
//     if(action.type=='decrement' )
//     {
//         return {amount:state.amount-1};
//     }
//     return state

// }
// setInterval(()=>{
//     store.dispatch({type:'incrementByAmount',payload:4})
// },2000)

// import {createStore,applyMiddleware} from 'redux'
// import logger from 'redux-logger'

// const increment='increment';
// const init ='init'
// const decrement ='decrement';
// const incrementByAmount = 'incrementByAmount'

// const store = createStore(reducer,applyMiddleware(logger.default))

// function reducer(state={amount:1},action)
// {
//     if(action.type==increment)
//     {
//          return {amount:state.amount+1};
//     }
//     if(action.type==decrement)
//     {
//         return {amount:state.amount-1};
//     }
//     if(action.type==incrementByAmount){
//         return {amount:state.amount + action.payload}
//     }
//     return state;
// }

// function Increment()
// {
//     return {type:increment};
// }
// function Decrement()
// {
//     return {type:decrement};
// }
// function IncrementByAmount(value)
// {
//     return {type:incrementByAmount,payload:value};
// }
// function initA()
// {
//     return 
// }
// setInterval(()=>{
//      store.dispatch(IncrementByAmount(5));
// },2000)

// import {createStore,applyMiddleware} from 'redux';
// import logger from 'redux-logger';
// import axios from 'axios';
// import {thunk }from 'redux-thunk'

// const init ='init';
// const increment = 'increment';
// const decrement ='decrement';
// const incrementByAmount ='incrementByAmount'
// const store = createStore(reducer,applyMiddleware(logger.default,thunk));
// async function getUser()
// {
//     const {data} = await axios.get('http://localhost:3000/accounts/2');
//     console.log(data);
// }
// getUser()
// function reducer(state={amount:1},action)
// {
//     switch(action.type)
//     {
//         case init :
//             return {amount:action.payload};
//         case increment :
//         return {amount:state.amount+1};
//         case decrement :
//         return {amount:state.amount-1};
//         case incrementByAmount :
//         return {amount:state.amount+ action.payload};
//         default:
//             return state
//     }
// }

// function Increment()
// {
//     return {type:increment};
// }
// function Decrement()
// {
//     return {type:decrement};
// }
// function incByAmt(value)
// {
//     return {type:incrementByAmount,payload:value}
// }
// async function getUser(dispatch,getState)
// {
//     const {data} = await axios.get('http://localhost:3000/accounts/2');
//     dispatch(initUser(data.amount))
// }
// function initUser(value)
// {
//     return {type:init,payload:value}
// }
// setInterval(()=>{
//    store.dispatch(initUser);
// },3000)
// setTimeout(()=>{
//     store.dispatch(getUser);
// },2000);

// import {applyMiddleware, createStore} from "redux";
// import logger from 'redux-logger';
// import {thunk} from 'redux-thunk';
// import axios from "axios";

// const init = 'init';
// const increment = 'increment';
// const decrement ='decrement';
// const incByAmt = 'incrementByAmount'
// const store = createStore(reducer,applyMiddleware(logger.default,thunk));
// function reducer(state={amount:1},action)
// {
//     switch(action.type)
//     {
//         case init :
//             return {amount:action.payload};
//         case increment :
//         return {amount:state.amount+1};
//         case decrement :
//         return {amount:state.amount-1};
//         case incByAmt :
//         return {amount:state.amount+ action.payload};
//         default:
//             return state
//     }
// }

// function Increment()
// {
//      return {type:increment};
// }
// function Decrement()
// {
//      return {type:decrement};
// }
// function IncrementByAmount(value)
// {
//     return {type:incByAmt,payload:value}
// }
// function getUser(id)
// {
//     return async function (dispatch,getState)
//     {
//         const {data}= await axios.get(`http://localhost:3000/accounts/${id}`);
//         dispatch(initUser(data.amount))
//     }
// }
// function initUser(value)
// {
//     return {type:init,payload:value};
// }
// setTimeout(()=>{
//     store.dispatch(getUser(1));
// },2000)
// setInterval(() => {
//      store.dispatch(Increment())
// }, 2000);

//Multiple Reducer 
import {applyMiddleware, createStore,combineReducers} from "redux";
import logger from 'redux-logger';
import {thunk} from 'redux-thunk';
import axios from "axios";

const init = 'init';
const increment = 'increment';
const decrement ='decrement';
const incByAmt = 'incrementByAmount'
const incBonus = 'bonus/increments'
const store = createStore(combineReducers({
    account:accountReducer,
    bonus:bonusReducer
}),applyMiddleware(logger.default,thunk));
function accountReducer(state={amount:1},action)
{
    switch(action.type)
    {
        case init :
            return {amount:action.payload};
        case increment :
        return {amount:state.amount+1};
        case decrement :
        return {amount:state.amount-1};
        case incByAmt :
        return {amount:state.amount+ action.payload};
        default:
            return state
    }
}
function bonusReducer(state={points:0},action)
{
     switch(action.type)
     {
        case incBonus :
            return {points:state.points+1};
        case incByAmt :
            return {points:state.points + action.payload};
        default :
           return state;
     }
}
function Increment()
{
     return {type:increment};
}
function Decrement()
{
     return {type:decrement};
}
function IncrementByAmount(value)
{
    return {type:incByAmt,payload:value}
}
function getUser(id)
{
    return async function (dispatch,getState)
    {
        const {data}= await axios.get(`http://localhost:3000/accounts/${id}`);
        dispatch(initUser(data.amount))
    }
}
function initUser(value)
{
    return {type:init,payload:value};
}
// setTimeout(()=>{
//     store.dispatch(getUser(1));
// },2000)
// setInterval(()=>{
//     store.dispatch({type:increment})
// },5000)
function incrementBonus()
{
    return {type:incBonus}
}
setTimeout(()=>{
    store.dispatch(incrementBonus());
},2000)