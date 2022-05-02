const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    pass: {
        type: String,
        required: true,
        min: 8,
        max: 20
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;