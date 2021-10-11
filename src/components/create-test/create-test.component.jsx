import React from "react";
import { FormInput } from "../form-input/form-input.component";
import {CustomButton} from '../custom-button/custom-button.component';
import './create-test.styles.scss'

class CreateTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quest: "",
      ans: "",
      ansCollection: [],
      correctAns: "",
      isChecked: false,
      mId:'',
      dummyId:1
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let newId = this.state.dummyId + 1;
    
    let question = {
      id: newId,
      question: this.state.quest,
      answers: this.state.ansCollection,
      correctAns: this.state.correctAns,
      mId:this.state.mId,
    }
    this.props.getQuestion(question);

    newId = newId + 1;
    
    this.setState({ quest: "", ans: "", ansCollection: [], dummyId: newId });
  };

  addAnswer = () => {
    this.state.isChecked && this.setState({ correctAns: this.state.ans });
    this.setState((state) => ({
      ansCollection: [...state.ansCollection, state.ans],
      ans: "",
      isChecked: false
    }));
  };

  handleCheckbox = (e) => {
    this.setState({ isChecked: e.target.checked });
  };

  render() {
    return (
      <div className="test-question">
        <p className="title">Create Single Test</p>

        <form  className="test-form" onSubmit={this.handleSubmit}>
            <div className="question-section">
                <p className="labels">Enter Question Data Below: </p>
                <FormInput
                    type="text"
                    value={this.state.quest}
                    label="Enter Test Question"
                    name="quest"
                    handleChange={this.handleChange}
                    required
                />
            </div>
            <div className="answer-section">
                <p className="labels">Enter Answer Options Below: (Check the correct answer)</p>               
                <input
                    type="checkbox"
                    className="checkboxs"
                    checked={this.state.isChecked}
                    onChange={this.handleCheckbox}
                />
                <FormInput
                    type="text"
                    value={this.state.ans}
                    handleChange={this.handleChange}
                    name="ans"
                    label="Enter Answer Option"
                />
                <div className="buttons">   
                <CustomButton type="button" onClick={this.addAnswer}>
                    Add Answer
                </CustomButton>
                </div>
            </div>

            <div className="answer-display">          
                  <p className="labels">Answers: </p>
                    {
                      this.state.ansCollection.length < 1 ? 
                      (<p className="answer-list">Options displayed here</p>) :
                        this.state.ansCollection.map((eachAns, i) => (
                      <li className="answer-list" key={i}>{eachAns}</li>
                    ))}        
            </div>

            <div className="correct-answer">
              <p className="labels">Correct Answer: </p>
              <FormInput type="text"
              name="correctAns"
              value={this.state.correctAns}
              handleChange={this.handleChange} 
              label="Enter Correct Answer here" />
              </div>

            <div className="test-module">
            <p className="labels">Module Code: </p>
              <FormInput 
                type="text" 
                name="mId" 
                value={this.state.mId} label="Enter Module Code" 
                onChange={this.handleChange} />
            </div>
            

            <CustomButton type="submit" inverted onClick={this.handleSubmit}>
                Submit
            </CustomButton>
            
        </form>

        {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default CreateTest;
