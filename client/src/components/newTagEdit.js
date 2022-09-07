import React from 'react';
// import Model from '../models/model';


export default class ClassNewTagEdit extends React.Component {
    
    constructor(props){
        super(props);
        this.handleFilterTagsChange = this.handleFilterTagsChange.bind(this);
    }

    handleFilterTagsChange(e){
        console.log("in title");
        this.props.handleForTags(e.target.value);
    }

    render(){
        console.log("textInNewQuestion Function: " + this.props.model.questions[0].length);
            return (
                <div>
                    <h1>Tags</h1>
                    <p> No new tags here! Just modify to delete current tags listed. In order to delete, get rid of trailing comma at end too! </p> 
                    <textarea rows="8" cols="130" id = "newQuestion" value = {this.props.tags} onChange = {this.handleFilterTagsChange}></textarea>
                    <br></br>
                    <button className = "postButton" onClick = {this.props.render} > Edit Question </button>
                </div>
            );
    }
}