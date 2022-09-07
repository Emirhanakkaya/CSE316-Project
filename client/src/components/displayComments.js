import React from 'react';
export default class DisplayAllComments extends React.Component {


    render() {
        // console.log("32-: " + this.props.questions);
        let commentID = 0;
        if(this.props.questions){
            commentID = this.props.model.questions[0][this.props.indexQ].comment[this.props.index];
        }
        else { commentID = this.props.model.answerDetails[this.props.indexQ].comment[this.props.index]; }
        console.log("comment Id: ");
        console.log(commentID);
        let i = 0;
        let data = "";
        let by = "";
        while(i < this.props.model.comments.length){
            if(this.props.model.comments[i]._id === commentID){
                data = this.props.model.comments[i].data;
                by = this.props.model.comments[i].by;
            }
            i += 1;
        }
        console.log(this.props.model.comments);
        console.log("pe1: " + this.props.index);
        let byHere = [];
        byHere.push(<br></br>);
        byHere.push(<br></br>);
        byHere.push(<td id = "displayINline" className = "colorHERE"> <p id = "displayINline" > Commented By </p> <p id = "colorHERE"> {by} </p> </td>);

        let toReturn = <>
                <td><br></br></td>
                <td id = "reactQuestionDisplay" className = "middleQuestion"> {data} </td>
                {byHere}

        </>


        return (
            <tr>
            {toReturn}
            </tr>
        )
    }
}