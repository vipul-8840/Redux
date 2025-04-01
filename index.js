
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

import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
const store = createStore(reducer,applyMiddleware(logger.default));
function reducer(state={amount:1},action)
{
    if(action.type=='increment' )
    {
        return {amount:state.amount+1};
    }
    if(action.type=='incrementByAmount' )
    {
        return {amount:state.amount+action.payload};
    }
    if(action.type=='decrement' )
    {
        return {amount:state.amount-1};
    }
    return state

}
setInterval(()=>{
    store.dispatch({type:'incrementByAmount',payload:4})
},2000)