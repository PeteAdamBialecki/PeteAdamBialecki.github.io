'use strict';

function maze(width, height) {
    this.width = width;
    this.height = height;

    this.startX = null;
    this.startY = null;
    this.startOrientation = null;
    this.endX = null;
    this.endY = null;
    this.spaces = [];

    let x;
    let y;
    for (x = 1; x <= width; x += 1) {
        this.spaces[x] = [];
        for (y = 1; y <= height; y += 1) { 
            this.spaces[x][y] = new mazeSpace();
        }
    }
}

maze.prototype.setStart = function(x, y, orientation) {
    this.startX = x;
    this.startY = y;
    this.startOrientation = orientation;
}

maze.prototype.setEnd = function (x, y) {
    this.endX = x;
    this.endY = y;
}

maze.prototype.setWall = function (x, y, direction) {
    this.spaces[x][y].setWall(direction);
}