
import {createStore} from 'redux'

console.log("hello world")
//global store
const store = createStore(reducer);
//reducer
function reducer(state={amount:1},action)
{
    return state 
}

console.log(store.getState())