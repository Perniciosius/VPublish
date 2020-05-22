//import mongoose for creating database schema
const mongoose = require('mongoose');

//creating database schema for storing user data
const AuthorSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength:1,
        maxlength:30
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
        isVerified: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            default: 'author'
        },
        profileImage: {
            type: Object,
            required: false
        }
    },
    {
        timestamps: true
    });

//exporting user schema for use
module.exports = mongoose.model('Author', AuthorSchema);

