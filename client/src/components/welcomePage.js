import React from 'react';

export default class WelcomePage extends React.Component {
    render(){
        return (
            <>
            <div id = "divForTable">
                 <table className = "mainTable">
                    <h1> Welcome to Fake StackOverflow </h1> 
                </table>
            </div>
            <div className = "outerHere">
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <div> <button id = "forButtonReact" className = "notMiddleQuestionFinal" onClick = {this.props.newUser} > Register a new user </button> </div> 
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <div> <button id = "forButtonReact" className = "notMiddleQuestionFinal" onClick = {this.props.login} > Login </button> </div> 
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <div> <button id = "forButtonReact" className = "notMiddleQuestionFinal" onClick = {this.props.mainPage} > Continue as Guest User </button> </div> 
            </div>
            </>
        )
    }
}