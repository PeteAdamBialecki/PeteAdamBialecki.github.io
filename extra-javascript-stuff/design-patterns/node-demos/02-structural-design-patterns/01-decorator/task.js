
// This is code before using a decorator pattern:

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

var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function(){
    console.log('notifying important people');
};

urgentTask.complete();
urgentTask.save = function(){
    this.notify();
    Task.prototype.save.call(this)
};

urgentTask.save();
