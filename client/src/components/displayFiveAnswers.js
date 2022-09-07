import React from 'react';
// import Model from '../models/model.js';
import DisplayAnswers from './forAnswers';
export default class DisplayFiveAnswers extends React.Component {
    constructor(props){
        super(props);
        this.state = {indexNow: 0}
    }
    askedBy(){
        let arr = [];
        arr.push(<p id = "displayINline">{" Asked by"}</p>);
        arr.push( <p id = "colorHERE"> {this.props.model.questions[0][this.props.index].asked_by}</p>);
        arr.push(<br></br>);
        arr.push(<p id = "displayINline">{"On "}</p>);
        let date = "" + this.props.model.questions[0][this.props.index].ask_date_time;
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
        console.log("time: " + time);

        arr.push(<p id = "greenColorHere"> { date } </p>);
        arr.push(<br></br>);

        arr.push(<p id = "displayINline">{"At "}</p>);
        arr.push(<p id = "lightBlueColor"> { time } </p>);
        return arr;
    }

    helperHere =() => {
        console.log("gala: " + this.state.indexNow);
        this.props.onClickVote(this.state.indexNow, this.props.index);
    }

    helperHereDec =() => {
        this.props.onClickDec(this.state.indexNow, this.props.index);
    }


    render(){
        // let index = this.props.index

        console.log("max=: " + this.props.current);
        var i = this.props.current;
        var answerTags = [];
        var secondTags = [];
        // this.props.model.data.questions.length;
        console.log("HERE: " + this.props.length);
        console.log("this.props.model.questions[0][this.props.index].answers.length: " + this.props.model.questions[0][this.props.index].answers.length)
        console.log("this.props.index: " + this.props.index);
        // 1 => 5 ? 
        let upTo = 0
        console.log("ii: " + i);
        if(i !== 0){
            let remaining = (this.props.length) % 5;
            console.log("remaining: " + remaining)
            if(this.props.current <= (this.props.length - 5)){
                upTo = i + 5;
            }
            else{
                upTo = i + remaining;
            }
        }
        else{
            upTo = 5;
        }
        console.log("upTO+:" + upTo);
        while(i < upTo){
            // console.log(this.props.model.questions[0][this.props.index].answers[0][i].text.substring(1));
            let id = this.props.model.questions[0][this.props.index].answers[i];
            console.log("id to look for: "+ id);
            let j = 0;
            var textHere = "";
            while(j < this.props.model.answerDetails.length){
                console.log("okay: " + this.props.model.answerDetails[j]._id);
                if(this.props.model.answerDetails[j]._id === id){
                    textHere = this.props.model.answerDetails[j].text;
                    break;
                }
                j += 1;
            }
            
            
            if(this.props.model.questions[0][this.props.index].answers.length < 5){
                answerTags.push(<DisplayAnswers model = {this.props.model} index = {this.props.index} ifClicked = {this.props.ifClicked} 
                    renderPage = {this.props.renderPage} onClickVote = {this.props.onClickVote} onClickDec = {this.props.onClickDec} loggedIn = {this.props.loggedIn} 
                    answerIndex = {j} id = {id} />)
            }
            else{
                console.log("j: " + j);
                console.log("this.state.max: " + this.props.length);
                if(i < this.props.length){
                    answerTags.push(<DisplayAnswers model = {this.props.model} index = {this.props.index} ifClicked = {this.props.ifClicked} 
                        renderPage = {this.props.renderPage} onClickVote = {this.props.onClickVote} onClickDec = {this.props.onClickDec} loggedIn = {this.props.loggedIn} 
                        answerIndex = {j} id = {id} /> // have to make this 5 at a time.
                    )
                }
                else{
                    // call a new function with index = j and a new page, thats it.
                    // set answerTags = []
                    // answerTags = [];
                    
                    if(i < (this.props.current + 10)){
                    secondTags.push(<DisplayAnswers model = {this.props.model} index = {this.props.index} ifClicked = {this.props.ifClicked} 
                        renderPage = {this.props.renderPage} onClickVote = {this.props.onClickVote} onClickDec = {this.props.onClickDec} loggedIn = {this.props.loggedIn} 
                        answerIndex = {j} id = {id} />)
                    }
                }
            }

           
            //  = this.props.model.questions[0][this.props.index].answers[0][i].text;
            // var textTemp = this.props.model.questions[0][this.props.index].answers.length; // id here. -> iterate through answerDetials to find it
            // console.log("h_e: " + this.props.model.questions[0][this.props.index].answers[i]);
            // var textHere = null;
            // axios.post('http://localhost:8000/textForAnswer', {id: textTemp}).then((resp) => {
            //     this.setState(textHere: resp)
            // });
            // console.log("Okay_c: " );
            // console.log(textTemp);
            // textHere = this.props.model.questions[0][this.props.index].answers[0][i].text;
            console.log("votes: " + j);
            this.state.indexNow = j;
            console.log("id_: " + id);
            let ifLoggedIn = <></>;
            console.log("okay=: " + this.props.loggedIn);
            if(this.props.loggedIn){
                ifLoggedIn = 
                <>
                <button id = "forButtonReactHere0" className = "notMiddleQuestion" onClick = {this.helperHere}> Like </button>   
                <button id = "forButtonReactHere0" className = "notMiddleQuestion" onClick = {this.helperHereDec} > Dislike </button> 
                </>
            }

            
           
            // console.log(this.props.model.answerDetails[j].votes);
            
            // uncomment
            // answerTags.push(
            //     <tr>
            //         <td id = "forAsetecticsLeft"> {textHere} <br></br> {this.props.model.answerDetails[j].votes} Votes <br></br> 
            //         {ifLoggedIn}
            //         </td> 
            //         <td className = "twoQuestions"> {this.getAnsweredBy(id)} </td>
                    
            //         {/* <td className = "twoQuestions"> {this.getAnsweredBy(this.props.index)} </td> */}
            //     </tr>
            // ); // need BUTTONs above ^ 
            // answerTags.push(<hr id = "forHr"></hr>); 
            //uncomment above 

            i += 1;
        }

        let next = <></>;
            let prevouis = <></>;
            if(this.props.model.questions[0][this.props.index].answers.length > 5){
                next = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.nextHere} > Next </button>
                prevouis = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.prev} > Prevouis </button> 
            }
        // console.log("here_ " + this.props.index);
        let answerQ = <></>
        if(this.props.loggedIn){
            answerQ = <td> <button id = "forButtonReact03" className = "notMiddleQuestion" onClick = {this.props.ifClicked}> Answer Question </button> </td>  
        }
        let askQ = <></>
        if(this.props.loggedIn){
            askQ =  <td> <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.renderPage}> 
            Ask a Question </button> </td>
        }
        else{
            askQ = <td> <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.renderRegister}> 
            Register </button>  
            <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.login}> 
            Login </button>
            </td>
        }
        return (
            <>
            <table id = "questions">
                <tbody>
                    <tr className = "questionRow">
                        <td id = "reactQuestionDisplay02" className = "notMiddleQuestion"> {this.props.model.questions[0][this.props.index].answers.length } Answers </td>
                        <td id = "reactQuestionDisplay02" className = "middleQuestion"> {this.props.model.questions[0][this.props.index].title} </td>
                        {askQ}
                    </tr>
                    <tr>
                        <td id = "reactQuestionDisplay02" className = "notMiddleQuestion"> {this.props.model.questions[0][this.props.index].views} Views </td>
                        <td id = "reactQuestionDisplay02">  {this.props.model.questions[0][this.props.index].text} </td> 
                        <td id = "makrItRight" className = "notMiddleQuestion"> {this.askedBy()} </td>
                    </tr>
                {/* Create a border bottom for here */}
                <hr id = "forHr"></hr>
                </tbody>
            </table>
            {/* <hr id = "forHr"></hr> */}
            <table className = "tableReact">
                <tbody>
                    {answerTags}
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
            <table className = "answerQButton"> 
                <tbody>
                    <tr>
                        {answerQ}
                    </tr>
                </tbody>
            </table>
            </>
        );
    }
}