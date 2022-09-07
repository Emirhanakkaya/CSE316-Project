import React from 'react';
export default class ClassNewComment extends React.Component {
    
    constructor(props){
        super(props);
        this.handleHere = this.handleHere.bind(this);
    }
    handleHere(e){
        console.log("e.value: " + e.target.value);
        this.props.handleIt(e.target.value);
    }

    render(){
        return (
            <>
                <div id = "divForTable">
                    <h4>Comment Details</h4>
                    <p> This should not be more than 140 characters.</p>
                    <textarea rows="10" cols="30" id = "textArea1"  value = {this.props.comment} onChange = {this.handleHere}
                        ref = "okay"
                    ></textarea>
                    <br></br>
                    <button className = "postButton"  onClick = {this.props.render}> Submit </button> 
                </div>
            </>
        )
    }
}