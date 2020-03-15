import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppContainer} from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware} from "redux";
import {reducer} from "./Components/store/reducer/reducer";
import {users}  from "./Components/store/reducer/users";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import logger from "redux-logger";
import thunk from "redux-thunk";

const reducers = combineReducers({
   reducer, 
   users
});

const store = createStore(reducers, applyMiddleware(logger, thunk));

console.log(store.getState())


ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>
           <Route path="/" component={AppContainer}></Route>
      </Provider>
   </BrowserRouter>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
