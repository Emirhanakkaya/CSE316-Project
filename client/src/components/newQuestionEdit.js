import React from 'react';
// import Model from '../models/model';


export default class ClassNewQuestionEdit extends React.Component {
    
    constructor(props){
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleFilterTitleChange = this.handleFilterTitleChange.bind(this)
        this.handleFilerSummaryChange = this.handleFilerSummaryChange.bind(this);
    }

    handleFilerSummaryChange(e){
        console.log("in userName");
        this.props.handleSummaryChangeHere(e.target.value);
    }

    handleFilterTextChange(e) {
        // console.log("HEREEEEE: " + e.target.value);
        console.log("in text");
        this.props.handleIt(e.target.value);
    }

    handleFilterTitleChange(e){
        console.log("in title");
        this.props.handleForTitle(e.target.value);
    }

    render(){
        console.log("textInNewQuestion Function: " + this.props.model.questions[0].length);
            return (
                <div>
                    <h1>Question Title</h1>
                    <p> This should not be more than 50 characters.</p>
                    <textarea rows="4" cols="130" id = "textArea1" value = {this.props.title} onChange = {this.handleFilterTitleChange}
                        ref = "okay"
                    ></textarea>
                    <h1>Summary</h1>
                    <p id = "check15"> Should not be more than 140 characters .</p>
                    <textarea rows="2" cols="130" id = "name" value = {this.props.userName} onChange = {this.handleFilerSummaryChange}></textarea>
                    <h1>Question Text</h1>
                    <p> Add details.</p>
                    <textarea rows="8" cols="130" id = "newQuestion" value = {this.props.text} onChange = {this.handleFilterTextChange}></textarea>
                    <br></br>
                    <button className = "postButton" onClick = {this.props.render}> Edit Question </button>
                </div>
            );
    }
}