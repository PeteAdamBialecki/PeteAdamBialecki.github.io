var Task = function (name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.comple = function() {
    console.log('Completing Task: ' + this.name);
    this.completed = true;
};

Task2.prototype.save = function() {
    console.log('Saving Task: ' + this.name);
}

module.exports = Task;