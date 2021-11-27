const mongoose = require('mongoose');
const patients = new mongoose.Schema({
    username : {
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true
    },
    pass :{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    patient:{
        type: String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    group:{
        type: String,
        required: true
    },
})
const patient = new mongoose.model("patient",patients);
module.exports = patient;