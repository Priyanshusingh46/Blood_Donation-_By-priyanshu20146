const mongoose = require('mongoose');
const RegisterMember = new mongoose.Schema({
    username : {
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true
    },
    password :{
        type: String,
        required: true
    },
    password2 :{
        type: String,
        required: true
    },
})
const Register = new mongoose.model("Register",RegisterMember);
module.exports = Register;