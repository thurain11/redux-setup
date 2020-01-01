import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index'


var myStore = createStore(rootReducer);

ReactDOM.render(
    <Provider store={myStore}>
    <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA





 //const store = createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// //Action 
// const increment=()=>{
//     return {
//         type: "incre",
//     }
// }

// const decrement=()=>{
//     return {
//         type: "decre",
//     }
// }

// // Reducer 
// const counter =(state= 0,action)=>{
//     switch(action.type){
//         case "incre": return state+1;
//         case "decre": return state-1;
//     }
// }

// let store = createStore(counter);

// //Dispatch
// store.subscribe(()=> console.log(store.getState()));
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());