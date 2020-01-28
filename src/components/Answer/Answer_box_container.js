import React,{Component} from 'react';

class AnswerBox extends Component{
	constructor() {
		super();
    this.state={
      ques:[]
    }
   }
   componentDidMount(){
    fetch(`https://clarify-api.herokuapp.com/feed-question/?question_id=${this.props.question_id}`, {
    method: 'get',
    headers: {'Content-Type': 'application/json'}
  })
    .then(res=>res.json())
    .then(question=>{ this.setState({ques:question})})
  }
	render(){
    const { ques } = this.state;
	return(
    <div>
    	<div className="card bg-dark text-white">
        <div className="card-body">
        {ques.map(current_obj =>
              <p>{current_obj.title}</p>
              )}
        <br/>
    		<p>{this.props.answer_text}</p>
        </div>
    	</div>
      <br/>
    </div>
		)
	}
}
export default AnswerBox;