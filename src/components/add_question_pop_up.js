import React,{Component} from 'react';
import "./add_question_pop_up.css"
class Popup extends Component {
constructor(props) {
        super(props);
        this.state={
          question:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
        console.log(this.state.question)
    }
    handleSubmit(e) {
      e.preventDefault();
      console.log(this.state);
      fetch('http://localhost:8080/add-question', {
        method: 'post',
        headers: {'Content-Type': 'application/json',
                  'auth':`JWT ${localStorage.getItem('token')}`
      },
        body:JSON.stringify({
          question:this.state.question,
        })
    })
      .then(this.props.closePopup);
  }

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
            {/*<form onSubmit={this.handleSubmit}>
              <textarea name="question" value={this.state.question} onChange={this.handleChange}/>
              <button type="submit"> Add Question </button>
              <button onClick={this.props.closePopup}> Close </button>
            </form>*/}
            <div className="card bg-light text-dark">
              <div className="card-body">
              <h3>Tips on getting good answers quickly</h3>
              <ul>
                  <li>Make sure your question hasn't been asked already</li>
                  <li>Keep your question short and to the point</li>
                  <li>Double-check grammar and spelling</li>
              </ul>
              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <textarea className="form-control" rows="5" id="comment" name="question" value={this.state.question} onChange={this.handleChange}/>
                </div> 
                <button type="submit"> Add Question </button>
                <button onClick={this.props.closePopup}> Close </button>
              </form>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
export default Popup;