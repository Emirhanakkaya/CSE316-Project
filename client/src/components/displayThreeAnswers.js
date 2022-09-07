import React from 'react';
import DisplayAllComments from './displayComments';
export default class DisplayThreeAnswers extends React.Component {
    
    getNumOfComments(){
        console.log("ok1");
        console.log(this.props.model.answerDetails[this.props.index].comment.length);
        let size = this.props.model.answerDetails[this.props.index].comment.length;
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
        if(this.props.model.answerDetails[this.props.index].comment.length > 3){
            next = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.nextThree} > Next </button>
            prevouis = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.prev} > Prevouis </button> 
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

        let i = this.props.threeIndex;
        let length = this.props.model.answerDetails[this.props.index].comment.length;
        console.log("l1_: " + length);
        console.log("i: " + i);
        let output = [];
        let max = 0;
        if(i !== 0){
            let remaining = (length) % 3;
            console.log("remaining: " + remaining)
            if(this.props.threeIndex <= (length - 3)){
                max = i + 3;
            }
            else{
                max = i + remaining;
            }
        }
        else { max = 3; }
        while(i < max){
            output.push(<DisplayAllComments model = {this.props.model} indexQ = {this.props.index} index = {i} loggedIn = {this.props.loggedIn} 
            />);
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