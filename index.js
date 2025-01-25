import { applyMiddleware, createStore }from 'redux';
import logger from 'redux-logger';

const store = createStore(reducer,applyMiddleware(logger.default));

function reducer (state ={amount:1},action)
{
    if(action.type==='increment')
    {
        return {amount:state.amount+1};
    }
        return state;
}


setInterval(()=>{
    store.dispatch({type:'increment'});
},3000)
