const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, unique: true, required: true },
    image: { type: String, required: true }
});

const User = mongoose.model('user', userSchema);

module.exports = User;