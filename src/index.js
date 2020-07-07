import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware, combineReducers} from 'redux'
import App from './components/App';
import rootReducer from './reducers';
const logConsole=function({dispatch,getState}){
  return function(next){
    return function(action){
      console.log("Action  type ",action.type)
      next(action)
    }
  }
}
const store=createStore(rootReducer,applyMiddleware(logConsole))

console.log(store)
console.log(store.getState())
store.dispatch({
  type:'ADD_MOVIES',
  movies:[{name:'superman'}]
})
console.log('After state',store.getState())
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);


