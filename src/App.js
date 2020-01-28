import React,{Component} from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Form from './pages/Form_container/form';
import PrivateRoute from './components/PrivateRoute';
class App extends Component {
  render() {
      return (
          <div>
          <Switch>
            <Route path="/sign" component={Form}/>
            <PrivateRoute path="/" component={Home}/>   
          </Switch> 
          </div>
    );
    }
  }

export default App;
