'use strict';

var express = require('express');
var router = express.Router();
var Question = require("./models").Question;

router.param('qID', function(req, res, next, id){
    Question.findById(id, function(err, doc){
        if(err) return next(err);
        if(!doc) {
            err = new Error('Not Found');
            err.status = 404;
            return next(err);
        }
        req.qestion = doc;
        return next();
    });
});

// GET /questions
// Route for question collections
router.get('/', function(req, res, next){
    Question.find({})
            .sort({createdAt: -1})
            .exec(function(err, questions){
                if(err) return next(err);
                res.json(questions);
            });
});

// POST /questions
// Route for creating questions
router.post('/', function(req, res, next){
    var question = new Question(req.body);
    question.save(function(err, question){
        if(err) return next(err);
        res.status(201);
        res.json(question);
    });
});

// GET /questions
// Route for specificquestion
router.get('/:qID', function(req, res, next){
        res.json(doc);
});

// POST /questions/:id/answers
// Route for creating an answer
router.post('/:qID/answers', function(req, res){
    res.json({
        response: 'You sent me a POST request to /answers',
        questionId: req.params.qID,
        body: req.body
    });
});

// PUT / questions/:qID/answers/:aID
// Edit a specific answer
router.put('/:qID/answers/:aID', function(req, res){
    res.json({
        response: 'You sent me a PUT request to /answers',
        questionId: req.params.qID,
        answerId: req.params.aID,
        body: req.body
    });
});

// DELETE / questions/:qID/answers/:aID
// Delete a specific answer
router.delete('/:qID/answers/:aID', function(req, res){
    res.json({
        response: 'You sent me a DELETE request to /answers',
        questionId: req.params.qID,
        answerId: req.params.aID,
    });
});

// POST / questions/:qID/answers/:aID/vote-up
// POST / questions/:qID/answers/:aID/vote-down
// Vote on a specific answer
router.post('/:qID/answers/:aID/vote-:dir', function(req, res, next) {
        if(req.params.dir.search(/^(up|down)$/) == -1) {
            var err = new Error('Not Found');
            err.status = 404;
            next(err);
        } else {
            next();
        }
    },function(req, res){
    res.json({
        response: 'You sent me a POST request to /vote-' + req.params.dir,
        questionId: req.params.qID,
        answerId: req.params.aID,
        vote: req.params.dir
    });
});

module.exports = router;