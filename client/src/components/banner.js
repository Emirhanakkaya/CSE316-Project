import React from 'react';
// import Model from '../models/model.js';

export default class ClassBanner extends React.Component {
    constructor(props){
        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.state = {questionColor: "", tagColor: ""};
    }

    handleSearchChange(e){
        // this.props.onSearchChange(e.target.value);
    }

    questionClick = () => {
        this.setState({
            questionColor: "lightblue",
            tagColor: ""
        })
        this.props.pageNumber();
      }
    tagClick = () => {
        this.setState({
            tagColor: "lightblue",
            questionColor: ""
        })
        this.props.displayTagsNow();
      }
      logoutClick = () => {
        this.setState({
            tagColor: "",
            questionColor: ""
        })
        this.props.logout();
      }
    handleQuestion(){
    }

    handleKeyPress = (event) => {
        console.log("weqfpbq[owebi");
        if(event.key === 'Enter'){
            // console.log("weqf__INSIDDE IF __pbq[owebi");
            this.props.searched();
            this.props.onSearchChange(event.target.value);
        }
    }


  render() {
    console.log("inBanner___");

    var logOut = <></>;
    console.log("this.props.loggedIn: " + this.props.loggedIn);
    if(this.props.loggedIn){
        logOut = <td id = "tdIdTwo" ><a onClick = {this.logoutClick} id = "tagId">LogOut</a></td>;
    }

    return (
        <div className = "divForTable">
            <table className = "mainTable">
                <tbody>
                    <tr>
                        <td id = "tdId" style = {{backgroundColor: this.state.questionColor}}> <a onClick = {this.questionClick} id = "questionID">Questions</a> </td> 
                        <td id = "tdIdTwo" style = {{backgroundColor: this.state.tagColor}}><a onClick = {this.tagClick} id = "tagId">Tags</a></td>    
                        <td id = "newFont"> <a href = "" id = "tagIdStack" >Fake Stack OverFlow</a> </td>
                        <td>
                        <input type="text" placeholder="Search..."  onChange = {this.handleSearchChange} 
                            onKeyPress={this.handleKeyPress} id = "search" />
                        </td>
                        {logOut}
                    </tr>
                </tbody>
            </table>
            <h1 id = "forCharacters" > </h1> 
        </div>
    );
  }
}

// value = {this.props.value} 

//props.pageNumber


    