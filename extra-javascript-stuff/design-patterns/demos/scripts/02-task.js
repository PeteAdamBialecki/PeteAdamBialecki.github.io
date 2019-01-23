"use strict";

var Task1 = function (name) {
    this.name = name;
    this.completed = false;

    this.complete = function() {
        console.log('Completing Task: ' + this.name);
        this.completed = true;
    };
    this.save = function() {
        console.log('Saving Task: ' + this.name);
    };
};

var task1 = new Task1('Create a demo for constructors.');
var task2 = new Task1('Create a demo for modules.');
var task3 = new Task1('Create a demo for singletons.');
var task4 = new Task1('Create a demo for prototypes.');

task1.complete();
task2.save();
task3.save();
task4.save();

// The following code is the same as above but uses prototypes.

var Task2 = function (name) {
    this.name = name;
    this.completed = false;
};

Task2.prototype.comple = function() {
    console.log('Completing Task: ' + this.name);
    this.completed = true;
};

Task2.prototype.save = function() {
    console.log('Saving Task: ' + this.name);
}

var task5 = new Task2('Create a demo for constructors.');
var task6 = new Task2('Create a demo for modules.');
var task7 = new Task2('Create a demo for singletons.');
var task8 = new Task2('Create a demo for prototypes.');

task1.complete();
task2.save();
task3.save();
task4.save();