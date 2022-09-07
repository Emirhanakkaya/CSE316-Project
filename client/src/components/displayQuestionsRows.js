import React from 'react';
// import Model from '../models/model.js';
// import DisplayFive from './displayFive';
import EditQuestion from './editQuestion';

export default class DisplayRows extends React.Component{
    constructor(props){
        super(props);
        this.handleFiveIndex = this.handleFiveIndex.bind(this);
        this.handleCommentIndex = this.handleCommentIndex.bind(this);
    }

    handleFiveIndex = (index) => {
        this.handleFiveIndex(index);
    }
    helperHere(index){
        this.props.newIndex(index);
    }
    handleCommentIndex = () => {
        console.log("fe: " + this.props.index);
    }

    beforeComment = () => {
        console.log("fe: " + this.props.index);
        this.props.commentIndexHere(this.props.index);
        this.props.comments();
    }

    getAnswers(){
        console.log("OKAY: " );
        // console.log(this.props.question.answers[0]);
        let temp = this.props.question.answers.length; // was answers[0]
        if(temp === 1) { return temp + " Answer"}
        else { return temp + " Answers"}
    }

    getViews() {
        let temp = this.props.question.views;
        if (temp === 1) { return temp + " View"}
        else { return temp + " Views"}
    }

    getSummary(){
        if(this.props.question.summary){
            return "summary: " + this.props.question.summary;
        }
        else{
            return "";
        }
    }

    getAskedBy(){
        let arr = [];
        arr.push(<p id = "displayINline">{" Asked by"}</p>);
        arr.push( <p id = "colorHERE"> {this.props.question.asked_by}</p>);
        arr.push(<br></br>);
        arr.push(<p id = "displayINline">{"On "}</p>);

        let timeHere =  this.props.question.ask_date_time;
          console.log("timeHere: " + timeHere);

        let date = "" + this.props.question.ask_date_time;
        // create new Date(date)
        let dateHere = new Date(date);//.toLocaleString('en-US', {timeZone: 'America/New_York'}); 
        console.log("date: ");
        console.log(dateHere.getHours());

        // date = date.substring(0, date.indexOf('T'));
        let month = dateHere.getMonth();
        console.log("MONTH: " + month);
        month = parseInt(month);
        if(month === 3){
            month = "April";
        }
        else if(month === 4){
            console.log("okay");
            month = "May";
        }
        else if(month === 5){
            month = "June";
        }
        
        date = month + " " + dateHere.getDate() + ", " + dateHere.getFullYear();
       

        let minutes =  dateHere.getMinutes();
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        let time = dateHere.getHours() + ":" + minutes;
        // time = time.substring(time.indexOf('T') + 1, time.indexOf(":") + 3);
        // console.log("time: " + time[1]);

        arr.push(<p id = "greenColorHere"> { date} </p>);
        arr.push(<br></br>);
        arr.push(<p id = "displayINline">{"At "}</p>);
        arr.push(<p id = "lightBlueColor"> { time } </p>);
        return arr;
    }

    toReturnSpans(tags){
        let withSpans = tags.map((tag, index) => 
            <span key = {index} className = "spanTag"> {tag} </span> 
        )
        return withSpans;
    }

    getTags(){
        console.log("wow: " + this.props.question.tags.length); // was tags[0]
        let tagsForQuestions = this.props.question.tags.length; // was tags[0]
        let arrayOfTags = [];
        let i = 0;
        while(i < tagsForQuestions){
            console.log("bolu: " + this.props.question.tags[i]);
            arrayOfTags.push(this.props.question.tags[i]); // was [0][i]
            i += 1;
        }
        i = 0;
        let tagsToReturn = [];
        while (i < arrayOfTags.length){
            let j = 0;
            while(j < this.props.tags.length){
                console.log("HERE: " + this.props.tags[j]);
                console.log("arrayOfTags[i]: " + arrayOfTags[i]);
                if(this.props.tags[j]._id === arrayOfTags[i]){
                    tagsToReturn.push(this.props.tags[j].name + " ");
                }
                j += 1;
            }
            i += 1; 
        }
        return this.toReturnSpans(tagsToReturn);
    }

    helperForRendering = () => {
        console.log("heyy: ");
        console.log(this.props.index);
        
        console.log(this.props.id);
        this.props.forOnClickHere(this.props.index, this.props.id);
    }

    helperForVoteIncrement = () => {
        this.props.inc(this.props.index);
    }

    helperForVoteDecrement = () => {
        this.props.dec(this.props.index);
    }

    helperEdit = () => {
        let questionEditing = this.props.model.questions[0][this.props.index];
        this.props.handleText(questionEditing.text);
        this.props.handleTitle(questionEditing.title);
        this.props.handleSummary(questionEditing.summary);
        // this.state.filterTitle = questionEditing.title;
      // this.state.filterText = questionEditing.text;
      // this.state.summary = questionEditing.summary;
        console.log("indexx: " + this.props.index);
        console.log(this.props.model);
        this.props.editIndex(this.props.index);
        this.props.onEdit();
    }

    helperDelete = () => {
        this.props.deleteNow(this.props.index);
    }

    render(){
        console.log("checkIndexNow: " + this.props.checkIndexNow);
        let toReturn = <></>;
        let ifLoggedIn = <></>;
        if(this.props.loggedIn){
            console.log("pepe");
            ifLoggedIn = 
            <>
            <button id = "forButtonReactHere04" className = "notMiddleQuestion" onClick = {this.helperForVoteIncrement} > Like </button>   
            <button id = "forButtonReactHere04" className = "notMiddleQuestion" onClick = {this.helperForVoteDecrement}> Dislike </button>
            </>
        }

        
        let edit = <></>
        let deleteHere = <></>
        if(this.props.edit){
            edit = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.helperEdit} > Edit </button> ;
            deleteHere = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.helperDelete} > Delete </button> ;
        }

        console.log("polls: " + this.props.index);
        // if(this.props.index < 5){
            console.log("narob: " +  this.props.model.questions[0][this.props.index].votes);
            console.log("senin1: " + this.props.index);
            toReturn =
            <>
            <tr>
                <td id = "reactQuestionDisplay02" className = "notMiddleQuestion">  {this.getAnswers()} <br></br> {this.getViews()} 
                <br></br> {this.props.model.questions[0][this.props.index].votes} Votes <br></br>
                {ifLoggedIn}
                 </td>
                <td id = "reactQuestionDisplay" className = "middleQuestion"> <a onClick = {this.helperForRendering} className = "linky" >
                 {this.props.question.title}<br></br> {this.getTags()} </a>  <br></br>{this.getSummary()} <br></br>
                 <button id = "forButtonReactHere04" className = "notMiddleQuestion" onClick = {this.beforeComment} > 
                                Comments </button>
                                </td>
                <td id = "makrItRight" className = "middleQuestion"> {this.getAskedBy()} <br></br> {edit} <br></br> {deleteHere}</td>
                {/* <td> </td> */}
            </tr>
            </>
        // }
       
        console.log("hm:");
        console.log(this.props.model.questions[0]);
        
        // need to have this entire return statement in a loop. build it inside of the loop with increments of 5, creating a new variable each time.
        // know how many variables to create based off of length of the question[0] array.   
        return (
            <>
            {toReturn}
            </>

            //onClick = {this.props.forOnClick(this.props.index)
        );
    }
}