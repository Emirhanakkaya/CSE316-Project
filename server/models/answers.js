// Answer Document Schema
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const answerSchema = new schema({
    text: {
        type: String,
        required: true
    },
    ans_by: {
        type: String,
        required: true,
        defualt: "Anonymous"
    },
    ans_date_time: {
        type: Date,
        default: new Date(),
        required: false
    },
    votes: {
        type: Number, 
        defualt: 0,
        required: false
    },
    comment: [{type: mongoose.Schema.Types.ObjectId, ref: 'comments'}]
});

answerSchema.virtual('url').get(function() {
    return "posts/answer/" + this._id;
});


module.exports = mongoose.model('Answer', answerSchema);
// export { answerSchema as default };