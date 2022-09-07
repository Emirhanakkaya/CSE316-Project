import React from 'react';

export default class DisplayAnswers extends React.Component {

    helperHere =() => {
        console.log("gala: " + this.props.answerIndex);
        this.props.onClickVote(this.props.answerIndex, this.props.index);
    }

    helperHereDec =() => {
        this.props.onClickDec(this.props.answerIndex, this.props.index);
    }

    beforeComment = () => {
        console.log("fe: " + this.props.index);
        this.props.commentIndexHereAnswer(this.props.answerIndex);
        this.props.comment();
    }

    getAnsweredBy(idNow){
        console.log("idNow: " +  this.props.model.answerDetails.length);
        let index = 0;
        while(index < this.props.model.answerDetails.length){
            if(idNow === this.props.model.answerDetails[index]._id){
                console.log("INDEX: " + index);
                break;
            }
            index+=1;
        }
        console.log("iNdex: " + index);
        let arr = [];
        arr.push(<p id = "displayINline">{" Ans by"}</p>);
        console.log("OKAYY: " + this.props.model.answerDetails[index]);
        arr.push( <p id = "colorHERE"> {this.props.model.answerDetails[index].ans_by}</p>);
        arr.push(<br></br>);
        arr.push(<p id = "displayINline">{"On "}</p>);
        let date = "" + this.props.model.answerDetails[index].ans_date_time;
        
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

        arr.push(<p id = "greenColorHere">  {date}  </p>);
        arr.push(<br></br>);
       
        console.log("time2: " + time);
        arr.push(<p id = "displayINline">{"At "}</p>);
        arr.push(<p id = "lightBlueColor"> { time } </p>);
        return arr;
    }

    render() {
        console.log("=i=: " + this.props.answerIndex);
        let textHere =  this.props.model.answerDetails[this.props.answerIndex].text;
        let answrsHere = [];
        

        let ifLoggedIn = <></>;
            console.log("okay=: " + this.props.loggedIn);
            if(this.props.loggedIn){
                ifLoggedIn = 
                <>
                <button id = "forButtonReactHere0" className = "notMiddleQuestion" onClick = {this.helperHere}> Like </button>   
                <button id = "forButtonReactHere0" className = "notMiddleQuestion" onClick = {this.helperHereDec} > Dislike </button> 
                </>
            }

        console.log("fuck1");
        
        answrsHere.push(
            <>
            <tr>
            <td id = "forAsetecticsLeft"> {textHere} <br></br> {this.props.model.answerDetails[this.props.answerIndex].votes} Votes <br></br> 
            {ifLoggedIn}
            <br></br>
            <button id = "forButtonReactHere10" className = "notMiddleQuestion" onClick = {this.beforeComment} > 
                      Comments </button>
            </td> 
            
            <td className = "twoQuestions"> {this.getAnsweredBy(this.props.id)} </td>
            </tr>
            </>
        );
        answrsHere.push(<hr id = "forHr"></hr>)
       
        return (
            <>
                {answrsHere}
            </>
        )
    }
}