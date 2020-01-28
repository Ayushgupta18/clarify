import React,{Component} from 'react';

class QuestionBox extends Component{
	constructor() {
		super();
		this.state={
          Answer:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
   }
   handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }
    handleSubmit = () => {
      e.preventDefault();
      console.log(this.state);
    fetch('https://clarify-api.herokuapp.com/add-answer', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
        answer: this.state.Answer,
        user_id:1,
        question_id:this.props.question_id
      })
    })
  }
	render(){
	return(
    <div>
    	<div className="card bg-dark text-white">
        <div className="card-body">
        <h4>{this.props.title}</h4>
    		<form onSubmit={this.handleSubmit}>
                {/*<textarea name="Answer" value={this.state.Answer} onChange={this.handleChange}/>*/}
                <div class="form-group">
                  <label for="comment">Your valuable answer here:</label>
                  <textarea className="form-control" rows="5" id="comment" name="Answer" value={this.state.Answer} onChange={this.handleChange}/>
                </div> 
                <button type="submit"> Answer </button>
        </form>
        </div>
    	</div>
      <br/>
    </div>
		)
	}
}
export default QuestionBox;