import React from 'react';
// import Model from '../models/model.js';
import DisplayRows from './displayQuestionsRows.js';
import ClassQuestion from './questionHeader.js';

export default class SearchBar extends React.Component {
    constructor(props){
      super(props);
      this.state = {length: 0}
      this.hanleLengthChange = this.hanleLengthChange.bind(this);
    }

    hanleLengthChange = () => {
      console.log("ST: " + this.state.length);
      this.props.handleIt(this.state.length);
    }

    iterateThroughText(value){
        let i = 0;
        let tempArr = [];
        let valueArr = [];
        valueArr = value.split(' ');

        while(i < valueArr.length){
          valueArr[i] = valueArr[i].toLowerCase();
          i += 1;
        }
        i = 0;

        // console.log(valueArr);
        let j = 0;
        while(i < this.props.model.questions[0].length){
          j = 0;
          while(j < valueArr.length){
            var tempText = this.props.model.questions[0][i].text.toLowerCase();
            var tempTitle = this.props.model.questions[0][i].title.toLowerCase();
            if(tempText.includes(valueArr[j]) || tempTitle.includes(valueArr[j])){
              tempArr.push(this.props.model.questions[0][i]);
            }
            
            j += 1;
          }
          i += 1;
        }
        return tempArr;
    }

    iterateThroughForTags(value){
        let i = 0;
        let tempArr = [];
        let tagArr = [];
        tagArr = value.split(' ');

        while(i < tagArr.length){
          tagArr[i] = tagArr[i].toLowerCase();
          i += 1;
        }

        console.log("HERE: ");
        console.log(tagArr);
        i = 0;
        let j = 0;
        while(i < this.props.model.tagNames.length){
          j = 0; 
          while(j < tagArr.length){
            var text = tagArr[j] + "";
            if(text.charAt(0) === '[' && text.charAt(text.length - 1) === ']'){
              text = text.substring(1, text.length - 1);
              text = text.toLowerCase();
              console.log(text);
            }
            else{
              j += 1;
              continue;
            }
            
            var tempName = "" + this.props.model.tagNames[i].name;
            tempName = tempName.toLowerCase();
            // console.log("length: \n" + this.props.model.tagNames[0].length);
            // console.log("TEMPNAME: " + tempName);
            // console.log("TEXT: " + text);
            console.log("tempName: " + tempName);
            console.log("text: " + text);
            if(tempName === text){
              tempArr.push(this.props.model.tagNames[i]._id);
            }
            j += 1;
          }
          i += 1;
        }
        console.log("TEMPARR: " + tempArr);
        return tempArr;
      }

    displayQuestionsAndTags(questionsFound, tagsFound){
        let indexHere = 0;
        let indicesForTags = [];
        let set = new Set();
        console.log("questions.:");
        console.log( this.props.model.questions);
        console.log("tag: " + tagsFound);
        
        while(indexHere < this.props.model.questions[0].length){
          let secondIndex = 0;
          while(secondIndex < this.props.model.questions[0][indexHere].tags.length){
            let thirdIndex = 0;
            console.log("HEREE__: " + tagsFound);
            while(thirdIndex < tagsFound.length){
              console.log("model: " + this.props.model.questions[0][indexHere].tags[secondIndex] );
              console.log("tagsFound: " + tagsFound[thirdIndex]);
              if(this.props.model.questions[0][indexHere].tags[secondIndex] === tagsFound[thirdIndex]){
                let temp = this.props.model.questions[0][indexHere]._id;
                console.log("count this");
                if(!set.has(temp)){
                    set.add(temp);
                    indicesForTags.push(this.props.model.questions[0][indexHere]); // the questions i need to display for the tags.
                }
                break;
              }
              thirdIndex += 1;
              console.log("set:");
              console.log(set);
            }
            secondIndex += 1;
          }
          indexHere += 1;
        }
        indexHere = 0;
        while(indexHere < questionsFound.length){
            let secondIndex = 0;
            while(secondIndex < this.props.model.questions[0].length){
              if(questionsFound[indexHere] === this.props.model.questions[0][secondIndex]){
                var temp = questionsFound[indexHere].qid; 
                if(!set.has(temp)){
                    set.add(temp);
                    indicesForTags.push(this.props.model.questions[0][secondIndex]);
              }
            }
            secondIndex += 1;
          }
          indexHere += 1;
        }
        this.state.length = indicesForTags.length;
        console.log("burak" + indicesForTags.length);
        this.hanleLengthChange();
        
        return indicesForTags;
    }

    getQuestions(total){
      if(total === 1) { return 1 + " Question"; }
      else { return total + " Questions"; }
    }

    render(){

        console.log("toLook For: ");
        let toFind = this.props.searched;
        let result = [];
        toFind = toFind.trim();
        if(toFind.length === 0){
            return  <h1> No Questions Found! </h1>
        }

        let questionsFound = this.iterateThroughText(toFind);
        let tagsFound = this.iterateThroughForTags(toFind);
        console.log("questionsFOund");
        console.log(questionsFound);
        if(questionsFound.length !== 0 || tagsFound.length !== 0){
            console.log(questionsFound);
            result = this.displayQuestionsAndTags(questionsFound, tagsFound);
        }
        else{
            return  <h1> No Questions Found! </h1>
        }
        
        console.log("YAGLI: ");
        console.log(result);
        console.log(result[0]._id);
        
        console.log("result: ");
        console.log(result);
        let moreThanFive = [];
        let lessThanFive = [];
        let questionsHere = null;
        
        if(result.length < 5){
          console.log("lan:::");
          console.log(result);
          let i = 0;

          
          while(i < result.length){
            console.log("i: " + i);
            console.log("yeo: ");
            console.log(result[i]);
            let j = 0;
            let index = 0;
            while(j < this.props.model.questions[0].length){
              if(result[i]._id === this.props.model.questions[0][j]._id){
                index = j;
                break;
              }
              j += 1;
            }
            lessThanFive.push(<DisplayRows question = {result[i]} key = {i} tags = {this.props.model.tagNames} 
            forOnClickHere = {this.props.onClickRender}
                index = {index} back = {this.props.back} model = {this.props.model} newIndex = {this.props.newIndex}
                inc = {this.props.inc} dec = {this.props.dec}  loggedIn = {this.props.loggedIn}
                comments = {this.props.comments} commentIndexHere = {this.props.commentIndexHere}/> 
            )
            i += 1;
            console.log(moreThanFive);
        }

          //   questionsHere = result.map((question, index) => (
          //   <DisplayRows question = {question} key = {index} tags = {this.props.model.tagNames} forOnClickHere = {this.props.onClickRender}
          //     id = {result[index]._id} index = {index} model = {this.props.model} inc = {this.props.inc} />
          //   )
          // )
        }
        else{
          let i = this.props.indexHere;
          // 1 => 5 ? 
          let upTo = 0
          console.log("ii: " + i);
          if(i !== 0){
              let remaining = (result.length) % 5;
              console.log("result.length: " + result.length);
              console.log("allllloooooo");
              console.log("remaining: " + remaining)
              if(this.props.indexHere <= (result.length - 5)){
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
          console.log(result);
          while(i < upTo){
              console.log("i: " + i);
              console.log("yeo: ");
              console.log(result[i]);
              let j = 0;
              let index = 0;
              while(j < this.props.model.questions[0].length){
                if(result[i]._id === this.props.model.questions[0][j]._id){
                  index = j;
                  break;
                }
                j += 1;
              }
              moreThanFive.push(<DisplayRows question = {result[i]} key = {i} tags = {this.props.model.tagNames} 
              forOnClickHere = {this.props.onClickRender}
                  index = {index} back = {this.props.back} model = {this.props.model} newIndex = {this.props.newIndex}
                  inc = {this.props.inc} dec = {this.props.dec}  loggedIn = {this.props.loggedIn} 
                  comments = {this.props.comments} commentIndexHere = {this.props.commentIndexHere}/> 
              )
              i += 1;
              console.log(moreThanFive);
          }
          // questionsHere = this.props.model.questions[0].map((question, index) => (
          //     <DisplayRows question = {question} key = {index} tags = {this.props.model.tagNames} forOnClickHere = {this.props.onClickRenderHere}
          //         index = {index} back = {this.props.back} model = {this.props.model} newIndex = {this.props.newIndex} /> // have to make this 5 at a time.
          //     )
          // )
      }

        let userName = <></>;
        if(this.props.loggedIn) { 
            userName = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.profile}> {this.props.username} </button>
        }

        let next = <></>;
        let prevouis = <></>;
        if(result.length > 5){
            next = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.nextFive} > Next </button>
            prevouis = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.prev} > Prevouis </button> 
        }

        let askAQuestionOrNot = <></>;
        let secondOne = <></>;
        if(this.props.loggedIn){
            askAQuestionOrNot = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.renderPage}> Ask a Question </button>  
        }
        else{
            askAQuestionOrNot = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.registerHandle}> Register </button>
            secondOne = <button id = "forButtonReact" className = "notMiddleQuestion" onClick = {this.props.loginUser}> Log In </button>
        }
        

        return (
          <>
          <table id = "questions"> 
              <tbody>
                  <tr className = "questionRow">
                      <td id = "reactQuestionDisplay02" className = "notMiddleQuestion"> {this.getQuestions(result.length)} </td> 
                      <td id = "reactQuestionDisplay02" className = "middleQuestion"> All Questions </td>
                      {askAQuestionOrNot}
                      {secondOne}
                      {userName} 
                   </tr>   

                  {lessThanFive}
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
        )
    }
}