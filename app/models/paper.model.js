const mongoose = require('mongoose');

const PaperSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        required: true,
    },
    keywords: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    },
    /*co_author: {
        type: [{
            name: String,
            email: String
        }],
        required: false
    },*/
    cover_letter: {
        type: Object,
        required: false
    },
    manuscript: {
        type: Object,
        required: true
    },
    supplement: {
        type: Object,
        required: false
    }
    },
    {
        timestamps: true
});

module.exports = mongoose.model('Paper', PaperSchema);
