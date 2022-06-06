const mongoose = require("mongoose")


const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        // if left blank will give error
        required: [true, "title is required"],
        // set a minium length
        minLength: [2, "title must be least 2 characters"],
        unique:true,

    },

    description: {
        type: String,
        // if left blank will give error
        required: [true, "Description is required"],
        // set a minium length
        minLength: [6, "Description  is required"],
    }, 

    photo: {
        type: String,
        // if left blank will give error
        required: false,
        // set a minium length
    },
    username: {
        type: String,
        // if left blank will give error
        required: true,
        // set a minium length
    },
    categories: {
        type: Array,
        // if left blank will give error
        required: false,
    },


}, {timestamps: true});

module.exports = mongoose.model('Post', PostSchema);