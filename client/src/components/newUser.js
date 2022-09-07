import React from 'react';
export default class SignUpUser extends React.Component {

    constructor(props){
        super(props);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordHere = this.handlePasswordHere.bind(this);
        this.handleEmailHere = this.handleEmailHere.bind(this);
        this.handleValidateHere = this.handleValidateHere.bind(this);
    }

    handleUserNameChange(e){
        console.log("in userName");
        this.props.handleUserName(e.target.value);
    }

    handlePasswordHere(e){
        this.props.handlePassword(e.target.value);
    }

    handleEmailHere(e){
        this.props.handleEmail(e.target.value);
    }

    handleValidateHere(e){
        this.props.handleValidate(e.target.value);
    }

    render(){
        return (
            <>
                <div id = "divForTable">
                    {/* <table className = "mainTable">
                        <h1> Sign Up Page </h1> 
                    </table> */}
                    <h4>UserName</h4>
                    <textarea rows="1" cols="30" id = "textArea1"  value = {this.props.userName}  onChange = {this.handleUserNameChange}
                        ref = "okay"
                    ></textarea>
                     <hr></hr>
                    <hr></hr>
                    <h4>Email</h4>
                    <textarea rows="1" cols="30" id = "textArea1"  value = {this.props.email}  onChange = {this.handleEmailHere}
                        ref = "okay"
                    ></textarea>
                    <hr></hr>
                    <hr></hr>
                    <h4>Password</h4>
                    <textarea rows="1" cols="30" id = "textArea1"  value = {this.props.password}  onChange = {this.handlePasswordHere}
                        ref = "okay"
                    ></textarea>
                    
                    <h4>Validate Password</h4>
                    <textarea rows="1" cols="30" id = "textArea1"  value = {this.props.validePassword}  onChange = {this.handleValidateHere}
                        ref = "okay"
                    ></textarea>
                    <hr></hr>
                    <hr></hr>
                    <button className = "postButton"  onClick = {this.props.render}> Sign Up </button> 
                    <br></br>
                    <br></br>
                    <button className = "postButton"  onClick = {this.props.back}> Welcome Page </button> 
                </div>
                
            </>
        )
    }
}