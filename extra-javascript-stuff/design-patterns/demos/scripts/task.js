
console.log("This is now working...");

// All of the following code sections are the same and interchangeable.

// Exmaple #1:
var task1 = {};
task1.title = 'My First Task';
task1.description = 'My Description';
console.log(task1.title); // My Task

// Exmaple #2 (same as above but different declaration of variable):
var task2 = Object.create(Object.prototype);
task2.title = 'My Second Task';
task2.description = 'My Description';
console.log(task2.title); // My Task

// Exmaple #3:
var task3 = Object.create(Object.prototype);
task3.title = 'My Third Task';
task3.description = 'My Description';
task3.toString = function(){
    'use strict';
    return this.title + ' ' + this.description;
}
console.log(task3.toString()); // My Third Task My Description

// Exmaple #4:
var task4 = new Object();
task4.title = 'My Fourth Task';
task4.description = 'My Description';
task4.toString = function(){
    'use strict';
    return this.title + ' ' + this.description;
}
console.log(task4.toString()); // My Fourth Task My Description

// Exmaple #5:
var task5 = {
    title: 'My Fifth Task',
    description: 'My Description'
};
task5.toString = function(){
    'use strict';
    return this.title + ' ' + this.description;
}
console.log(task5.toString()); // My Fifth Task My Description




// Exmaple #6:
var task6 = {
    title: 'My Fifth Task',
    description: 'My Description'
};

Object.defineProperty(task6, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: true,
    enumerable: true,
    configurable: true
});

task6.toString = 'hi'; //If the property 'writable' is set to 'true' above, then this line will override this (BE CAREFUL).  Set it to false to prevent it from being overwritten.

console.log(task6.toString()); // My Fifth Task My Description