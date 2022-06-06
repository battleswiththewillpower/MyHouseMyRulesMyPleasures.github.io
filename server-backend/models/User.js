const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        // if left blank will give error
        required: [true, "username is required"],
        // set a minium length
        minLength: [2, "username must be least 2 characters"],
        unique:true

    },

    email: {
        type: String,
        // if left blank will give error
        required: [true, "Email is required"],
        // set a minium length
        minLength: [6, "Email is required"],
        unique:true
    }, 

    password: {
        type: String,
        // if left blank will give error
        required: [true, "password is required"],
        // set a minium length
        minLength: [8, "password must be least 5 characters"]
    },
    profilePic: {
        type: String,
        // if left blank will give error
        // required: [true, "Profile Picture is required"],
        // set a minium length
        default: ""
    }


}, {timestamps: true})



module.exports = mongoose.model('User', UserSchema);