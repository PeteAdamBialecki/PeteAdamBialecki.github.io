'use strict';

var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    text: String,
    createdAt: {type: Date, defualt: Date.now},
    updatedAt: {type: Date, defualt: Date.now},
    votes: {type: Number, default:0}
});

var QuestionSchema = new Schema({
    text: String,
    createdAt: {type: Date, defualt: Date.now},
    answers: [AnswerSchema]
});

var Question = mongoose.model("Question", QuestionSchema);

module.exports.Question = Question;