
// This is code before using a decorator pattern:

// Version #1:
// var Task = function (name) {
//     this.name = name;
//     this.completed = false; 
// };

// Task.prototype.complete = function() {
//     console.log('Completing Task: ' + this.name);
//     this.completed = true;
// };

// Task.prototype.save = function() {
//     console.log('Saving Task: ' + this.name);
// };

// var myTask = new Task('Legacy Task');
// myTask.complete();
// myTask.save();

// Using a decorator pattern, you can take one functionality and build on it without breaing it.
// Here, 'urgentTask' has been made and adds additional stuff to 'Task'.






// Version #2:
// var Task = function (name) {
//     this.name = name;
//     this.completed = false;
// }

// Task.prototype.complete = function () {
//     console.log('completing task: ' + this.name);
//     this.completed = true;
// };

// Task.prototype.save = function () {
//     console.log('saving Task: ' + this.name);
// };

// var myTask = new Task('Legacy Task');
// myTask.complete();
// myTask.save();

// var urgentTask = new Task('Urgent Task');
// urgentTask.priority = 2;
// urgentTask.notify = function(){
//     console.log('notifying important people');
// };

// urgentTask.complete();
// urgentTask.save = function(){
//     this.notify();
//     Task.prototype.save.call(this)
// };

// urgentTask.save();






// Version #3 (subObjecting):

var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var urgentTask = function(name, priority) {
    Task.call(this, name);
    this.priority = priority;
};

urgentTask.prototype = Object.create(Task.prototype);

urgentTask.prototype.notify = function () {
    console.log('Notifiying important people...'); 
};
urgentTask.prototype.save = function () {
    this.notify(); 
    console.log('Do special stuff before saving...');
    Task.prototype.save.call(this)
};

var ut = new urgentTask('This is urgent', 1);

ut.complete();
ut.save();
console.log(ut);