import React from 'react';
import {Switch,Route, NavLink, Redirect } from 'react-router-dom';
import './form.css';
import SignUpForm from '../../components/Forms/SignUpForm';
import SignInForm from '../../components/Forms/SignInForm';
import image from './image.png';
import Logo from '../../components/logo/logo';
import AppContext from '../../store/index'

const Form =()=>{
    const [{user}]=React.useContext(AppContext)
      return (
        user==null?
        <div className="App">
          <div className="App__Aside"><img className="assd" src={image} alt="logo"/></div>
          <div className="App__Form">
            <h1 className="heading"><Logo/>CLARIFY</h1>
            <p className="heading">Have Questions or Doubts?? Let those clarify!!</p>
            <div className="PageSwitcher">
                <NavLink to="/sign/in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/sign" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>
            <div className="FormTitle">
              <NavLink to="/sign/in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/sign" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>
            <Switch>
              <Route path="/sign/in" component={SignInForm}/>
              <Route path="/sign" component={SignUpForm}/>
            </Switch>
            
        </div>
        <div className="App__Side"></div>
        </div>
        :
        <Redirect to ="/"/>
    );
}
 export default Form;