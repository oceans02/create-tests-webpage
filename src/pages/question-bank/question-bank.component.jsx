import React from "react";
import './question-bank.styles.scss';

import { withRouter } from 'react-router';

import CreateTest from "../../components/create-test/create-test.component";
import { TestOverview } from "../../components/test-overview/test-overview.component";
import {CustomButton} from '../../components/custom-button/custom-button.component'

class QuestionBank extends React.Component{
    constructor(){
        super();

        this.state={
            questionBank:[
                {   id:50,
                    question:'What is react',
                    answers:[
                        "A framework",
                        "UI library",
                    "All of above"], 
                    correctAns:"UI library",
                    mId:"Mod-01"},
                {   id:51,
                    question:'Who created React',
                    answers:["Gixx", "Fixx", "Fb"], 
                    correctAns:"Fb",
                    mId:"Mod-02"},
                {   id:52,
                    question:'IS React easy to use?',
                    answers:["yes", "no", "maybe"], 
                    correctAns:"yes",
                    mId:"Mod-03"}
            ],
            showChild:false
        }
    }

    handleQuestionUpload = (question) => {
        let {questionBank} = this.state;
        this.setState({questionBank:[...questionBank, question]});
    }

    render(){
        return(
            <div className="question-bank">
                <p className="title">Test Question Bank</p>
                <TestOverview questionList = {this.state.questionBank} />
                {
                    this.state.showChild && <CreateTest getQuestion={this.handleQuestionUpload} />
                }
                <div className="small-create-button">
                    <CustomButton onClick={(state) => this.setState({showChild: !state.showChild})}>
                        Create Test
                    </CustomButton>
                    {/* <CustomButton onClick={() => this.props.history.push(`${this.props.match.url}/create`)} >
                        Create Test
                    </CustomButton> */}
                    <CustomButton onClick={() => this.props.history.push("/course")}>Go To Modules</CustomButton>
                </div>
            </div>
        )
    }
}

export default withRouter(QuestionBank);