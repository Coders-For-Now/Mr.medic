const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    avatar: {
        type: String,
        default: 'default avatar path here'
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    gender: {
        type: String,
        required: true
    }
});

module.exports = Patient = mongoose.model("patients", PatientSchema);