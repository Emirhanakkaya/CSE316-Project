import React from 'react';

// import Model from '../models/model.js';
import ClassBanner from './banner.js';
import ClassQuestion from './questionHeader.js';
import ClassNewQuestion from './newQuestion.js';
import ReactDOM from 'react-dom';
// import { getAllByPlaceholderText, render } from '@testing-library/react';
import DisplayTags from './displayTags.js';
// import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import DisplayAllTags from './tagsWithSpan.js';
import DisplayAllAnswers from './displayAnswers.js';
import AnswerIt from './answerQuestions.js';
import SpecificTags from './renderSpecificTags.js';
import SearchBar from './searching.js';
import WelcomePage from './welcomePage.js';
import SignUpUser from './newUser.js';
import BannerSignUp from './bannerForSignUp.js';
import LoginPage from './login.js';
import BannerLogin from './bannerForLogin.js';
import ProfilePage from './profile.js';
import DisplayFive from './displayFive.js';
import DisplayFiveAnswers from './displayFiveAnswers.js';
import Comments from './comments.js';
import ClassNewComment from './newComment.js';
import DisplayThree from './displayThree.js';
import CommentsAnswers from './commentsAnswers.js';
import DisplayThreeAnswers from './displayThreeAnswers.js';
import ClassNewQuestionEdit from './newQuestionEdit.js';
import DisplayEditTags from './editTags.js';
import ClassNewTagEdit from './newTagEdit.js';
import EditAnswers from './displayEditAnswers.js';
import DisplayEditAnswer from './editAnswer.js';

const axios = require('axios');
//checking if comitted correctly


// author: Emirhan Akkaya || eeakkaya
// May 07, 2022
// CSE 316: Final Project
export default class FakeStackOverflow extends React.Component {
  // html for above:
  //page:
  // 0 = default row of questions
  // 1 = displayAsk A Question 
  constructor(props){
    super(props);
    this.state = {pageNumber: 9, model: null, questions: [], filterText: "", filterTitle: "", filterTags: "", summary: "",
      errorsForQuestion: "", search: "", currentQuestion: null, index: 0, filterAnswer: "", filterAnswerUsername: "",
      userNameLogin: "", email: "", password: "", validatePassword: "", loginEmail: "", loginPassword: "", userNameForPage: "", fiveIndex: 0, 
      indexForTag: 0, maxLengthTags: 0, maxQuestionLength: 0, maxAnswers: 0, newComment: "", commentIndex: 0, threeIndex: 0,
      commentIndexAnswer: -1, threeIndexAnswers: 0, editQuestionIndex: 0, editFlag: 0, editTagIndex: 0, idForAnswers: 0, idForDeleteNow: 0,
    };
  }

  componentDidMount(){ 
    axios.get('http://localhost:8000/').then(resp => {
      resp.data.questions[0].reverse();
      this.setState({model: resp.data});
    });
  }

  handleIdForDelete = (idForDeleteNowHm) => {
    console.log("seref: " + idForDeleteNowHm);
    this.state.idForDeleteNow = idForDeleteNowHm;
    // this.setState({
    //   idForDeleteNow: idForDeleteNowHm
    // })
  }

  handleIdForAnswers = (idForAnswers) => {
    this.setState({
      idForAnswers: idForAnswers
    })
  }

  handleEditTagIndex = (editTagIndex) => {
    this.setState({
      editTagIndex: editTagIndex
    })
  }

  handleEditTagNow = (editFlag) => {
    this.setState({
      editFlag: editFlag
    })
  }

  handleEditQuestionIndex = (editQuestionIndex) => {
    this.setState({
      editQuestionIndex: editQuestionIndex
    })
  }

  handleThreeIndexAnswer = (threeIndexAnswers) => {
    this.setState({
      threeIndexAnswers: threeIndexAnswers
    });
  }

  handleCommentIndexAnswer = (commentIndexAnswer) => {
    this.setState({
      commentIndexAnswer: commentIndexAnswer
    });
  }

  handleThreeIndex = (threeIndex) => {
    this.setState({
      threeIndex: threeIndex
    });
  }

  handleCommentIndex = (commentIndex) => {
    this.setState({
      commentIndex: commentIndex
    });
  }

  handleNewComment = (newComment) => {
    this.setState({
      newComment: newComment
    });
  }

  handleMaxAnswers = (maxAnswers) => {
    this.setState({
      maxAnswers: maxAnswers
    });
  }

  handleMaxQuestionLength = (maxQuestionLength) => {
    this.setState({
      maxQuestionLength: maxQuestionLength
    })
  }

  handleMaxLengthTags = (maxLengthTags) => {
    this.setState({
      maxLengthTags: maxLengthTags
    })
  }

  handleIndexForTag = (indexForTag) => {
    console.log("Bat: " + indexForTag);
    this.setState({
      indexForTag: indexForTag
    })
  }

  handleFiveIndex = (fiveIndex) => {
    this.setState({
      fiveIndex: fiveIndex
    })
  }

  handleLogin = (loginEmail) => {
    this.setState({
      loginEmail: loginEmail
    })
  }

  handleLoginPassword = (loginPassword) => {
    this.setState({
      loginPassword: loginPassword
    })
  }

  handleUserName = (userNameLogin) => {
    this.setState({
      userNameLogin: userNameLogin
    })
  }

  handleEmail = (email) => {
    this.setState({
      email: email
    })
  }

  handlePassword = (password) => {
    this.setState({
      password: password
    })
  }

  handleValidatePassword = (validatePassword) => {
    this.setState({
      validatePassword: validatePassword
    })
  }
  

  handleFilterAnswer = (filterAnswer) =>{
    this.setState({
      filterAnswer: filterAnswer
    })
  }

  handleFilterAnswerUsername = (filterAnswerUsername) =>{
    this.setState({
      filterAnswerUsername: filterAnswerUsername
    })
  }

  handleSearchChange = (searchChange) =>{
    this.handleFiveIndex(0);
    this.handleThreeIndex(0);
    this.handleThreeIndexAnswer(0);
    this.handleMaxAnswers(0);
    this.setState({
      search: searchChange
    })
  }

  handleErrorChange = (errorChange) =>{
    if(errorChange.length > 0){
      this.setState({
        errorsForQuestion: errorChange
      })
    }
    else{
      this.setState({
        errorsForQuestion: errorChange
      })
    }
  }

  handleUserNamePage = (userNameForPage) => {
    this.setState({
      userNameForPage: userNameForPage
    })
  }

  handleIndexChange = (newIndex) =>{
    this.setState({
      index: newIndex
    })
  }

  handleSummaryChange = (summary) =>{
    this.setState({
      summary: summary
    })
  }

  handleFilterTagsChange = (filterTags) => {
    this.setState({
      filterTags: filterTags
    })
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText
    });
  }

  handleFilterTitleChange = (filterTitle) => {
    this.setState({
      filterTitle: filterTitle
    })
  }

  incrementVoteForQuestion = (questionIndex, index) => { // also have to increase the user reputation w/ assoicated user for this question by 5 points
    let model = this.state.model;
    let pageNumber = 0;
    if(this.state.pageNumber !== 13 || this.state.pageNumber !== 0){
      pageNumber = this.state.pageNumber
    }
    else{ pageNumber = 13; }
    console.log("questionINdex: " + questionIndex);
    // console.log(this.model.questions.ewgrionergi);
    let i = 0;
    let id2 = 0;
    while(i < this.state.model.users.length){
      console.log("here: ");
      console.log(this.state.model.users[i]);
      if(this.state.model.users[i].email === this.state.loginEmail){
        id2 = this.state.model.users[i]._id
      }
      i += 1;
    }
    axios.post('http://localhost:8000/updateVotesForQuestion',
      {
        id: model.questions[0][questionIndex]._id,
        id2: id2,
        votes: model.questions[0][questionIndex].votes
      }).then(resp => {
        console.log("resp.data: " + resp.data);
        if(resp.data === "okay"){
          model.questions[0][questionIndex].votes += 1;
          axios.post('http://localhost:8000/increaseReputation', // used same "reputation" function here.
            {
              id: this.state.model.questions[0][questionIndex].user[0] // id in here
            }).then(resp => {
              console.log("whats response");
              console.log(resp);
              axios.get('http://localhost:8000/').then(resp => { // was AXIOS
                resp.data.questions[0].reverse();
                this.setState({model: resp.data});
              });
              // this.state.model.questions[0].reverse();
            }).catch(err => {
              console.log("error:");
              console.log(err);
            });;
            this.setState((prevState) => ({
              pageNumber: pageNumber, // this may have to be 0, not entirely sure yet. [.]
            }));
          }
        else{
          console.log("in else");
          return; // can't update.
        }
      });
  
    // now increase reputation in "index". 
    console.log(this.state.model.questions[0][questionIndex]);
  }

  incrementVoteForAnswerFive = (questionIndex, index) => { // also have to increase the user reputation w/ assoicated user for this question by 5 points
    let model = this.state.model;
    console.log("questionINdex: " + questionIndex);
    let id2 = 0;
    let k = 0;
    console.log(this.state.model);
    while(k < this.state.model.users.length){
      if(this.state.model.users[k].email === this.state.loginEmail){
        id2 = this.state.model.users[k]._id;
      }
      k += 1;
    }
    
    axios.post('http://localhost:8000/updateVotesForAnswer',
      {
        id: model.answerDetails[questionIndex]._id,
        id2: id2,
        votes: model.answerDetails[questionIndex].votes
      }).then(resp => {
        console.log("resp.data: " + resp.data);
        if(resp.data === "okay"){
          console.log("in it: " + this.state.model.questions[0][index].user[0]);
          model.answerDetails[questionIndex].votes += 1;
          axios.post('http://localhost:8000/increaseReputation', // increases reputation by 5, now need to decrease for downvote.
            {
              id: this.state.model.questions[0][index].user[0] // id in here
            }).then(resp => {
              console.log("whats response");
              console.log(resp);
              axios.get('http://localhost:8000/').then(resp => { // was AXIOS
                resp.data.questions[0].reverse();
                this.setState({model: resp.data});
              });
              // this.state.model.questions[0].reverse();
            }).catch(err => {
              console.log("error:");
              console.log(err);
            });;
            this.displayNextFiveAnswers();
          }
        else{
          this.displayNextFiveAnswers();
          console.log("in else");
          return; // can't update.
        }
      });
  
    // now increase reputation in "index". 
    console.log(this.state.model.questions[0][index]);
    
  }

  incrementVoteForAnswer = (questionIndex, index) => { // also have to increase the user reputation w/ assoicated user for this question by 5 points
    let model = this.state.model;
    console.log("questionINdex: " + questionIndex);
    let name = this.state.model.answerDetails[questionIndex]._id;
    console.log("name: " + name);
    let i = 0;
    // while(i < this.state.model.questions[0].length){ // whoami ?
    //   let j = 0;
    //   while(j < this.state.model.questions[0][i].answers.length){
    //     console.log("id's: " + this.state.model.questions[0][i].answers[j]._id);
    //     if(this.state.model.questions[0][i].answers[j]._id === name){
    //       index = j;
    //       break;
    //     }
    //     j += 1;
    //   }
    //   i += 1;
    // }
    console.log("index: " + index);
    console.log("username: " + this.state.loginEmail);
    let k = 0;
    let id2 = 0;
    console.log(this.state.model);
    while(k < this.state.model.users.length){
      if(this.state.model.users[k].email === this.state.loginEmail){
        id2 = this.state.model.users[k]._id;
      }
      k += 1;
    }
    console.log("id2: " + id2);

    axios.post('http://localhost:8000/updateVotesForAnswer',
      {
        id: model.answerDetails[questionIndex]._id,
        id2: id2,
        votes: model.answerDetails[questionIndex].votes,
        comments: ""
      }).then(resp => {
        console.log("resp.data: " + resp.data);
        if(resp.data === "okay"){
          console.log("in it: " + this.state.model.questions[0][index].user[0]);
          model.answerDetails[questionIndex].votes += 1;
          axios.post('http://localhost:8000/increaseReputation', // increases reputation by 5, now need to decrease for downvote.
            {
              id: this.state.model.questions[0][index].user[0] // id in here
            }).then(resp => {
              console.log("whats response");
              console.log(resp);
              axios.get('http://localhost:8000/').then(resp => { // was AXIOS
                resp.data.questions[0].reverse();
                this.setState({model: resp.data});
              });
              // this.state.model.questions[0].reverse();
            }).catch(err => {
              console.log("error:");
              console.log(err);
            });;
            this.setState((prevState) => ({
              pageNumber: 5, 
              currentQuestion: index, 
              model: model
            }));
          }
        else{
          this.setState((prevState) => ({
            pageNumber: 5, 
            currentQuestion: index, 
            model: model
          }));
          console.log("in else");
          return; // can't update.
        }
      });
  
    // now increase reputation in "index". 
    console.log(this.state.model.questions[0][index]);
    
  }

  decrementVoteForQuestion = (questionIndex, index) => { // also have to increase the user reputation w/ assoicated user for this question by 5 points
    // if(this.state.model.questions[0][questionIndex].votes === 0){
    //   return;
    // }
    let model = this.state.model;
    let pageNumber = 0;
    if(this.state.pageNumber !== 13 || this.state.pageNumber !== 0){
      pageNumber = this.state.pageNumber
    }
    else{ pageNumber = 13; }
    console.log("questionINdex: " + questionIndex);
    // console.log(this.model.questions.ewgrionergi);
    let i = 0;
    let id2 = 0;
    while(i < this.state.model.users.length){
      console.log("here: ");
      console.log(this.state.model.users[i]);
      if(this.state.model.users[i].email === this.state.loginEmail){
        id2 = this.state.model.users[i]._id
      }
      i += 1;
    }
    console.log("this.state.loggedIn: " + this.state.loginEmail);
    console.log("this.state.model.questions[0][questionIndex].user[0]: " + this.state.model.questions[0][questionIndex].user[0]);
    axios.post('http://localhost:8000/updateVotesForQuestionDec',
      {
        id: model.questions[0][questionIndex]._id,
        id2: id2,
        votes: model.questions[0][questionIndex].votes
      }).then(resp => {
        console.log("resp.data: " + resp.data);
        if(resp.data === "okay"){
          model.questions[0][questionIndex].votes -= 1;
          axios.post('http://localhost:8000/decreaseReputation', // used same "reputation" function here.
            {
              id: this.state.model.questions[0][questionIndex].user[0] // id in here
            }).then(resp => {
              console.log("whats response");
              console.log(resp);
              axios.get('http://localhost:8000/').then(resp => { // was AXIOS
                resp.data.questions[0].reverse();
                this.setState({model: resp.data});
              });
              // this.state.model.questions[0].reverse();
            }).catch(err => {
              console.log("error:");
              console.log(err);
            });;
            this.setState((prevState) => ({
              pageNumber: pageNumber, // this may have to be 0, not entirely sure yet. [.]
            }));
          }
        else{
          console.log("in else");
          return; // can't update.
        }
      });
  
    // now increase reputation in "index". 
    console.log(this.state.model.questions[0][questionIndex]);
  }

  decrementVoteForAnswerFive = (questionIndex, index) => {
    let model = this.state.model;
    console.log("questionINdex: " + questionIndex);
    let id2 = 0;
    let k = 0;
    console.log(this.state.model);
    while(k < this.state.model.users.length){
      if(this.state.model.users[k].email === this.state.loginEmail){
        id2 = this.state.model.users[k]._id;
      }
      k += 1;
    }
    console.log("id2_: " + id2);
    // if(model.answerDetails[questionIndex].votes === 0){
    //   return;
    // }
    axios.post('http://localhost:8000/updateVotesForAnswerDec',
      {
        id: model.answerDetails[questionIndex]._id,
        votes: model.answerDetails[questionIndex].votes,
        id2: id2
      }).then(resp => {
        if(resp.data === "okay"){
          model.answerDetails[questionIndex].votes -= 1;
          axios.post('http://localhost:8000/decreaseReputation', // increases reputation by 5, now need to decrease for downvote.
            {
            id: this.state.model.questions[0][index].user[0] // id in here
            }).then(resp => {
              console.log("whats response");
              console.log(resp);
              axios.get('http://localhost:8000/').then(resp => { // was AXIOS
                resp.data.questions[0].reverse();
                this.setState({model: resp.data});
              });
              // this.state.model.questions[0].reverse();
            }).catch(err => {
              console.log("error:");
              console.log(err);
            });;
            this.displayNextFiveAnswers();
        }
        else{
          this.displayNextFiveAnswers();
          return; // can't update.
        }
      });
    
      
  }

  decrementVoteForAnswer = (questionIndex, index) => {
    let model = this.state.model;
    let id2 = 0;
    let k = 0;
    console.log(this.state.model);
    while(k < this.state.model.users.length){
      if(this.state.model.users[k].email === this.state.loginEmail){
        id2 = this.state.model.users[k]._id;
      }
      k += 1;
    }
    console.log("questionINdex: " + questionIndex);
    // if(model.answerDetails[questionIndex].votes === 0){
    //   return;
    // }
    axios.post('http://localhost:8000/updateVotesForAnswerDec',
      {
        id: model.answerDetails[questionIndex]._id,
        votes: model.answerDetails[questionIndex].votes,
        id2: id2
      }).then(resp => {
        if(resp.data === "okay"){
          model.answerDetails[questionIndex].votes -= 1;
          axios.post('http://localhost:8000/decreaseReputation', // increases reputation by 5, now need to decrease for downvote.
            {
            id: this.state.model.questions[0][index].user[0] // id in here
            }).then(resp => {
              console.log("whats response");
              console.log(resp);
              axios.get('http://localhost:8000/').then(resp => { // was AXIOS
                resp.data.questions[0].reverse();
                this.setState({model: resp.data});
              });
              // this.state.model.questions[0].reverse();
            }).catch(err => {
              console.log("error:");
              console.log(err);
            });;
          this.setState((prevState) => ({
            pageNumber: 5, 
            currentQuestion: index, 
            model: model
          }));
        }
        else{
          this.setState((prevState) => ({
            pageNumber: 5, 
            currentQuestion: index, 
            model: model
          }));
          return; // can't update.
        }
      });
  }

  renderAnswers = (questionIndex, id) => {
    let model = this.state.model;
    console.log("HEREE: " + questionIndex); // fix me
    console.log(id);
    console.log(this.state.model);
    
    if(id !== 0){
      let i = 0;
      while(i < this.state.model.questions[0].length){
        console.log("questionIndex: " + questionIndex);
        if(this.state.model.questions[0][i]._id === id){
          questionIndex = i;
          break;
        }
       i += 1;
      }
    }
    
    axios.post('http://localhost:8000/updateViews',
      {
        id: model.questions[0][questionIndex]._id,
        views: model.questions[0][questionIndex].views
      });
    model.questions[0][questionIndex].views += 1; // should be updating the database here. -> look throught documentnatino. 
    this.setState((prevState) => ({
      pageNumber: 5, 
      currentQuestion: questionIndex, 
      model: model
    }));
  }

  increaseAnswers = (index) => {
    let model = this.state.model;
    let length = model.data.questions[index].answers.length;
    model.data.questions[index].answers.push('a' + (length -1));
  }

  displayNewQuestion = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 2
    }));
  }

  displayTags = (newPageNumber) => {
    this.handleFiveIndex(0);
    this.handleThreeIndex(0);
    this.handleThreeIndexAnswer(0);
    this.handleMaxAnswers(0);
    this.handleFilterAnswer("");
    this.handleFilterAnswerUsername("");
    this.handleErrorChange([]);
    
    this.setState((prevState) => ({
      pageNumber: 3 
    }));
  }

  displaySpanTags = (newPageNumber) => { // display tags in a span element
    this.setState((prevState) => ({
      pageNumber: 4
    }));
  }

  displayWelcomePage = (newPageNumber) => {
    this.handleErrorChange([]);
    this.handleFiveIndex(0);
    this.handleThreeIndex(0);
    this.handleThreeIndexAnswer(0);
    this.handleMaxAnswers(0);
    this.handleLogin("");

    this.setState((prevState) => ({
      pageNumber: 9
    }));
  }

  connectNewUser = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 10
    }));
  }

  loginPage = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 11 
    }));
  }

  profilePage = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 12
    }));
  }

  displayNextFive = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 13
    }));
  }

  displayNextFiveAnswers = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 14
    }));
  }

  displayComments = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 15
    }));
  }

  newComment = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 16
    }));
  }

  displayNextThree = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 17
    }));
  }

  displayAnswerComments = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 18
    }));
  }

  displayNextThreeAnswers = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 19
    }));
  }

  displayEditQuestion = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 20
    }));
  }

  displayEditTagHere = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 21
    }));
  }

  displayEditTag = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 22
    }));
  }

  displayEditAnswersHere = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 23
    }));
  }

  displayEditAnswerHere = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 24
    }));
  }
  
  displayAskAQuestion = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 1 
    }));
  }

  displayMainPage = (newPageNumber) => {
    this.handleErrorChange([]);
    this.handleFilterAnswer("");
    this.handleFilterAnswerUsername("");
    this.setState((prevState) => ({
      pageNumber: 0 
    }));
   ;
  }

  answerTheQuestion = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 6
    }));
  }

  renderTag = (index, flag) => {
    console.log("Flag2: " + flag)
    if(flag === 1){
      this.handleEditTagNow(1);
    }
    this.setState((prevState) => ({
      pageNumber: 7, index: index
    }));
  }

  searchBar = (newPageNumber) => {
    this.setState((prevState) => ({
      pageNumber: 8
    }));
  }

  deleteAnswer = () => {
    console.log("ank06: " + this.state.idForDeleteNow);
    // find question associated with this answer.

    let i = 0;
    let j = 0;
    while(i < this.state.model.questions[0].length){
      j = 0;
      let flag = 0;
      while(j < this.state.model.questions[0][i].answers.length){
        console.log("this.state.model.questions[0][i].answers[j]._id : " + this.state.model.questions[0][i].answers[j] );
        console.log("this.state.idForDeleteNow: " + this.state.idForDeleteNow);
        if(this.state.model.questions[0][i].answers[j] === this.state.idForDeleteNow){
          flag = 1;
          break;
        }
        j += 1;
      }
      if(flag === 1){ break; }
      i += 1;
    }
    
    console.log("question: ");
    console.log(this.state.model.questions[0][i]._id);
    axios.post('http://localhost:8000/deleteAnswer',
    {
      id: this.state.idForDeleteNow,
      id2: this.state.model.questions[0][i]._id
    }
  ).then(resp => {
    console.log(resp);
    axios.get('http://localhost:8000/').then(resp => {
      resp.data.questions[0].reverse();
      this.setState({model: resp.data});
    });
    // this.state.model.questions[0].reverse();
  });
  this.profilePage();
  }

  editAnswers = () => {
    let answerText = this.state.filterAnswer;
    console.log("Yurd: " + answerText);
    console.log("id: " + this.state.idForAnswers);
    
    let arr = [];
    if(answerText.length === 0){
      arr.push("Answer text has to be greater than 0 length!");
      arr.push(<br></br>);
    }
    if(answerText.length > 100){
      arr.push("Answer text has to be less than 100 characters!");
      arr.push(<br></br>);
    } 
    this.handleErrorChange(arr);
    if(arr.length !== 0){
      return
    }

    let i = 0;
    while(i < this.state.model.answerDetails.length){
      if(this.state.model.answerDetails[i]._id === this.state.idForAnswers){
        break;
      }
      i += 1;
    }
    console.log("i2: " + i);

    axios.post('http://localhost:8000/editAnswer',
    {
      id: this.state.idForAnswers,
      text: answerText
    }
  ).then(resp => {
    console.log(resp);
    axios.get('http://localhost:8000/').then(resp => {
      resp.data.questions[0].reverse();
      this.setState({model: resp.data});
    });
    // this.state.model.questions[0].reverse();
  });
  this.profilePage();

  }

  addToAnswers = () => {
    this.handleMaxAnswers(0);
    var answerText = this.state.filterAnswer;

    var arr = [];
    if(answerText.length === 0){
      arr.push("Answer text has to be greater than 0 length!");
      arr.push(<br></br>);
    }
    if(answerText.length > 100){
      arr.push("Answer text has to be less than 100 characters!");
      arr.push(<br></br>);
    } 
    // if(answerUsername.length === 0){
    //   // console.log("okayAlfon");
    //   // this.handleFilterAnswerUsername("Anonymous");
      
    //   console.log(this.state.filterAnswerUsername);
    //   arr.push("Username has to be greater than 0 length!");
    //   arr.push(<br></br>);
    // }
    // if(answerUsername.length > 15){
    //   arr.push("Username has to be less than 15 characters!");
    //   arr.push(<br></br>);
    // }

    this.handleErrorChange(arr);
    if(arr.length !== 0){
      return
    }

    var today = new Date();  
    var month = "";
    if(today.getMonth() === 0){
      month = "January";
    }
    else if(today.getMonth() === 1){
      month = "February";
    }
    else if(today.getMonth() === 2){
      month = "March";
    }
    else if(today.getMonth() === 3){
      month = "April";
    }
    else if(today.getMonth() === 4){
      month = "May";
    }
    
    axios.post('http://localhost:8000/forAnswer', // uncomment me was AXIOS
        {
          first: {
            text: this.state.filterAnswer,
            ans_by:  this.state.userNameForPage,
            ans_date_time: new Date(),
            __v: 0,
            votes: 0,
            comments: ""
          },
          second: {
            id: this.state.model.questions[0][this.state.currentQuestion]._id
          }
        }
      ).then(resp => {
        console.log("whats response");
        console.log(resp);
        axios.get('http://localhost:8000/').then(resp => { // was AXIOS
          resp.data.questions[0].reverse();
          this.setState({model: resp.data});
        });
        // this.state.model.questions[0].reverse();
      }).catch(err => {
        console.log("error:");
        console.log(err);
      }); // uncomment me

    this.handleFilterAnswer("");
    this.handleFilterAnswerUsername("");
    this.handleErrorChange([]);
    // this.increaseAnswers(index);
    this.displayMainPage();
  }

  addComment = async () => {
    console.log("kaka: " + this.state.commentIndex);
    console.log("okay: " + this.state.newComment);
    let comment = this.state.newComment;
    let arr = [];
    if(comment.length === 0){
      arr.push("No Comment Rendered!");
      arr.push(<br></br>);
    }
    if(comment.length > 140){
      arr.push("Comment length has to be less than 140 charactesr.");
      arr.push(<br></br>);
    }

    // error if repuation of user is < 100!
    

    let temp = await axios.post('http://localhost:8000/getReputation', {
      email: this.state.loginEmail
    }).then(res => {
      console.log("f1:");
      console.log(res);
      if(res.data < 0){
        arr.push("User needs a higher reputation!")
      }
    })

    this.handleErrorChange(arr);
    if(arr.length !== 0){
      return;
    }


    axios.post('http://localhost:8000/newComment',
    {
      index: this.state.commentIndex,
      comment: comment,
      id: this.state.model.questions[0][this.state.commentIndex]._id,
      by: this.state.userNameForPage
    }).then(resp => {
      console.log("umut:");
      console.log(resp);
      axios.get('http://localhost:8000/').then(resp => {
        console.log("RESPONSE: " + resp.data);
        resp.data.questions[0].reverse();
        this.setState({model: resp.data});
      })
    })
    this.handleNewComment("");
    this.displayComments();
  }

  addToAnswerComment = async () => {
    console.log("oka2y: " + this.state.commentIndexAnswer)
    console.log("comment: " + this.state.newComment);
    let comment = this.state.newComment;
    let arr = [];
    if(comment.length === 0){
      arr.push("No Comment Rendered");
      arr.push(<br></br>);
    }
    if(comment.length > 140){
      arr.push("Comment length has to be less than 140 charactesr.");
      arr.push(<br></br>);
    }
    let temp = await axios.post('http://localhost:8000/getReputation', {
      email: this.state.loginEmail
    }).then(res => {
      console.log("f1:");
      console.log(res);
      if(res.data < 0){
        arr.push("User needs a higher reputation!")
      }
    })

    this.handleErrorChange(arr);
    if(arr.length !== 0){
      return;
    }

    console.log(this.state.model.answerDetails[this.state.commentIndexAnswer]._id);
    await axios.post('http://localhost:8000/newCommentForAnswer',
    {
      index: this.state.commentIndexAnswer,
      comment: comment,
      id: this.state.model.answerDetails[this.state.commentIndexAnswer]._id,
      by: this.state.userNameForPage
    }).then(resp => {
      console.log("umut:");
      console.log(resp);
      axios.get('http://localhost:8000/').then(resp => {
        console.log("RESPONSE: ");
        console.log(resp.data);
        resp.data.questions[0].reverse();
        this.setState({model: resp.data});
      })
    })
    this.handleNewComment("");
    this.displayAnswerComments();
  }

  editModelTag = () => {
    console.log("tags: " + this.state.filterTags);
    console.log(this.state.model.questions[0][this.state.editTagIndex])

    let arr = []
    if(this.state.filterTags.length === 0){
      arr.push("Tags cannot be empty!");
    }
    this.handleErrorChange(arr);
    if(arr.length !== 0){
      return
    }

    let here = this.state.filterTags + "";
    let tags = here.split(',');
    console.log("aq1: " + tags[0]);
    console.log("aq2: " + tags[1]);
    let i = 0;
    let flag = 0;
    while(i < this.state.model.questions[0][this.state.editTagIndex].tags.length){
      console.log("id: " + this.state.model.questions[0][this.state.editTagIndex].tags[i]);
      console.log("name2: " + tags[i]);
      if(tags[i] === undefined){
        if((flag === 0) || (this.state.model.questions[0][this.state.editTagIndex].tags.length === 1)){
          arr.push("Tags cannot be empty!");
        }
        else{
        axios.post('http://localhost:8000/deleteTag',
        {
          id: this.state.model.questions[0][this.state.editTagIndex].tags[i],
        }
      ).then(resp => {
        console.log(resp);
        axios.get('http://localhost:8000/').then(resp => {
          resp.data.questions[0].reverse();
          this.setState({model: resp.data});
        });
        // this.state.model.questions[0].reverse();
      });
        }
      }
      else{
        flag = 1;
      axios.post('http://localhost:8000/editTags',
        {
          id: this.state.model.questions[0][this.state.editTagIndex].tags[i],
          name: tags[i]
        }
      ).then(resp => {
        console.log(resp);
        axios.get('http://localhost:8000/').then(resp => {
          resp.data.questions[0].reverse();
          this.setState({model: resp.data});
        });
        // this.state.model.questions[0].reverse();
      });
      }
      i += 1;
    }
    
    this.handleFilterTagsChange("");
    this.displayMainPage();

  }

  deleteModelQuestion = (index) => {
    console.log("van1");
    // console.log("here: id: " + this.state.model.questions[0][index]._id);
    let tagsHere = [];
    let k = 0;
    while(k < this.state.model.questions[0][index].tags.length){
      tagsHere.push( this.state.model.questions[0][index].tags[k])
      k += 1;
    }
    console.log("tagsHere: " + tagsHere);
    let duplicates = new Set()
    //find tag associated with this question and how many questions have associated tag with it. 
    let i = 0;
    let j = 0;
    while(i < this.state.model.questions[0].length){
      j = 0;
      if(i === index){ //skip this one, duplicates (or more) only where we have zero
        i += 1;
        continue;
      }
      while(j < this.state.model.questions[0][i].tags.length){
        k = 0;
        while(k < tagsHere.length){
            if(this.state.model.questions[0][i].tags[j] === tagsHere[k]){
              duplicates.add(tagsHere[k])
            }
            k += 1;
        }
        j += 1;
      }
      i += 1;
    }
    i = 0;
    console.log("duplicates: ");
    console.log(duplicates)
    let final = []
    while(i < tagsHere.length){
      if(!duplicates.has(tagsHere[i])){
          console.log("tagsHere[i]: " + tagsHere[i]);
          final.push(tagsHere[i]);
      }
      i+=1;
    }
    console.log("tagsHere: " + final);



    axios.post('http://localhost:8000/deleteQuestion',
    {
      id: this.state.model.questions[0][index]._id,
      deleteTags: final
    }
  ).then(resp => {
    console.log(resp);
    axios.get('http://localhost:8000/').then(resp => {
      resp.data.questions[0].reverse();
      this.setState({model: resp.data});
    });
    // this.state.model.questions[0].reverse();
  });
  this.displayMainPage();
  }

  editModelQuestion = () => {
    console.log("edit index: " + this.state.editQuestionIndex);
    console.log("editModelQuesion: " + this.state.filterText);
    console.log(this.state.model.questions);
    console.log(this.state.filterTags);
    let titleLength = this.state.filterTitle.length;
    let textLength = this.state.filterText.length;
    let usernameLength = this.state.summary.length;

    let arr = [];
    if(textLength === 0){
      arr.push("Question text has to be greater than 0 length!");
      arr.push(<br></br>);
    } 
    if(titleLength === 0){
      arr.push("Question Title has to be greater than 0 length!");
      arr.push(<br></br>);
    }
    if(titleLength > 50){
      arr.push("Question Title can NOT be more than 50 characters!");
      arr.push(<br></br>);
    }
    if(usernameLength > 140){
      arr.push("Summary can NOT be greater than 140 characters!");
      arr.push(<br></br>);
    }

    this.handleErrorChange(arr);
    if(arr.length !== 0){
      return
    }

    axios.post('http://localhost:8000/editQuestion',
        {
          id: this.state.model.questions[0][this.state.editQuestionIndex]._id,
          title: this.state.filterTitle,
          text: this.state.filterText,
          summary: this.state.summary,
        }
      ).then(resp => {
        console.log(resp);
        axios.get('http://localhost:8000/').then(resp => {
          resp.data.questions[0].reverse();
          this.setState({model: resp.data});
        });
        // this.state.model.questions[0].reverse();
      });
      this.handleSummaryChange("");
      this.handleFilterTextChange("");
      this.handleFilterTitleChange("");
      this.handleFilterTagsChange("");
      console.log("this.state.text: " + this.state.filterText);
      this.displayMainPage();
  }

  addToModel = () => {
    let titleLength = this.state.filterTitle.length;
    let textLength = this.state.filterText.length;
    let tagLength = this.state.filterTags.length;
    let usernameLength = this.state.summary.length;

      let arr = [];
      if(textLength === 0){
        arr.push("Question text has to be greater than 0 length!");
        arr.push(<br></br>);
      } 
      if(titleLength === 0){
        arr.push("Question Title has to be greater than 0 length!");
        arr.push(<br></br>);
      }
      if(titleLength > 50){
        arr.push("Question Title can NOT be more than 50 characters!");
        arr.push(<br></br>);
      }
      if(tagLength === 0){
        arr.push("Question Tags has to be greater than 0 length!");
        arr.push(<br></br>);
      }
      if(usernameLength > 140){
        arr.push("Summary can NOT be greater than 140 characters!");
        arr.push(<br></br>);
      }

      this.handleErrorChange(arr);
      if(arr.length !== 0){
        return
      }

      let set = new Set();
      let i = 0;
      while(i <  this.state.model.tagNames.length){
        set.add(this.state.model.tagNames[i]);
        i += 1;
      }
      
      console.log("SET: " + set);
      let tagsArray = this.state.filterTags.split(' ');
      i = 0;
      while(i < tagsArray.length){
        if(tagsArray[i] === ' '){
          console.log("okay");
          tagsArray.pop(i);
        }
        console.log("tagsArray[i]: " + tagsArray[i]);
        i += 1;
      }
      let trueTags = [];
      console.log("F1: " + tagsArray);
      i = 0;
      while (i < tagsArray.length){
          var tempName = tagsArray[i].toLowerCase();
          if(!set.has(tempName)){
            set.add(tagsArray[i].toLowerCase()); // don't want to repeat repeated tags in question. 
          }
        i += 1;
      }

      console.log("trueTags: " + trueTags);
      console.log("tagsArray: " + tagsArray);
      if(trueTags.length === 0){
        i = 0;
        while(i < this.state.model.tagNames.length){
          let j = 0;
          while(j < tagsArray.length){
          console.log("bursa: " + tagsArray[j] + ", izmir: " + this.state.model.tagNames[i].name);
            if(tagsArray[j] === this.state.model.tagNames[i].name){
              trueTags.push(this.state.model.tagNames[i]); // no "tid" here.
            }
            j += 1;
          }
          i += 1;
        }
      }

      let tags = [];
      i = 0;
      while(i < tagsArray.length){
        
        tagsArray[i] = tagsArray[i].toLowerCase();
        i += 1;
      }
      i = 0;
      while(i < tagsArray.length){
        if(tagsArray[i] === ""){
          console.log("tagsArray[i]BOK: " + tagsArray[i]);
          i += 1;
          continue;
        }
        tags[i] = {'name': tagsArray[i]};
        i += 1;
      }

      console.log("yalova: ");
      console.log(tags);
      console.log("YEO: " + this.state.userNameForPage);
      
      axios.post('http://localhost:8000/',
        {
          title: this.state.filterTitle,
          text: this.state.filterText,
          ask_date_time: new Date(),
          asked_by: this.state.userNameForPage, //push this new question ID onto the user who asked it.
          summary: this.state.summary,
          viwes: 0,
          tags: tags,
          answers: [],
          votes: 0,
          comments: ""
        }
      ).then(resp => {
        console.log(resp);
        axios.get('http://localhost:8000/').then(resp => {
          resp.data.questions[0].reverse();
          this.setState({model: resp.data});
        });
        // this.state.model.questions[0].reverse();
      });
      this.handleSummaryChange("");
      this.handleFilterTextChange("");
      this.handleFilterTitleChange("");
      this.handleFilterTagsChange("");
      this.state.model.questions[0].sort(this.compare);
      console.log("lan01:");
      console.log(this.state.model.questions[0]);
      this.handleErrorChange([]);
      this.displayMainPage();
  }

  testingLogin = async () => {
    console.log("newUserName: " + this.state.userNameLogin);
    console.log("email: " + this.state.email);
    console.log("password: " + this.state.password);
    console.log("validate_password: " + this.state.validatePassword);
    // now i need to add this new user to the user db, ensuring the passwords match and encrypting the password with bertyl. 
    let arr = [];

    //passwords don't match
    if(this.state.password !== this.state.validatePassword){
      arr.push("Passwords do not match!");
      arr.push(<br></br>);
    }

    if(this.state.password.length === 0 || this.state.validatePassword.length === 0){
      arr.push("Fill in passwords!");
      arr.push(<br></br>);
    }

    // not a valid email
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!this.state.email.match(validRegex)){
      arr.push("Email format is not correct!");
      arr.push(<br></br>);
    }

    let password = this.state.password;
    let emailId = this.state.email.substring(0, this.state.email.indexOf('@'));
    if(password.match(emailId)){
      arr.push("Password cannot cotain the email-id!");
      arr.push(<br></br>);
    }

    if(password.match(this.state.userNameLogin)){
      arr.push("Password cannot contain the userName!");
      arr.push(<br></br>);
    }

    //no duplicate emails
    await axios.post('http://localhost:8000/checkEmails/', {
      email: this.state.email
    }).then(resp =>{
      console.log("resp");
      console.log(resp.data);
      if(resp.data.length > 0){
        console.log("in here");
        arr.push("Can't have duplicate emails! - choose a different email");
        arr.push(<br></br>);
      }
    });

    this.handleErrorChange(arr);
    if(arr.length !== 0){
      return;
    }

    axios.post('http://localhost:8000/newUser/', {
          name: this.state.userNameLogin,
          email: this.state.email,
          password: this.state.password,
          reputation: 0
    }).then(resp => {
      console.log("resp");
      // console.log(resp);
      console.log(resp.data);
      this.setState(this.state.model.users.push(resp.data))
  });

    this.handleErrorChange([]);
    this.handleUserName("");
    this.handleEmail("");
    this.handlePassword("");
    this.handleValidatePassword("");
    this.displayWelcomePage();
  }

  checkForLogin = async () => {
    console.log("email: " + this.state.loginEmail);
    console.log("password: " + this.state.loginPassword);
    let arr = [];
    // only possible error here: email doesn't exist, or email exists but incorrect password given.
    await axios.post('http://localhost:8000/forLogin/', {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    }).then(resp =>{
      console.log("resp");
      console.log(resp.data);
      if(resp.data === "no"){
        arr.push("Email does NOT exist. Try a different email.");
        arr.push(<br></br>);
      }
      else if(resp.data === "pass"){
        arr.push("Password is NOT correct. Try again.");
        arr.push(<br></br>);
      }
      else{
        this.handleUserNamePage(resp.data);
        console.log("yuuurd: " + this.state.userNameForPage);
      }
    });

    this.handleErrorChange(arr);
    if(arr.length !== 0){
      return;
    }
    

    console.log("thats it!");
    this.handleErrorChange([]);
    localStorage.setItem('username', this.state.userNameForPage);
    localStorage.setItem('login', this.state.loginEmail);
    this.handleLogin("");
    this.handleLoginPassword("");
    this.displayMainPage();
    // now i am logged in and must have the score of the user available / etc.
    
  }

  logout = () => {
    console.log("alllo");
    localStorage.clear();
    this.handleLogin("");
    this.displayWelcomePage();
  }

  helperForBanner = () => {
    this.handleFiveIndex(0);
    this.handleThreeIndex(0);
    this.handleThreeIndexAnswer(0);
    this.handleMaxAnswers(0);
    this.handleSummaryChange("");
    this.handleFilterTextChange("");
    this.handleFilterTitleChange("");
    this.handleFilterTagsChange("");
    this.displayMainPage();
  }

  helperThenDisplay = () => {
    this.handleFiveIndex(this.state.fiveIndex + 5);
    this.displayNextFive();
  }

  helperBeforePrev = () => {
    this.handleFiveIndex(this.state.fiveIndex - 5);
    console.log("orus02: " + this.state.fiveIndex)
    this.displayNextFive();
  }

  helperBeforePrevSearch = () => {
    this.handleFiveIndex(this.state.fiveIndex - 5);
    this.searchBar();
  }

  helperBeforeNextFiveSearching = () => {
    this.handleFiveIndex(this.state.fiveIndex + 5);
    this.searchBar();
  }

  helperBeforeNextThreeAnswers = () => {
    this.handleThreeIndexAnswer(this.state.threeIndexAnswers + 3);
    this.displayNextThreeAnswers();
  }

  helperBeforeNextThree = () => {
    this.handleThreeIndex(this.state.threeIndex + 3);
    this.displayNextThree();
  }

  helperBeforePrevThreeAnswer = () => {
    this.handleThreeIndexAnswer(this.state.threeIndexAnswers - 3);
    this.displayNextThreeAnswers();
  }

  helperBeforePrevThree = () => {
    this.handleThreeIndex(this.state.threeIndex - 3);
    this.displayNextThree();
  }

  helperBeforeNextFiveEdit = () => {
    this.handleFiveIndex(this.state.fiveIndexEditQuestion + 5);
    console.log("yurrd");
    // this.state.fiveIndex += 5;
    this.displayNextFive();
  }

  helperBeforeNextFive = () => {
    this.handleFiveIndex(this.state.fiveIndex + 5);
    console.log("yurrd");
    // this.state.fiveIndex += 5;
    this.displayNextFive();
  }

  helperBeforePrevTags = () => {
    this.handleFiveIndex(this.state.fiveIndex - 5);
    this.renderTag();
  }

  helperBeforeNextFiveTags = () => {
    this.handleFiveIndex(this.state.fiveIndex + 5);
    console.log("yurrd");
    this.renderTag();
  }

  displayPrevFiveAnswers = () => {
    this.handleMaxAnswers(this.state.maxAnswers - 5);
    // this.state.pageNumber = 5;
    if(this.state.maxAnswers > 5){
      this.displayNextFiveAnswers();
    }
    else{
    this.setState({
      pageNumber: 5
    })
    }
  }

  displayNextFiveAnswersHere = () => {
    this.handleMaxAnswers(this.state.maxAnswers + 5);
    this.displayNextFiveAnswers();
  }

  helperHandleAfterDone = () => {
    // this.handleFiveIndex(0);
  }

  helperForTagIndex = () => {
    console.log("OKAY: " + this.state.index);
    // this.handleIndexForTag(this.state.index);
    this.state.indexForTag = this.state.index;
  }

  lengthHere = async () => {
    let temp = 0;
    await axios.post('http://localhost:8000/findSpecificTagName', // uncomment me was AXIOS
        {
          id: this.state.model.tagNames[this.state.index]._id
        }
      ).then(resp => {
        // this.handleMaxLengthTags(resp.data.length);
        temp = resp.data.length;
        //this.state.maxLengthTags = resp.data.length;
      })
      this.state.maxLengthTags = temp;
      console.log("si: " + this.state.maxLengthTags);
  }

  searchHelpHere = (length) => {
    this.state.maxQuestionLength = length;
    console.log("siktir: " + this.state.maxQuestionLength);
  }

  render() {
    if(localStorage.length > 0){
      console.log("uhhhh!");
      this.state.loginEmail = localStorage.getItem('login');
      this.state.userNameForPage = localStorage.getItem('username');
      
      console.log(this.state.userNameForPage);
    }

    let main = null;
    if(this.state.model){
      console.log("anin");
      console.log(this.state.model);
      // just added
      let i = 0;
      while (i < this.state.model.questions[0].length){
        this.state.questions.push(this.state.model.questions[0][i]);
        i += 1;
      }
      // just added ^
      var banner = <></>;
      var signUpPage = <></>;
      var loginPage = <></>;

      console.log("this.state.loginEmail: " + this.state.loginEmail);
      if(localStorage.length === 0){
      main = <WelcomePage mainPage = {this.displayMainPage} newUser = {this.connectNewUser} login = {this.loginPage} />
      }
      else{
        let prevFive = null;
        if(this.state.fiveIndex > 5){
          prevFive = this.helperBeforePrev;
        }
        banner = <ClassBanner pageNumber = {this.helperForBanner} displayTagsNow = {this.displayTags} ifTags = {this.displaySpanTags} 
         onSearchChange = {this.handleSearchChange} searched = {this.searchBar} value = {this.state.search}  logout = {this.logout}
         loggedIn = {this.state.loginEmail}  />
        main = <ClassQuestion model = {this.state.model} questions = {this.state.questions}
        renderPage = {this.displayAskAQuestion}  onClickRenderHere = {this.renderAnswers} back = {this.displayWelcomePage} loggedIn = {this.state.loginEmail} 
        logout = {this.logout} username = {this.state.userNameForPage} profile = {this.profilePage} nextFive = {this.helperBeforeNextFive} indexHere = {this.state.fiveIndex}
        prev = {prevFive} registerHandle = {this.connectNewUser} loginUser = {this.loginPage} inc = {this.incrementVoteForQuestion} 
        dec = {this.decrementVoteForQuestion} comments = {this.displayComments} commentIndexHere = {this.handleCommentIndex} 
        />
        
        console.log("uc: " + this.state.fiveIndex);
      }
      
      // main = <ClassQuestion model = {this.state.model} renderPage = {this.displayAskAQuestion}/> ///callForQuestion = {ClassNewQuestion.render} click = {this.clicked}/> //
    }
    if(this.state.pageNumber === 1){ // ask a question
      this.helperHandleAfterDone();
      main = <ClassNewQuestion model = {this.state.model} pageNumber = {this.displayMainPage} handleIt = {this.handleFilterTextChange}
      handleForTitle = {this.handleFilterTitleChange} handleForTags = {this.handleFilterTagsChange} 
      userName = {this.state.userName} handleSummaryChangeHere = {this.handleSummaryChange}
      text = {this.state.filterText} title = {this.state.filterTitle} tags = {this.state.filterTags}
      render = {this.addToModel}
      />
    }
    
    else if(this.state.pageNumber === 0){ // display questions 
      let prevFive = null;
      if(this.state.fiveIndex > 5){
        prevFive = this.helperBeforePrev;
      }
      console.log("orus01: " + this.state.fiveIndex);
      main = <ClassQuestion model = {this.state.model} questions = {this.state.questions}
      renderPage = {this.displayAskAQuestion}  onClickRenderHere = {this.renderAnswers} back = {this.displayWelcomePage} loggedIn = {this.state.loginEmail} 
      logout = {this.logout} username = {this.state.userNameForPage} profile = {this.profilePage} nextFive = {this.helperBeforeNextFive} indexHere = {this.state.fiveIndex}
      prev = {prevFive} registerHandle = {this.connectNewUser} loginUser = {this.loginPage} inc = {this.incrementVoteForQuestion} dec = {this.decrementVoteForQuestion}
        comments = {this.displayComments} commentIndexHere = {this.handleCommentIndex}  />;
        // this.state.fiveIndex += 5;
        // console.log("ug: " + this.state.fiveIndex);
    }

    else if(this.state.pageNumber === 3){
      this.helperHandleAfterDone();
      main = <DisplayTags model = {this.state.model} renderPage = {this.displayAskAQuestion} forSpecifcTags = {this.renderTag} 
      registerHandle = {this.connectNewUser} loginUser = {this.loginPage} loggedIn = {this.state.loginEmail} 
      username = {this.state.userNameForPage} profile = {this.profilePage}/>
    }

    else if(this.state.pageNumber === 4){ // don't know if i need this.
      this.helperHandleAfterDone();
      main =  <DisplayAllTags tags = {this.props.model.data.tags} question = {this.props.model.data.questions} indexChange = {this.handleIndexChange} 
      index = {this.state.index} />
    }
    
    else if(this.state.pageNumber === 5){  // then display answers for the questions in the main table 
      this.helperHandleAfterDone();
      let prev = null;
      if(this.state.maxAnswers >= 5){
        prev = this.displayPrevFiveAnswers;
      }
      console.log("am12");
      main = <DisplayAllAnswers model = {this.state.model} ifClicked = {this.answerTheQuestion} index = {this.state.currentQuestion} 
      renderPage = {this.displayAskAQuestion} onClickVote = {this.incrementVoteForAnswer} onClickDec = {this.decrementVoteForAnswer}
      loggedIn = {this.state.loginEmail} nextHere = {this.displayNextFiveAnswersHere} maxHandle = {this.handleMaxAnswers} max = {this.state.maxAnswers}
      prev = {prev} renderRegister = {this.connectNewUser} login = {this.loginPage} comment = {this.displayAnswerComments}
      commentIndexHereAnswer = {this.handleCommentIndexAnswer} />
    }

    else if(this.state.pageNumber === 6){ // then answer the question
      this.helperHandleAfterDone();
      main = <AnswerIt model = {this.state.model}  handleText = {this.handleFilterAnswer} handleSummaryChangeHere = {this.handleSummaryChange}
      answer = {this.state.filterAnswer} userName = {this.state.filterAnswerUsername} pageNumber = {this.displayMainPage} render = {this.addToAnswers}/>
    }

    else if(this.state.pageNumber === 7){
      
      console.log("flag4: " + this.state.editFlag);
      console.log("BEFORE: " + this.state.index);
      if(this.state.index >= 0){
        console.log("in the if");
        this.helperForTagIndex(); //
        this.lengthHere(); //
        this.state.indexForTag = this.state.index;
      }

      let nextFiveHere = null;
      if(this.state.fiveIndex >= 5 ){
        if(this.state.fiveIndex + 5 < this.state.maxLengthTags){ 
          console.log("post");
          nextFiveHere = this.helperBeforeNextFiveTags;
        }
      }
      else{
        console.log("huhhh");
        nextFiveHere = this.helperBeforeNextFiveTags;
      }
      let prevFive = null;
      console.log("five index: " + this.state.fiveIndex );
      if(this.state.fiveIndex >= 5){
        prevFive = this.helperBeforePrevTags;
      }
      console.log("SPO: "+ this.state.indexForTag);
      main = <SpecificTags model = {this.state.model} indexChange = {this.handleIndexChange} index = {this.state.indexForTag} onClickRender = {this.renderAnswers} 
        renderPage = {this.displayAskAQuestion} back = {this.displayWelcomePage} loggedIn = {this.state.loginEmail}  logout = {this.logout}
        usernameHere = {this.state.userNameForPage} profile = {this.profilePage} nextFive = {nextFiveHere} indexHere = {this.state.fiveIndex} prev = {prevFive}  
        registerHandle = {this.connectNewUser} loginUser = {this.loginPage} inc = {this.incrementVoteForQuestion} dec = {this.decrementVoteForQuestion}
        comments = {this.displayComments} commentIndexHere = {this.handleCommentIndex} edit = {this.state.editFlag} onEditClick = {this.displayEditTag} 
        editTagIndex = {this.handleEditTagIndex} handleForTags = {this.handleFilterTagsChange} tags = {this.state.filterTags}/> 
    }
    else if(this.state.pageNumber === 8){
      let nextFiveHere = null;
      console.log("sam: " + this.state.maxQuestionLength);
      if(this.state.maxQuestionLength === 0 || (this.state.fiveIndex + 5) < this.state.maxQuestionLength){
        nextFiveHere = this.helperBeforeNextFiveSearching;
      }
      let prevFive = null;
      console.log("five index: " + this.state.fiveIndex );
      if(this.state.fiveIndex >= 5){
        prevFive = this.helperBeforePrevSearch;
      }

      main = <SearchBar model = {this.state.model} searched = {this.state.search} onClickRender = {this.renderAnswers}
      renderPage = {this.displayAskAQuestion} back = {this.displayWelcomePage} loggedIn = {this.state.loginEmail}
      logout = {this.logout}  username = {this.state.userNameForPage} profile = {this.profilePage}
      nextFive = {nextFiveHere} indexHere = {this.state.fiveIndex} prev = {prevFive} handleIt = {this.searchHelpHere} 
      registerHandle = {this.connectNewUser} loginUser = {this.loginPage} inc = {this.incrementVoteForQuestion} dec = {this.decrementVoteForQuestion} 
      comments = {this.displayComments} commentIndexHere = {this.handleCommentIndex}/>
    }
    else if(this.state.pageNumber === 10){
      this.helperHandleAfterDone();
      console.log("890:");
      main = <SignUpUser handleUserName = {this.handleUserName} handlePassword = {this.handlePassword} handleEmail = {this.handleEmail} 
      userName = {this.state.userNameLogin} password = {this.state.password} email = {this.state.email} validatePassword = {this.state.validatePassword}
      handleValidate = {this.handleValidatePassword} render = {this.testingLogin} back = {this.displayWelcomePage}
      />
      signUpPage= <BannerSignUp/>;
    }
    else if(this.state.pageNumber === 11){
      this.helperHandleAfterDone();
      console.log("amk01");
      main = <LoginPage handleLoginEmail = {this.handleLogin} handleLoginPassword = {this.handleLoginPassword} 
      email = {this.state.loginEmail} password = {this.state.loginPassword} render = {this.checkForLogin} back = {this.displayWelcomePage}/> 
      loginPage = <BannerLogin />
    }
    else if(this.state.pageNumber === 12){
      this.helperHandleAfterDone();
      main = <ProfilePage username = {this.state.userNameForPage} model = {this.state.model} email = {this.state.loginEmail}
       questions = {this.state.questions}
        renderPage = {this.displayAskAQuestion}  onClickRenderHere = {this.renderAnswers} back = {this.displayWelcomePage} loggedIn = {this.state.loginEmail} 
        logout = {this.logout} profile = {this.profilePage} nextFive = {this.displayNextFive} indexHere = {this.state.fiveIndex}
         registerHandle = {this.connectNewUser} loginUser = {this.loginPage} inc = {this.incrementVoteForQuestion} 
        dec = {this.decrementVoteForQuestion} comments = {this.displayComments} commentIndexHere = {this.handleCommentIndex} 
        onEdit = {this.displayEditQuestion} editIndex = {this.handleEditQuestionIndex} handleText = {this.handleFilterTextChange} 
        handleTitle = {this.handleFilterTitleChange} handleSummary = {this.handleSummaryChange} ifTagsHere = {this.displayEditTagHere}
        deleteNow = {this.deleteModelQuestion} onAnswer = {this.displayEditAnswersHere} idForAnswers = {this.handleIdForAnswers} /> 
    }
    else if(this.state.pageNumber === 13){
      console.log("orus: " + this.state.fiveIndex);
      // this.state.fiveIndex += 5;
      let nextFiveHere = null;
      
      if(this.state.fiveIndex + 5 < this.state.model.questions[0].length){
        nextFiveHere = this.helperThenDisplay;
      }
      
      let prevFive = null;
      console.log("five index: " + this.state.fiveIndex );
      if(this.state.fiveIndex >= 5){
        prevFive = this.helperBeforePrev;
      }
      console.log("13: " + this.state.fiveIndex);
      main = <DisplayFive model = {this.state.model} renderPage = {this.displayAskAQuestion} loggedIn = {this.state.loginEmail} 
      logout = {this.logout} username = {this.state.userNameForPage} profile = {this.profilePage} onClickRenderHere = {this.renderAnswers}
      nextFive = {nextFiveHere} indexHere = {this.state.fiveIndex} prev = {prevFive} inc = {this.incrementVoteForQuestion} dec = {this.decrementVoteForQuestion}
      comments = {this.displayComments} commentIndexHere = {this.handleCommentIndex}/>
    }

    else if(this.state.pageNumber === 14){
      let nextFiveHere = null;
      let prevFive = null;
      console.log("ya=: " + this.state.model.questions[0][this.state.currentQuestion].answers.length);
      console.log(this.state.maxAnswers);
      let length = this.state.model.questions[0][this.state.currentQuestion].answers.length;
      if((this.state.maxAnswers + 5) < length){
        nextFiveHere = this.displayNextFiveAnswersHere
      }
      if(this.state.maxAnswers >= 5){
        prevFive = this.displayPrevFiveAnswers
      }
      console.log("AMINA1: " + this.state.maxAnswers);
      main = <DisplayFiveAnswers model = {this.state.model} ifClicked = {this.answerTheQuestion} index = {this.state.currentQuestion} 
      renderPage = {this.displayAskAQuestion} onClickVote = {this.incrementVoteForAnswerFive} onClickDec = {this.decrementVoteForAnswerFive}
      loggedIn = {this.state.loginEmail} nextHere = {nextFiveHere} current = {this.state.maxAnswers} prev = {prevFive} length = {length} 
      renderRegister = {this.connectNewUser} login = {this.loginPage}/>
    }

    else if(this.state.pageNumber === 15){
      // this.handleCommentIndexAnswer(-1);
      this.state.commentIndexAnswer = -1;
      console.log("comments: " + this.state.commentIndex);
      main = <Comments model = {this.state.model} loggedIn = {this.state.loginEmail} registerHandle = {this.connectNewUser} 
      loginUser = {this.loginPage} username = {this.state.userNameForPage} renderPage = {this.displayAskAQuestion} 
      handleItHere = {this.handleNewComment} comment = {this.state.newComment} newComment = {this.newComment} index = {this.state.commentIndex} 
      profile = {this.profilePage} nextThree = {this.helperBeforeNextThree} /> 
    }

    else if(this.state.pageNumber === 16){
      // console.log("france: " + this.state.questionINdex);
      let render = null;
      console.log("this.state.commentIndexAnswer: " + this.state.commentIndexAnswer);
      if(this.state.commentIndexAnswer >= 0){
        render = this.addToAnswerComment // this.addToAnswerComment
      }
      else { render = this.addComment } // this.addComment
      main = <ClassNewComment handleIt = {this.handleNewComment} comment = {this.state.newComment} render = {render} />
    }

    else if(this.state.pageNumber === 17){
      console.log("THREE: " + this.state.threeIndex);
      console.log("this.state.threeIndex: " + (this.state.threeIndex + 3) + " ,: " + this.state.model.questions[0][this.state.commentIndex].comment.length)
      console.log(this.state.model);
      console.log();
      let prev = null;
      let next = null;
      if(this.state.threeIndex >= 3){
        prev = this.helperBeforePrevThree;
      }
      if((this.state.threeIndex + 3) < this.state.model.questions[0][this.state.commentIndex].comment.length){
        console.log("in here");
        next = this.helperBeforeNextThree;
      }
      
      main = <DisplayThree model = {this.state.model} loggedIn = {this.state.loginEmail} registerHandle = {this.connectNewUser} 
      loginUser = {this.loginPage} username = {this.state.userNameForPage} renderPage = {this.displayAskAQuestion} 
      handleItHere = {this.handleNewComment} comment = {this.state.newComment} newComment = {this.newComment} index = {this.state.commentIndex} 
      profile = {this.profilePage} nextThree = {next} prev = {prev} 
      threeIndex = {this.state.threeIndex} />
    }

    else if(this.state.pageNumber === 18){

      let prev = null;
      let next = null;
      console.log("three Index: " + this.state.threeIndex + " , " + this.state.model.answerDetails[this.state.commentIndexAnswer].comment.length);
      if(this.state.threeIndex >= 3){
        prev = this.helperBeforePrevThreeAnswer;
      }
      if((this.state.threeIndex + 3) < this.state.model.answerDetails[this.state.commentIndexAnswer].comment.length){
        next = this.helperBeforeNextThreeAnswers;
      }

      console.log(this.state.model);
      console.log("ayo1: " + this.state.commentIndexAnswer);
      main = <CommentsAnswers model = {this.state.model} username = {this.state.userNameForPage} 
      loggedIn = {this.state.loginEmail} registerHandle = {this.connectNewUser} profile = {this.profilePage} index = {this.state.commentIndexAnswer}
      loginUser = {this.loginPage} renderPage = {this.displayAskAQuestion} comment = {this.state.newComment} newComment = {this.newComment}
      nextThree = {next} prev = {prev} /> 
    }

    else if(this.state.pageNumber === 19){
      let prev = null;
      let next = null;
      if(this.state.threeIndexAnswers >= 3){
        prev = this.helperBeforePrevThreeAnswer;
      }
      if((this.state.threeIndexAnswers + 3) < this.state.model.answerDetails[this.state.commentIndexAnswer].comment.length){
        next = this.helperBeforeNextThreeAnswers;
      }
      main = <DisplayThreeAnswers model = {this.state.model} loggedIn = {this.state.loginEmail} registerHandle = {this.connectNewUser} 
      loginUser = {this.loginPage} username = {this.state.userNameForPage} renderPage = {this.displayAskAQuestion} 
      handleItHere = {this.handleNewComment} comment = {this.state.newComment} newComment = {this.newComment} index = {this.state.commentIndexAnswer} 
      profile = {this.profilePage} nextThree = {next} prev = {prev} 
      threeIndex = {this.state.threeIndexAnswers} />
    }

    else if(this.state.pageNumber === 20){
      console.log("tag-index: " + this.state.editTagIndex);
      console.log("EDIT-Index: " + this.state.editQuestionIndex);
      main = <ClassNewQuestionEdit model = {this.state.model} pageNumber = {this.displayMainPage} handleIt = {this.handleFilterTextChange}
      handleForTitle = {this.handleFilterTitleChange}
      userName = {this.state.summary} handleSummaryChangeHere = {this.handleSummaryChange}
      text = {this.state.filterText} title = {this.state.filterTitle}
      render = {this.editModelQuestion}
      /> //addToModel
    }

    else if(this.state.pageNumber === 21){
      let k = 0;
      let model = this.state.model;
      let id = 0;
      while(k < model.users.length){
        if(model.users[k].email === this.state.loginEmail){
          id = model.users[k]._id;
        }
        k += 1;
      }

      k = 0;
      let tagsNow = []
      while(k < model.questions[0].length){
        if(model.questions[0][k].user == id){
          let j = 0;
          while(j < model.questions[0][k].tags.length){
            tagsNow.push(model.questions[0][k].tags[j]);
            j += 1;
          }
        }
        k += 1;
      }

      k = 0;
      let trueTags = []
      console.log("pusht");
      console.log(model.tagNames);
      let set = new Set();
      while(k < model.tagNames.length){
        let j = 0;
        while(j < tagsNow.length){
          if(model.tagNames[k]._id == tagsNow[j] && (!set.has(model.tagNames[k]))){
            trueTags.push(model.tagNames[k])
            set.add(model.tagNames[k])
          }
          j += 1;
        }
        k += 1;
      }
      console.log(model.tagNames);
      
      console.log(tagsNow);
      console.log("goz: " + id);
      main = <DisplayEditTags model = {this.state.model} renderPage = {this.displayAskAQuestion} forSpecifcTags = {this.renderTag} 
      registerHandle = {this.connectNewUser} loginUser = {this.loginPage} loggedIn = {this.state.loginEmail} 
      username = {this.state.userNameForPage} profile = {this.profilePage} tagNames = {trueTags} /> 
    }

    else if(this.state.pageNumber === 22){
      console.log(this.state.filterTags);
      console.log("index1: " + this.state.editTagIndex);
      main = <ClassNewTagEdit model = {this.state.model} pageNumber = {this.displayMainPage} render = {this.editModelTag}
       handleForTags = {this.handleFilterTagsChange} tags = {this.state.filterTags} />
    }

    else if(this.state.pageNumber === 23){
      console.log("nol1");
      let prev = null;
      if(this.state.maxAnswers >= 5){
        prev = this.displayPrevFiveAnswers;
      }
      console.log("am12: " + this.state.idForAnswers);
      
      main = <EditAnswers model = {this.state.model} ifClicked = {this.answerTheQuestion} 
      renderPage = {this.displayAskAQuestion} onClickVote = {this.incrementVoteForAnswer} onClickDec = {this.decrementVoteForAnswer}
      loggedIn = {this.state.loginEmail} nextHere = {this.displayNextFiveAnswersHere} maxHandle = {this.handleMaxAnswers} max = {this.state.maxAnswers}
      prev = {prev} renderRegister = {this.connectNewUser} login = {this.loginPage} comment = {this.displayAnswerComments}
      commentIndexHereAnswer = {this.handleCommentIndexAnswer} profile = {this.profilePage} handleIdForAnswers = {this.handleIdForAnswers} 
      handleAnswerText = {this.handleFilterAnswer} editAnswer = {this.displayEditAnswerHere} deleteRender = {this.deleteAnswer} 
      handleForDeleteBok = {this.handleIdForDelete}
      />
    }

    else if(this.state.pageNumber === 24){
      console.log("LAN!");
      main = <DisplayEditAnswer model = {this.state.model}  handleText = {this.handleFilterAnswer} 
      answer = {this.state.filterAnswer} pageNumber = {this.displayMainPage} render = {this.editAnswers}  /> 
    } 
    
    if(this.state.pageNumber !== 9 && this.state.pageNumber !== 10 && this.state.pageNumber !== 11){
      banner = <ClassBanner pageNumber = {this.helperForBanner} displayTagsNow = {this.displayTags} ifTags = {this.displaySpanTags} 
         onSearchChange = {this.handleSearchChange} searched = {this.searchBar} value = {this.state.search} loggedIn = {this.state.loginEmail} 
          logout = {this.logout} profile = {this.profilePage}  />
    }

    console.log("Loggin in: " + this.state.loginEmail)
    return (
    <div>
      {banner}
      {signUpPage}
      {loginPage}
      <p className = "errorMessage">  
        {this.state.errorsForQuestion}
      </p>
      {main}
     </div>
     );
  }
}