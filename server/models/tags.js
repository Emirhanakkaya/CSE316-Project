// Tag Document Schema
const mongoose = require('mongoose');
const schema = mongoose.Schema;

let tagSchema = new schema({
    name: {
        type: String,
        required: true
    }
});

tagSchema.virtual('url').get(function() {
    return "posts/tag/" + this._id;
});

exports.test = tagSchema;
module.exports = mongoose.model('Tag', tagSchema);
// export { tagSchema as default };