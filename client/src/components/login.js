import React from 'react';

export default class LoginPage extends React.Component {

    constructor(props){
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(e){
        this.props.handleLoginEmail(e.target.value);
    }

    handlePasswordChange(e){
        this.props.handleLoginPassword(e.target.value);
    }

    render(){
        return (
            <>
                <div id = "divForTable">
                    <h4>Email:</h4>
                    <textarea rows="1" cols="30" id = "textArea1"  value = {this.props.email}  onChange = {this.handleEmailChange}
                        ref = "okay"
                    ></textarea>
                    <br></br>
                    <h4>Password:</h4>
                    <textarea rows="1" cols="30" id = "textArea1"  value = {this.props.password}  onChange = {this.handlePasswordChange}
                        ref = "okay"
                    ></textarea>
                    <br></br>
                    <button className = "postButton"  onClick = {this.props.render}> Login </button> 
                    <br></br>
                    <br></br>
                    <button className = "postButton"  onClick = {this.props.back}> Welcome Page </button> 
                </div>

                
                
            </>
        );
    }
}