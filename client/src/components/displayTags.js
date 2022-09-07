
import React from 'react';
// import Model from '../models/model.js';
import DisplayAllTags from './tagsWithSpan.js';

export default class DisplayTags extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let askAQuestionOrNot = <></>;
        let secondOne = <></>;
        let userName = <></>;
        if(this.props.loggedIn){
            userName = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.profile} > {this.props.username} </button>
            askAQuestionOrNot = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.renderPage}> Ask a Question </button>  
        }
        else{
            askAQuestionOrNot = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.registerHandle}> Register </button>
            secondOne = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.loginUser}> Log In </button>
        }
        let main = <DisplayAllTags model = {this.props.model} tags = {this.props.model.tagNames} question = {this.props.model.questions}
            tagsSpecifically = {this.props.forSpecifcTags}  />
        return(
            <div>
            <table id = "questions">
                <tbody>
                    <tr className = "questionRow">
                        <td id = "reactQuestionDisplay02" className = "notMiddleQuestion"> {this.props.model.tagNames.length } Tags</td>
                        <td id = "reactQuestionDisplay02" className = "middleQuestion"> All Tags </td>
                        {askAQuestionOrNot}
                        {secondOne}
                        {userName}
                    </tr>
                    
                </tbody>
            </table>
            
            {main}
            
            </div>
        )
    }
}