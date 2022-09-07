
import React from 'react';
// import Model from '../models/model.js';

export default class DisplayEditAnswer extends React.Component{
    constructor(props){
        super(props);
        this.handleFilterAnswer = this.handleFilterAnswer.bind(this);
        this.handleFilterAnswerUsername = this.handleFilterAnswerUsername.bind(this);
    }

    handleFilterAnswer(e) {
        // console.log("HEREEEEE: " + e.target.value);
        console.log("in text");
        this.props.handleText(e.target.value);
    }

    handleFilterAnswerUsername(e){
        console.log("in username");
        this.props.handleFilterUsername(e.target.value);
    }

    render(){
        console.log("in render!");
        return (
            <div>
                <h1>Answer Text</h1>
                <p> This should not be more than 100 characters.</p>
                <textarea rows="8" cols="130" id = "textArea1" value = {this.props.answer} onChange = {this.handleFilterAnswer}
                    ref = "okay"
                ></textarea>
                <br></br>
                <button className = "postButton" onClick = {this.props.render}> Post Answer </button>
            </div>
        );
    }
    
}