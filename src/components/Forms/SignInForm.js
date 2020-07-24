import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../store/index'

function SignInForm(props) {
  const [form, setform] = React.useState({ email: "", password: "" });
  const [{user},dispatch]=React.useContext(AppContext);
  
  function handleChange(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }


   const handleSubmit = (e)=>{
    e.preventDefault();
    fetch(' https://clarify-api.herokuapp.com/signin',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email:form.email, password:form.password })
      })
        .then((res)=>{
          console.log(res)
          return res.json();
        })
        .then((data)=>{
          if(data.message){
            alert(data.message)
          }
          else{
            dispatch({type:"SET_LOGIN",payload:data.token}); 
            props.history.replace('/')
          }
          
        })
    }

        return (
        user==null?
        <div className="FormCenter">
            <form onSubmit={handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={form.email} onChange={handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={form.password} onChange={handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
        </div>
        :props.history.replace('/')
        );
}

export default SignInForm;