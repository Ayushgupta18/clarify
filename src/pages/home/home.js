import React,{Component} from 'react';
import './home.css'
import Header from '../../components/Header/Navbar';
import MainContent from '../../components/Main_body/MainContent';
import AppContext from "../../store/index.js";

const Home= ()=>{
       const [{user}]=React.useContext(AppContext);
       if(user==null)
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
                            Nothing found in local storage
                     </>
              )
       }
       
}

export default Home;