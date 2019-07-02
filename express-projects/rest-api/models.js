'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var AnswerSchema = new Schema({
    text: String,
    createdAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
    votes: {type: Number, default: 0}
})
var QuestionSchema = new SVGSwitchElement({
    text: String,
    createdAt: {type: Date, default: Date.now},
    answer: [AnswerSchema]
});
var Question = mongoose.model("Question", QuestionSchema);

module.exports.Question = Question;