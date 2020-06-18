import React,{Component} from 'react';
import './home.css'
import Header from '../../components/Header/Navbar';
import MainContent from '../../components/Main_body/MainContent';


class Home extends Component{
       render(){
       	return(
                     <div>
                     <Header/>
                     <MainContent/>
                     </div>
       		);

              }
}

export default Home;