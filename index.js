import { applyMiddleware, createStore }from 'redux';
import logger from 'redux-logger';



const increment= 'increment';
const decrement = 'decrement';
const incrementByvipul = 'incrementByvipul'
const store = createStore(reducer,applyMiddleware(logger.default));

function reducer (state ={amount:1},action)
{
    // if(action.type==='increment')
    // {
    //     return {amount:state.amount+1};
    // }

    if(action.type===incrementByvipul)
    {
        return {amount:state.amount+ action.payload};
    }
        return state;
}


// setInterval(()=>{
//     store.dispatch({type:'increment'});
// },3000)

setInterval(()=>{
    store.dispatch({type:incrementByvipul,payload:4});
},3000)
