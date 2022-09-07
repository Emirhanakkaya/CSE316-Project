import React from 'react';
// import Model from '../models/model';
import DisplayRows from './displayQuestionsRows';

export default class ClassQuestion extends React.Component {

    getQuestions(){
        if(this.props.model){
            let temp = this.props.model.questions[0].length; // was 0
            console.log("below:");
            console.log(this.props.model.questions);
            console.log(this.props.model.questions.map((question, index) => console.log(question)));
            if(temp === 1) { return temp + " Question"; }
            else { return temp + " Questions"; }
        }
    }
    
    render(){
        let questionsHere = <></>;
        let moreThanFive = [];
        console.log("in here");
        if(this.props.model){
            console.log(this.props.model.questions);
            if(this.props.model.questions[0].length < 5){
                questionsHere = this.props.model.questions[0].map((question, index) => (
                    <DisplayRows question = {question} key = {index} tags = {this.props.model.tagNames} forOnClickHere = {this.props.onClickRenderHere}
                        index = {index} back = {this.props.back} model = {this.props.model} newIndex = {this.props.newIndex} 
                        inc = {this.props.inc} dec = {this.props.dec} loggedIn = {this.props.loggedIn} comments = {this.props.comments}
                        commentIndexHere = {this.props.commentIndexHere} /> // have to make this 5 at a time.
                    )
                )
            }
            else{
                let i = this.props.indexHere;
                // 1 => 5 ? 
                let upTo = 0
                if(i !== 0){
                    let remaining = i % 5;
                    if(this.props.indexHere >= (this.props.model.questions[0].length - 5)){
                        upTo = i;
                    }
                    upTo = i + remaining;
                }
                else{
                    upTo = 5;
                }
                console.log("upTo: " + upTo);
                console.log("indexHere: " + this.props.indexHere);
                while(i < upTo){
                    console.log("i: " + i);
                    moreThanFive.push(<DisplayRows question = {this.props.model.questions[0][i]} key = {i} tags = {this.props.model.tagNames} 
                    forOnClickHere = {this.props.onClickRenderHere} 
                        index = {i} back = {this.props.back} model = {this.props.model} newIndex = {this.props.newIndex}
                        inc = {this.props.inc} dec = {this.props.dec} loggedIn = {this.props.loggedIn} comments = {this.props.comments} 
                        commentIndexHere = {this.props.commentIndexHere}/> // have to make this 5 at a time.
                    )
                    i += 1;
                }
                // questionsHere = this.props.model.questions[0].map((question, index) => (
                //     <DisplayRows question = {question} key = {index} tags = {this.props.model.tagNames} forOnClickHere = {this.props.onClickRenderHere}
                //         index = {index} back = {this.props.back} model = {this.props.model} newIndex = {this.props.newIndex} /> // have to make this 5 at a time.
                //     )
                // )
            }
            console.log(questionsHere);
        }
        // console.log(this.props.model.data.questions);
        let userName = <></>;
        if(this.props.loggedIn) { 
            console.log("sik: " + this.props.username);
            userName =  <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.profile} > {this.props.username} </button>
        }
        let next = <></>;
        let prevouis = <></>;
        if(this.props.model.questions[0].length > 5){
            next = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.nextFive} > Next </button>
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
        console.log("pust");
        return(
            <>
            <table id = "questions"> 
                <tbody>
                    <tr className = "questionRow">
                        <td id = "reactQuestionDisplay02" className = "notMiddleQuestion"> {this.getQuestions()} </td> 
                        <td id = "reactQuestionDisplay02" className = "middleQuestion"> All Questions  </td>
                         {askAQuestionOrNot}
                         {secondOne}
                        {userName}
                    </tr>   
                    {questionsHere}
                    {moreThanFive}
                </tbody>
            </table>
            <table id = "questionsForUser">
                <tbody>
                    <tr className = "questionRow">
                        {prevouis}
                        {next}
                    </tr>
                </tbody>
            </table>
            
            </>
        );
    }
}
//onClick = {this.props.callForQuestion}

// onClick = "formFunction()"
// style = "background-color: #165A92; background- color: white; background-size: 100%; font-size: 20% text-align: right"


// function firstTable(index = 0, allTagged = ""){
//   console.log(index);
//   if(index != 0 && allTagged != ""){
//     document.getElementById("questions").innerHTML = `
    //   <tr class = "questionRow">
    //   <th class = "notMiddleQuestion"> ` + countWithIndex(index) + ` </th> 
      
    //   <th class = "middleQuestion"> ` + getName(allTagged) + `</th>
    //   <th <button onclick = "formFunction()" class = "notMiddleQuestion" style = "background-color: #165A92; background- color: white; background-size: 100%; 
    //       font-size: 20% text-align: right">  
    //   Ask a Question  </th> </button>
    //   </tr>
//       `; 
//   }