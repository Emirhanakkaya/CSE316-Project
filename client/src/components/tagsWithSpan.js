import React from 'react';
// import Model from '../models/model.js';
import FakeStackOverflow from './fakestackoverflow.js';

export default class DisplayAllTags extends React.Component {
    constructor(props){
        super(props);
        this.state = {index: 0}
        this.tagsSpecifically = this.tagsSpecifically.bind(this);
    }

    tagsSpecifically(e){
        this.props.tagsSpecifically(e.target.id);
    }

    helperForTags = (index, id) => {
        let flag = 0;
        if(this.props.editTags === 1){
            flag = 1;
        }
        let i = 0;
        let indexHere = -1;
        while(i < this.props.model.tagNames.length){
            if(this.props.model.tagNames[i]._id === id){
                indexHere = i;
                break;
            }
            i += 1;
        }
        if(indexHere !== -1){
            index = indexHere;
        }

        console.log("id1: " + id);
        console.log("INDEX____: " + index);
        this.props.tagsSpecifically(index, flag);
    }

    handleFilterTitleChange(e){
        this.props.indexChange(e + 1);
    }

    getTagNames(){
        return this.props.tags[this.state.index].name + " ";
    }

    getNumberOfQuestions = (index, id) => {
        // if(this.props.editTags){
        //     return this.editButton()
        // }

        let k = 0;
        let indexHere = -1;
        while(k < this.props.model.tagNames.length){
            if(this.props.model.tagNames[k]._id === id){
                indexHere = k;
                break;
            }
            k += 1;
        }
        if(indexHere !== -1){
            index = indexHere;
        }
        
        console.log(this.props.model.tagNames);
        console.log("index23: " + index)
        let tempName = this.props.model.tagNames[index].name;
        console.log("HEREEEEE: " + tempName);
        // let questions = this.props.model.questions;
        // console.log(questions);
        // console.log(tempName);
        let i = 0;
        let tempId = "";
        while(i < this.props.tags.length){
            // console.log("HEREE: " + this.props.tags[i]);
            if(this.props.tags[i].name === tempName){
                tempId = this.props.tags[i]._id;
                break;
            }
            i += 1;
        }
        
        // console.log("TEMP_ID: " + tempId);
        i = 0;
        let count = 0;
        console.log("HEREEE:");
        // console.log(this.props.model.questions[0][0].tags[0][0].name);
        while(i < this.props.model.questions[0].length){
            let j = 0;
            console.log("hey: " +  tempId);
            while(j < this.props.model.questions[0][i].tags.length){
                if(this.props.model.questions[0][i].tags[j] === tempId){
                    count += 1;
                }
                j+=1;
            }
            i += 1;
        }
        console.log("count: " + count);

        if(count === 1){ return count + " Question" }
        else { return count + " Questions"}
    }

    render(){
        console.log("hm1:");
        console.log(this.props.tags);
        // let iterateForTags = this.props.tags.map((tag, index) => 
        //     <span key = {index}> {tag.name} </span> 
        // );
        let length = this.props.tags.length;
        
        length /= 3;
        length = Math.floor(length);
        let i = 0;
        let j = 0;
        let array = [];
       
        while(j < length){
            let temp = 
            <tr>
                <TagBlock helperForTags = {this.helperForTags} getNumberOfQuestions = {this.getNumberOfQuestions} 
                    tags = {this.props.tags} index = {i}/>
                <TagBlock helperForTags = {this.helperForTags} getNumberOfQuestions = {this.getNumberOfQuestions} 
                    tags = {this.props.tags} index = {i+1}/>
                <TagBlock helperForTags = {this.helperForTags} getNumberOfQuestions = {this.getNumberOfQuestions} 
                    tags = {this.props.tags} index = {i+2}/>
                    
                {/* <td id = "displayTags"> <a className = "justA" onClick = {() => this.helperForTags(i)}> 
                {this.props.tags[i].name} </a> <br></br> {this.getNumberOfQuestions(i)}</td>
                <td id = "displayTags"> <a onClick = {() => this.helperForTags(i+1)} className = "justA" > 
                 {this.props.tags[i+1].name}</a> <br></br> {this.getNumberOfQuestions(i+1)}  </td>
                <td id = "displayTags"> <a className = "justA" onClick = {() => this.helperForTags(i+2)}> 
                {this.props.tags[i+2].name}</a><br></br> {this.getNumberOfQuestions(i+2)}  </td> */}
            </tr>
            console.log(temp);
            i += 3;
            j += 1;
            array.push(temp);
        }

        if(this.props.tags.length % 3 > 0){
            if(this.props.tags.length % 3 === 1){
                array.push(
                    <tr>
                        <TagBlock helperForTags = {this.helperForTags} getNumberOfQuestions = {this.getNumberOfQuestions} 
                            tags = {this.props.tags} index = {i}/>
                    </tr>
                )
            }
            else if(this.props.tags.length % 3 === 2){
                array.push(
                    <tr>
                        <TagBlock helperForTags = {this.helperForTags} getNumberOfQuestions = {this.getNumberOfQuestions} 
                    tags = {this.props.tags} index = {i}/>
                        <TagBlock helperForTags = {this.helperForTags} getNumberOfQuestions = {this.getNumberOfQuestions} 
                    tags = {this.props.tags} index = {i+1}/>
                    </tr>
                )
            }
        }

        return (
            <table>
                <tbody>
                    {array}
                </tbody>
            </table>
        );
    }
}

// <th id = "displayTags" > <a class = "justA" onclick = "javascript:displaySpecificTags(` + (i+1) + `)" >
//             ` + model.data.tags[i].name + `</a> <br>
//              ` + getNumOfQuestions(model.data.tags[i].tid) + ` 
//             </th>

class TagBlock extends React.Component {
    render() {
        return (
            <td id = "displayTags"> <a className = "justA" onClick = {() => this.props.helperForTags(this.props.index, this.props.tags[this.props.index]._id)}> 
            {this.props.tags[this.props.index].name} </a>  <br></br> {this.props.getNumberOfQuestions(this.props.index, this.props.tags[this.props.index]._id)}</td>
        )
    }
}