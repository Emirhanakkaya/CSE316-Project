import React from 'react';
export default class DisplayAllEdits extends React.Component {

    helperEdit = () => {
        console.log("yurd: " + this.props.index);
        console.log(this.props.model.answerDetails[this.props.index]._id);
        this.props.handleIdForAnswers(this.props.model.answerDetails[this.props.index]._id);  // id of answer which we will be making changes to!
        this.props.handleAnswerText(this.props.model.answerDetails[this.props.index].text)
        // now call the function to edit answer.
        this.props.edit();
    }

    helperDelete = () => {
        console.log("ist12: " + this.props.model.answerDetails[this.props.index]._id);
        this.props.handleForDeleteBokBok(this.props.model.answerDetails[this.props.index]._id);
        this.props.delete();
    }

    render(){
        let j = 0;
        let answers = [];
        let index = [];
        // while(j < this.props.model.answerDetails.length){
            // console.log(this.props.model.questions[0][this.props.index].answers[0][i].text.substring(1));
            let id = 0;
            
            console.log("id to look for: "+ id);
            // let j = 0;
            console.log("yo: " + this.props.model.answerDetails[j].ans_by);
            console.log("yo2: " + this.props.name);
            let edit = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.helperEdit} > Edit </button> ;
            let deleteHere = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.helperDelete} > Delete </button> ;
            // if(this.props.model.answerDetails[j].ans_by === this.props.name){
                console.log("in if: " + this.props.index);

                id = this.props.model.answerDetails[this.props.index].text;
                console.log("TEXT1: " + id);
                
                answers.push(
                <tr className = "questionRow02">
                     <td id = "reactQuestionDisplay02" className = "notMiddleQuestion"> {edit} </td> 
                     <td id = "reactQuestionDisplay02" className = "middleQuestion"> {id} </td> 
                     <td id = "reactQuestionDisplay02" className = "notMiddleQuestion"> {deleteHere}  </td>
                </tr>
                );
                
                // answers.push(<br></br>);
                // answers.push(deleteHere);
                index.push(this.props.index);
                // textHere = this.props.model.answerDetails[j].text;
            // }
            // j += 1;
        // }
        return (
            <>
                {answers}
            </>
        )
    }
}


