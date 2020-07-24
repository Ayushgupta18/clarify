import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Form from './pages/Form_container/form';
import AppContext from './store/index'
import { reducer } from "./store/index";

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, {user:localStorage.getItem('token')});
  return (
    <>
      <Switch>
        <Route path="/sign" >
          <AppContext.Provider value={[state, dispatch]}>
              <Form/>
          </AppContext.Provider>
        </Route>
        <Route path="/">
          <AppContext.Provider value={[state, dispatch]}>
            <Home/>
          </AppContext.Provider>
        </Route>  
      </Switch> 
    </>
  ) ;
}