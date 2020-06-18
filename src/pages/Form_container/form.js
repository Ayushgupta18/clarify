import React,{Component} from 'react';
import {Route, NavLink } from 'react-router-dom';
import './form.css';
import SignUpForm from '../../components/Forms/SignUpForm';
import SignInForm from '../../components/Forms/SignInForm';
import image from './image.png';
import Logo from '../../components/logo/logo';

const Form =()=>{
      return (
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
            <Route exact path="/sign" component={SignUpForm}/>
            <Route path="/sign/in" render={
              (props)=><SignInForm {...props}/>
            }/>
        </div>
        <div className="App__Side"></div>
        </div>
    );
    }
 export default Form;