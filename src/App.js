import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Form from './pages/Form_container/form';
import PrivateRoute from './components/PrivateRoute';
import AppContext from './store/index'
import { reducer } from "./store/index";

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, {user:null});
  console.log(state)
  return (
    <>
    <Switch>
      <Route path="/sign" component={Form}/>
      <PrivateRoute path="/">
        <AppContext.Provider value={[state, dispatch]}>
          <Home/>
        </AppContext.Provider>
      </PrivateRoute>  
    </Switch> 
    </>
  ) ;
}