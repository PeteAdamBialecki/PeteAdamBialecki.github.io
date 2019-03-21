'use strict';

function maze(width, height) {
    this.width = width;
    this.height = height;

    this.startX = null;
    this.startY = null;
    this.startOrientation = null;
    this.endX = null;
    this.endY = null;
    this.directions = ["north", "east", "south", "west"];
    this.spaces = [];

    let x;
    let y;
    for (x = 1; x <= width; x += 1) {
        this.spaces[x] = [];
        for (y = 1; y <= height; y += 1) { 
            this.spaces[x][y] = new mazeSpace(this.directions);
        }
    }
}

maze.prototype.setStart = function(x, y, orientation) {
    if (this.isValidDirection(orientation)) {
        this.startX = x;
        this.startY = y;
        this.startOrientation = orientation;
    }
}

maze.prototype.setEnd = function (x, y) {
    this.endX = x;
    this.endY = y;
}

maze.prototype.setWall = function (x, y, direction) {
    if (x > 0 && x <= this.width && y > 0 && y <= this.height && this.isValidDirection(direction)) {
        this.spaces[x][y].setWall(direction);
            return true;
    } return false;
}

maze.prototype.isValidDirection = function(direction) {
    return this.directions.indexOf(direction) !== -1
}