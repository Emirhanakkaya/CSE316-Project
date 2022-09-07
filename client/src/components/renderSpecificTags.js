import React from 'react';
// import Model from '../models/model.js';
import DisplayRows from './displayQuestionsRows.js';

export default class SpecificTags extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentIndex: 0, indexForInc: 0, index: 0};
        this.handleCurrentIndex = this.handleCurrentIndex.bind(this);
    }

    handleCurrentIndex = (event) => {
        
        console.log("event.target.id: " + event.target.id);
        this.helperForRendering(event.target.id);
      }

    findLength(size){
        if(size === 1) { return 1 + " Question"}
        else { return size + " Questions"}
    }

    getNumAnswers(size){
        if(size === 1) { return 1 + " Answer"}
        else { return size + " Answers"}
    }

    getNumOfViews(size){
        if(size === 1) { return 1 + " View"}
        else { return size + " Views"}
    }

    helperForRendering(){
        // console.log("HERE:" + (index));
        this.props.onClickRender(this.state.indexForInc);
    }

    getAskedBy(index){
        let arr = [];
        
        arr.push(<p id = "displayINline">{" Asked by"}</p>);
        arr.push( <p id = "colorHERE"> {this.props.model.questions[0][index].asked_by}</p>);
        arr.push(<br></br>);
        arr.push(<p id = "displayINline">{"On "}</p>);
        let date = "" + this.props.model.questions[0][index].ask_date_time;

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

        arr.push(<p id = "greenColorHere"> { date } </p>);
        arr.push(<br></br>);
        
        time = time.substring(time.indexOf('T'), time.indexOf(':') + 3);
        arr.push(<p id = "displayINline">{"At "}</p>);
        arr.push(<p id = "lightBlueColor"> {time } </p>);
        return arr;
    }

    getSummary(index){
        if(this.props.model.questions[0][index].summary){
            return "summary: " + this.props.model.questions[0][index].summary;
        }
        else{
            return "";
        }
    }

    toReturnSpans(tags){
        let withSpans = tags.map((tag, index) => 
            <span key = {index} className = "spanTag"> {tag} </span> 
        )
        return withSpans;
    }

    beforeForTagEdit = () => {
        console.log("this.props.model.questions[0][this.state.index].tags: " + this.props.model.questions[0][this.state.index].tags)
        // this.props.handleForTags(this.props.model.questions[0][this.state.index].tags);
        let i = 0;
        let toPush = [];
        while(i < this.props.model.questions[0][this.state.index].tags.length){
            console.log("i: " + this.props.model.questions[0][this.state.index].tags[i])
            let j = 0;
            while (j < this.props.model.tagNames.length){
                console.log("j: " + this.props.model.tagNames[j]._id);
                if(this.props.model.questions[0][this.state.index].tags[i] === this.props.model.tagNames[j]._id){
                    toPush.push(this.props.model.tagNames[j].name);
                }   
                j += 1;
            }
            i += 1;
        }
        
        console.log("toPush: " + toPush);
        this.props.handleForTags(toPush);
        console.log("this.state.index1: " + this.state.index);
        this.props.editTagIndex(this.state.index);
        this.props.onEditClick();
    }
    
    getTags(index){
        let i = 0;
        let tagsForQuestions = [];
        console.log("AGRI");
        // console.log(this.props.model.questions[0][index].tags.length);
        while(i < this.props.model.questions[0][index].tags.length){
            let id = this.props.model.questions[0][index].tags[i]; // is the id.
            console.log("ANKARA: " + id)
            tagsForQuestions.push(this.props.model.questions[0][index].tags[i]); // all the id's
            i += 1;
        }
        i = 0;
        let tagsToReturn = [];
        while (i < tagsForQuestions.length){
            let j = 0;
            while(j < this.props.model.tagNames.length){
                if(this.props.model.tagNames[j]._id === tagsForQuestions[i]){
                    tagsToReturn.push(this.props.model.tagNames[j].name + " ");
                    }
                j += 1;
            }
            i += 1; 
        }
        return this.toReturnSpans(tagsToReturn);
    }

    helperForIncrement = () => {
        console.log("here12: " + this.state.indexForInc);
        this.props.inc(this.state.indexForInc);
    }

    render(){
        // console.log(this.props.index);
        var i = 0;
        var lookingFor = 't' + (this.props.index + 1);
        console.log("ALLLOOO" + this.props.index);
       
        
        console.log(this.props.model.tagNames);
        var name = this.props.model.tagNames[this.props.index]._id;
        console.log("NAME: " + name);
        console.log("LOOKing FOR: " + lookingFor);
        var arr = [];
        while(i < this.props.model.questions[0].length){
            var j = 0;
            while(j < this.props.model.questions[0][i].tags.length){
                console.log("IST: " + name);
                console.log(this.props.model.questions[0][i].tags[j]);
                if(name === this.props.model.questions[0][i].tags[j]){
                    arr.push(i + 1); // question _
                    break;
                }
                j += 1;
            }
            i += 1;
        }
        name = this.props.model.tagNames[this.props.index].name;
        console.log("ARR: " + arr);
        console.log(this.props.model.questions[0]);
        let output = [];
        i = 0;
       
        j = 0;
        
        let otherOutput = []
        let thisOutput = []
        if(arr.length < 5){
        // while(j < arr.length){
        //     console.log("index props: " + this.props.index);
        //     console.log(arr);
        //     this.state.indexForInc = arr[j] - 1;
        //     console.log("senin1: " + this.state.indexForInc);
        //     var tempJ = arr[j] -1; //console.log("arr[j]: " + arr[j]);
        //     console.log("tempJ: " + tempJ);

        //     output.push(
        //     <tr className = "questionRow">
        //         <td id = "reactQuestionDisplay02" className = "notMiddleQuestion" >{this.getNumAnswers(this.props.model.questions[0][arr[j] -1].answers.length)} 
        //          <br></br> {this.getNumOfViews(this.props.model.questions[0][arr[j] -1].views)} 
        //          <br></br> {this.props.model.questions[0][arr[j] -1].votes} Votes <br></br>
        //         <button id = "forButtonReactHere04" className = "notMiddleQuestion" onClick = {this.helperForIncrement} > Like </button>   
        //         <button id = "forButtonReactHere04" className = "notMiddleQuestion"  > Dislike </button>
        //          </td>
        //         <td id = "reactQuestionDisplay" className = "middleQuestion" ><a id = {tempJ} onClick = {this.handleCurrentIndex} className = "linky" >
        //             {this.props.model.questions[0][arr[j] -1].title} <br></br> {this.getTags(tempJ)} </a> <br></br> {this.getSummary(arr[j]-1)} </td>
        //         <td id = "makrItRight" className = "middleQuestion" > {this.getAskedBy(arr[j] -1)} </td>
        //         <br></br>
        //     </tr>
        //     )
        //     j += 1;
        // }
        while(i < arr.length){
            console.log("i: " + i);
          //   otherOutput.push(<tr className = "questionRow">
          //     <td id = "reactQuestionDisplay02" className = "notMiddleQuestion" >{this.getNumAnswers(this.props.model.questions[0][arr[i] -1].answers.length)} 
          //      <br></br> {this.getNumOfViews(this.props.model.questions[0][arr[i] -1].views)} </td>
          //     <td id = "reactQuestionDisplay" className = "middleQuestion" ><a id = {tempJ} onClick = {this.handleCurrentIndex} className = "linky" >
          //         {this.props.model.questions[0][arr[i] -1].title} <br></br> {this.getTags(tempJ)} </a></td>
          //     <td id = "makrItRight" className = "middleQuestion" > {this.getAskedBy(arr[] -1)} </td>
          //     <br></br>
          // </tr>);
          
            thisOutput.push(<DisplayRows question = {this.props.model.questions[0][arr[i] -1]} key = {i} tags = {this.props.model.tagNames} 
            forOnClickHere = {this.props.onClickRender}
                index = {arr[i] -1} back = {this.props.back} model = {this.props.model} newIndex = {this.props.newIndex} 
                inc = {this.props.inc} dec = {this.props.dec}  loggedIn = {this.props.loggedIn}
                comments = {this.props.comments} commentIndexHere = {this.props.commentIndexHere}/> // have to make this 5 at a time.
            )
            i += 1;
            console.log(otherOutput);
        }
            

        }
        else{
            let i = this.props.indexHere;
          // 1 => 5 ? 
          let upTo = 0
          console.log("ii: " + i);
          if(i !== 0){
              let remaining = (arr.length) % 5;
              console.log("result.length: " + arr.length);
              console.log("allllloooooo");
              console.log("remaining: " + remaining)
              if(this.props.indexHere <= (arr.length - 5)){
                  upTo = i + 5;
              }
              else{
                  upTo = i + remaining;
              }
          }
          else{
              upTo = 5;
          }
          console.log("amina: " + upTo);
          console.log(arr[0]);
          while(i < upTo){
              console.log("i: " + i);
            //   otherOutput.push(<tr className = "questionRow">
            //     <td id = "reactQuestionDisplay02" className = "notMiddleQuestion" >{this.getNumAnswers(this.props.model.questions[0][arr[i] -1].answers.length)} 
            //      <br></br> {this.getNumOfViews(this.props.model.questions[0][arr[i] -1].views)} </td>
            //     <td id = "reactQuestionDisplay" className = "middleQuestion" ><a id = {tempJ} onClick = {this.handleCurrentIndex} className = "linky" >
            //         {this.props.model.questions[0][arr[i] -1].title} <br></br> {this.getTags(tempJ)} </a></td>
            //     <td id = "makrItRight" className = "middleQuestion" > {this.getAskedBy(arr[] -1)} </td>
            //     <br></br>
            // </tr>);
            
              otherOutput.push(<DisplayRows question = {this.props.model.questions[0][arr[i] -1]} key = {i} tags = {this.props.model.tagNames} 
              forOnClickHere = {this.props.onClickRender}
                  index = {arr[i] -1} back = {this.props.back} model = {this.props.model} newIndex = {this.props.newIndex} 
                  inc = {this.props.inc} dec = {this.props.dec}  loggedIn = {this.props.loggedIn}
                  comments = {this.props.comments} commentIndexHere = {this.props.commentIndexHere}/> // have to make this 5 at a time.
              )
              i += 1;
              console.log(otherOutput);
          }
        }

        let userName = <></>;
        if(this.props.loggedIn) { 
            console.log("ors: " + this.props.username);
            userName =  <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.profile} > {this.props.usernameHere} </button>
        }
        let next = <></>;
        let prevouis = <></>;
        if(arr.length > 5){
            next = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.nextFive} > Next </button>
            prevouis = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.prev} > Prevouis </button> 
        }

        //() => this.helperForRendering(tempJ)
        // let questionsHere = this.props.model.data.questions.map((question, index) => (
        //     <DisplayRows question = {question} key = {index} tags = {this.props.model.data.tags} forOnClick = {this.props.onClickRender}
        //     index = {index}/>
        //     )
        // )
        let askAQuestionOrNot = <></>;
        let secondOne = <></>;
        if(this.props.loggedIn){
            askAQuestionOrNot = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.renderPage}> Ask a Question </button>  
        }
        else{
            askAQuestionOrNot = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.registerHandle}> Register </button>
            secondOne = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.loginUser}> Log In </button>
        }

        let editButton = <></>
        if(this.props.edit === 1 && this.props.loggedIn){
            if(arr.length > 1){
                editButton = <button id = "forButtonReact" className = "notMiddleQuestion" > Cannot Edit Tag - more than one question associated here </button>
            }
            else{
                this.state.index = arr[0] - 1;
                editButton = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.beforeForTagEdit}> Edit Tag </button>
            }
        }
        
        return (
            <>
            <table id = "questions">
                <tbody>
                    <tr className = "questionRow">
                        <td id = "reactQuestionDisplay02" className = "notMiddleQuestion"> {this.findLength(arr.length)} </td>
                        <td id = "reactQuestionDisplay02" className = "middleQuestion"> Questions Tagged [{name}] </td>
                        {askAQuestionOrNot}
                        {secondOne}
                        {userName}
                    </tr>
                </tbody>
            </table>
            
            <table id = "questions">
                <tbody>
                    {thisOutput}
                    {otherOutput}
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
            {editButton}
            </>
        )
    }

}