// Question Document Schema
const mongoose = require('mongoose');
// import tagsSchema from './tags.js';
// import {test} from './answers.js';
const schema = mongoose.Schema;

const questionsSchema = new schema({
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    text: {
        type: String,
        required: true
    },
    
        // type: [[tagSchema.schema]], // schema.Types.ObjectId, ref: 'Tag', 
    tags:[{type: mongoose.Schema.Types.ObjectId, ref: 'tags', required: true, minItems: 1}],
    answers: 
        [{type: mongoose.Schema.Types.ObjectId, ref: 'answers'}],
        // type: [[answerSchema.schema]], // need to be answer here. 
        // required: false
    user: [{type: mongoose.Schema.Types.ObjectId, ref: 'users'}],
    comment: [{type: mongoose.Schema.Types.ObjectId, ref: 'comments'}],
    asked_by: {
        type: String,
        default: "Anonymous",
        required: false,
    },
    ask_date_time: {
        type: Date,
        default: new Date(),
        required: false
    },
    views: {
        type: Number,
        default: 0,
        required: false
    },
    votes: {
        type: Number, 
        defualt: 0,
        required: false
    },
    summary: {
        type: String,
        //required: true // uncomment later.
    }
});

questionsSchema.virtual('url').get(function() {
    return "posts/question/" + this._id;
});

module.exports = mongoose.model('Question', questionsSchema);