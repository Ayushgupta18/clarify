import React,{Component} from 'react';
import QuestionBox from './question-box';
import './question.css'

class Questionlis extends Component{
	constructor() {
        super();

        this.state = {
           ques:[]
        };
  }
  componentDidMount(){
  fetch('https://clarify-api.herokuapp.com/question', {
    method: 'get',
    headers: {'Content-Type': 'application/json'}
  })
    .then(res=>res.json())
    .then(questions=>{ this.setState({ques:questions})})
  }

	render() {
		const { ques } = this.state;
    console.log(ques);
		return(
      <div>
      <div className="flex-container">
    		<div className="question">
            <br/>
    			{ques.map(current_obj =>
              <QuestionBox key={current_obj.id} title={current_obj.title} user_id={current_obj.user_id} question_id={current_obj.id}/>
              )}
    		</div>
        </div>
        </div>
			);
	}
}

export default Questionlis;