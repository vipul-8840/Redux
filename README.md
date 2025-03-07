# Redux Project

This project demonstrates the use of Redux for state management in a JavaScript application.

## File Descriptions

- `index.js`: Contains the Redux store setup, action creators, and reducer functions.
- `db.json`: Contains mock data for the API.

## Setup Instructions

To set up and run the project, follow these steps:

1. Install the necessary dependencies:
    ```sh
    npm install redux redux-logger redux-thunk axios
    ```

2. Start a JSON server to serve the mock data:
    ```sh
    npx json-server --watch db.json --port 3000
    ```

3. Run the JavaScript file:
    ```sh
    node index.js
    ```

## Function Descriptions

### Action Types

- `increment`: Increments the amount by 1.
- `decrement`: Decrements the amount by 1.
- `incrementByvipul`: Increments the amount by a specified value.
- `init`: Initializes the amount with a specified value.

### Reducer

The reducer function handles the state transitions based on the action types.

#### Parameters:
- `state`: The current state of the application.
- `action`: The action dispatched to the store.

#### Example:
```javascript
function reducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case 'increment':
            return { amount: state.amount + 1 };
        case 'decrement':
            return { amount: state.amount - 1 };
        case 'incrementByvipul':
            return { amount: state.amount + action.payload };
        case 'init':
            return { amount: action.payload };
        default:
            return state;
    }
}
```

### Action Creators

- `initUser(value)`: Returns an action to initialize the amount with the specified value.
- `getUser(id)`: Makes an API call to fetch user data and dispatches the `initUser` action.

#### Example:
```javascript
function initUser(value) {
    return { type: 'init', payload: value };
}

function getUser(id) {
    return async (dispatch, getState) => {
        const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
        dispatch(initUser(data.amount));
    };
}
