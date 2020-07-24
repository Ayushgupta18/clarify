import React from 'react';
import './home.css'
import Header from '../../components/Header/Navbar';
import MainContent from '../../components/Main_body/MainContent';
import AppContext from "../../store/index.js";
import {Redirect} from 'react-router-dom'


const Home= ()=>{
       const [{user}]=React.useContext(AppContext);
       if(user!=null)
       {
              return(
                     <>
                            <Header/>
                            <MainContent/>
                     </>
                     );
       }
       else{
              return(
                     <>
                           <Redirect to="/sign/in" />
                     </>
              )
       }
       
}

export default Home;