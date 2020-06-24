import React,{Component} from 'react';
import './maincontent.css';
import Popup from "../Add_question/add_question_pop_up"
import Answer from "../Answer/Answer";
import { Switch,Route,withRouter} from 'react-router-dom';
import Questionlis from '../Question/question';
class MainContent extends Component{
	constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
	render(){
		return(
			<div>
				<div className="flex-container">
				<div className="left-side">
					<div className="sidenav">
					  <a href="#about">🎫 Feed</a><br></br>
					  <a href="#services">📱  Mobile</a>
					  <a href="#clients">🏞  Life lessons</a>
					  <a href="#contact">🕹  Technology</a>
					  <a href="#contact">⏳  Motivation</a>
					  <a href="#contact">😂Comedy</a>
					  <a href="#contact">📷 Photography</a>
					  <a href="#about">👔 Fashion</a>
					  <a href="#services">🌋 History</a>
					  <a href="#clients">🏞  Life</a>
					  <a href="#contact">🏌‍♂  Human Behavior</a>
					</div>
				</div>
				<div className="main">
					
					<div className="card bg-dark text-white">
						<div className="card-body">
						<p>Click here to add a question</p>
						<button onClick={this.togglePopup.bind(this)}>Add Question</button>
						</div>
					</div>
					{this.state.showPopup ? 
			          <Popup
			            closePopup={this.togglePopup.bind(this)}
			          />
			          : null
			        }
			        <br/>
			        <Switch>
			        <Route path={this.props.match.url+"question"} component={Questionlis}/>
			        <Route path='/answer' component={Answer}/>
			        </Switch>
				</div>
				
				<div className="right-side">
					<div className="sidenav1">
					  <a href="#about">Related Topics</a>
					  <a href="#about">-----------------</a>
					  <a href="#clients">⚛ Self Motivation</a>
					  <a href="#contact">🕹 Gaming</a>
					  <a href="#contact">🛣 Inspiration</a>
					  <a href="#contact">🎆 Success</a>
					</div>
				</div>
				</div>
			</div>
			)
	}
}

export default withRouter( MainContent);