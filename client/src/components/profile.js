import React from 'react';
import DisplayRows from './displayQuestionsRows.js';
export default class ProfilePage extends React.Component {

    findIndex(){
        let i = 0;
        while(i < this.props.model.users.length){
            if(this.props.model.users[i].email === this.props.email){
                break;
            }
            i += 1;
        }
        return i;
    }

    findTime(index){
        console.log("index: " + index);
        let time = this.props.model.users[index].join_time + "";
        time = time.substring(time.lastIndexOf('-') + 1, time.lastIndexOf('-') + 3);
        console.log("time: " + time);
        let today = new Date() + "";
        today = today.substring(today.indexOf('y') + 2, today.indexOf('y') + 5);
        console.log("today: " + today);
        console.log("t: " + ("0" === time[0]));
        if(((today[0] === "0") && (time[0] === "0")) || ((time[0] === "1") && (today[0] === "1")) || ((time[0] === "2") && (today[0] === "2"))){
            console.log("tud");
            console.log("today[1]: " + today[1] + " time[1]: " + time[1]);
            if(today[1] - time[1] === 0 || (today[1] - time[1] < 0)){
                console.log("hm");
                return "User Joined Today!"
            }
            else{
                let days = today[1] - time[1];
                console.log("days: " + days);
                if(days === 1){ return "User for " + days + " Day!"}
                else { return "User for " + days + " Days!" }
            }
        }
        else if(today[0] === 1 && time[0] === 0){
            time = time.substring(1); // get rid of leading 0
            let days = parseInt(today) - parseInt(time[1]);
            return "User for " + days + " Days!";
        }
    }

    iterateThroughText(userID){
        let i = 0;
        let indices = []
        while(i < this.props.model.questions[0].length){
            console.log("this.props.model.questions[0][i].user : " + this.props.model.questions[0][i].user + " userID: " + userID);
            if((this.props.model.questions[0][i].user == userID)){
                console.log(" in if! ");
                indices.push(this.props.model.questions[0][i]);
            }
            i += 1;
        }
        return indices;
    }

    getNumOfQuestions(count){
        return (count === 1) ? "1 Question" : count + " Questions";
    }

    helperBeforeAnswer =() => {
        let i = 0;
        let userName = "";
        while(i < this.props.model.users.length){
            if(this.props.model.users[i].email === this.props.loggedIn){
                userName = this.props.model.users[i].name;
                break;
            }
            i += 1;
        }
        console.log("tamam: " + this.props.loggedIn);
        this.props.idForAnswers(userName);
        this.props.onAnswer();
    }

    render(){
        let index = this.findIndex();
        let memberSince = this.findTime(index);
        // console.log(this.props.model.questions[0][0].user);

        let questionsFound = this.iterateThroughText(this.props.model.users[index]._id);
        let i = 0;
        let lessThanFive = []

        console.log("questionsFound: ");
        console.log(questionsFound);

        let tags = <></>
        let answers = <></>
        tags = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.ifTagsHere} > Tags </button>
        answers = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.helperBeforeAnswer} > Answers </button>

        
        while(i < questionsFound.length){
            console.log("i: " + i);
            console.log("yeo: ");
            console.log(questionsFound[i]);
            let j = 0;
            let index = 0;
            while(j < this.props.model.questions[0].length){
              if(questionsFound[i]._id === this.props.model.questions[0][j]._id){
                index = j;
                break;
              }
              j += 1;
            }
            lessThanFive.push(<DisplayRows question = {questionsFound[i]} key = {i} tags = {this.props.model.tagNames} 
            forOnClickHere = {this.props.onClickRenderHere}
                index = {index} back = {this.props.back} model = {this.props.model} newIndex = {this.props.newIndex}
                inc = {this.props.inc} dec = {this.props.dec}  loggedIn = {this.props.loggedIn}
                comments = {this.props.comments} commentIndexHere = {this.props.commentIndexHere} edit = {1} onEdit = {this.props.onEdit}
                editIndex = {this.props.editIndex} handleText = {this.props.handleText} handleTitle = {this.props.handleTitle} 
                handleSummary = {this.props.handleSummary} ifTags = {this.props.ifTags} deleteNow = {this.props.deleteNow} /> 
            )
            i += 1;
        }
    
        console.log("lessThanFive: ");
        console.log(lessThanFive)

        console.log("questionsFound01: " + questionsFound);
        let next = <></>
        let prevouis = <></>
       

        return(
            <>
                <table id = "questions"> 
                <tbody>
                    <tr className = "questionRow">
                        <td id = "reactQuestionDisplay02" className = "notMiddleQuestion"> {this.props.username}'s Profile Page 
                        <br></br> {this.getNumOfQuestions(questionsFound.length)} </td>
                        <td id = "reactQuestionDisplay02" className = "middleQuestion"> {memberSince} </td>
                        <td id = "reactQuestionDisplay02" className = "notMiddleQuestion"> Reputation: {this.props.model.users[index].reputation} 
                        
                        </td>
                        
                    </tr>  
                    {lessThanFive} 
                    
                    
                </tbody>
            </table>
            
            {tags}
            {answers}
            </>
        )
    }
}