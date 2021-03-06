import React,{Component} from 'react';
import './answer.css';
import AnswerBox from './Answer_box_container';

class Answerlis extends Component{
	constructor() {
        super();
        this.state = {
           ans:[]
        };
  }
  componentDidMount(){
  fetch('https://clarify-api.herokuapp.com/answer', {
    method: 'get',
    headers: {'Content-Type': 'application/json'}
  })
    .then(res=>res.json())
    .then(answers=>{ this.setState({ans:answers})});
  }

	render() {
		const { ans } = this.state;
		return(
    		<div className="answer">
          <br/>
    			{ans.map(current_obj =>
              <AnswerBox key={current_obj.id} answer_text={current_obj.answer_text} user_id={current_obj.user_id} question_id={current_obj.question_id}/>
              )}
    		</div>
			);
	}
}

export default Answerlis;