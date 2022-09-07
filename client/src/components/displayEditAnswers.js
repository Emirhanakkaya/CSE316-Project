import React from 'react';
import DisplayAllEdits from './displayAllEditsAns';
export default class EditAnswers extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {answerID: 0}
    }
    
    helperEdit = () => {
        console.log("id: " + this.state.answerID) // find answer with this id
    }
    
    
    render(){
        var i = 0;
        // this.props.model.data.questions.length;
        console.log("HERE: " + this.props.index);
        console.log("email02: " + this.props.loggedIn);
        let name = "";
        while(i < this.props.model.users.length){
            if(this.props.model.users[i].email === this.props.loggedIn){
                name = this.props.model.users[i].name;
            }
            i += 1;
        }
        console.log("name: " + name);
        console.log(this.props.model.answerDetails);
        let j = 0;
        let answers = [];
        let index = [];
        
        while(j < this.props.model.answerDetails.length){
            // console.log(this.props.model.questions[0][this.props.index].answers[0][i].text.substring(1));
            let id = 0;
            console.log("id to look for: "+ id);
            // let j = 0;
            console.log("yo: " + this.props.model.answerDetails[j].ans_by);
            console.log("yo2: " + name);
            let edit = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.helperEdit} > Edit </button> ;
            let deleteHere = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.helperDelete} > Delete </button> ;
            if(this.props.model.answerDetails[j].ans_by === name){
                console.log("in if");
                id = this.props.model.answerDetails[j].text;
                console.log("TEXT1: " + id);
                this.state.answerID = this.props.model.answerDetails[j]._id;
                answers.push(<DisplayAllEdits index = {j} model = {this.props.model} onClickVote = {this.props.onClickVote} name = {name}
                    handleIdForAnswers = {this.props.handleIdForAnswers} handleAnswerText = {this.props.handleAnswerText} edit = {this.props.editAnswer}
                    delete = {this.props.deleteRender} handleForDeleteBokBok = {this.props.handleForDeleteBok} />);
                
                // answers.push(<br></br>);
                // answers.push(deleteHere);
                index.push(j);
                // textHere = this.props.model.answerDetails[j].text;
            }
            j += 1;
        }
        console.log("answers: ");
        console.log(answers);


        // while(j < answers.length){
        //     j += 1;
        // }

        return (

            <>
            <table id = "questions">
                <tbody>
                    <tr className = "questionRow">
                        <td id = "reactQuestionDisplay02" className = "notMiddleQuestion"> {index.length } Answers</td>
                        <td id = "reactQuestionDisplay02" className = "middleQuestion"> All Answers by {name} </td>
                        <td> 
                            <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.renderPage}> 
                            Ask a Question </button> 
                            <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.profile} > {name} </button>
                        </td>
                    </tr>
                    {answers}
                </tbody>
            </table>
            
            
            
            </>
        )
    
    }
}