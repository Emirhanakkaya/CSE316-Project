import React from 'react';
// import Model from '../models/model.js';
import DisplayAllComments from './displayComments';
export default class Comments extends React.Component {

    getNumOfComments(){
        console.log("ok1");
        console.log(this.props.model.questions[0][this.props.index].comment);
        let size = this.props.model.questions[0][this.props.index].comment.length;
        return size === 1 ? 1 + " Comment" : size + " Comments";
    }

    render(){
        console.log("DE1: " + this.props.index);
        let userName = <></>;
        if(this.props.loggedIn) { 
            console.log("sik: " + this.props.username);
            userName =  <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.profile} > {this.props.username} </button>
        }
        let next = <></>;
        let prevouis = <></>;
        
        if(this.props.model.questions[0][this.props.index].comment.length > 3){
            next = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.nextThree} > Next </button>
            prevouis = <button id = "forButtonReact" className = "notMiddleQuestion" > Prevouis </button> 
        }
        
        console.log("ezhel: " + this.props.loggedIn);
        let askAQuestionOrNot = <></>;
        let secondOne = <></>;
        if(this.props.loggedIn){
            askAQuestionOrNot = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.renderPage}> Ask a Question </button>  
        }
        else{
            askAQuestionOrNot = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.registerHandle}> Register </button>
            secondOne = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.loginUser}> Log In </button>
        }
        let newComment = <></>;
        if(this.props.loggedIn){
            newComment = <td> <button id = "forButtonReact03" className = "notMiddleQuestion" onClick = {this.props.newComment}> Comment </button> </td> ;
        }

        let i = 0;
        let length = this.props.model.questions[0][this.props.index].comment.length;
        let output = [];
        let max = 0;
        if(length > 3) { max = 3; }
        else { max = length; }
        while(i < max){
            output.push(<DisplayAllComments model = {this.props.model} indexQ = {this.props.index} index = {i} loggedIn = {this.props.loggedIn} 
            questions = {1} />);
            i += 1;
        }
        
        console.log("pust");
        return(
            <>
            <table id = "questions"> 
                <tbody>
                    <tr className = "questionRow">
                        
                        <td id = "reactQuestionDisplay02" className = "notMiddleQuestion"> {this.getNumOfComments()} </td> 
                        <td id = "reactQuestionDisplay02" className = "middleQuestion"> All Comments For Question  </td>
                         {askAQuestionOrNot}
                         {secondOne}
                        {userName}
                    </tr>   
                    {output}
                </tbody>
            </table>
            <table id = "questionsForUser">
                <tbody>
                    <tr className = "questionRow">
                        {prevouis}
                        {next}
                    </tr>
                    {newComment}
                </tbody>
                
            </table>
            
            
            </>
        );
    }
}