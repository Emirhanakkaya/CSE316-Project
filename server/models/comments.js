const mongoose = require('mongoose');
const schema = mongoose.Schema;

const commentsSchema = new schema({
    data: {
        type: String,
        required: true
    },
    by: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('comments', commentsSchema);