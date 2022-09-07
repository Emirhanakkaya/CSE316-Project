// Tag Document Schema
const mongoose = require('mongoose');
const schema = mongoose.Schema;

let userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    reputation: {
        type: Number,
        required: true,
    },
    join_time: {
        type: Date,
        default: new Date(),
        required: false
    },
    questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'questions'}]
});

userSchema.virtual('url').get(function() {
    return "posts/tag/" + this._id;
});

exports.test = userSchema;
module.exports = mongoose.model('User', userSchema);
// export { tagSchema as default };