const mongoose = require("mongoose");

const { Schema } = mongoose;

const requiredString = {
    type: String,
    required: true,
}

const logEntrySchema = new Schema({
    title: requiredString,
    description: String,
    body: String,
    comments: 
})  