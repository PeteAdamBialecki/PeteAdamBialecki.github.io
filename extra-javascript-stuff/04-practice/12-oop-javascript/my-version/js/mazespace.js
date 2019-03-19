'use strict';

function mazeSpace() {
    this.north = false;
    this.east = false;
    this.south = false;
    this.west = false;
}

mazeSpace.prototype.setWall = function(direction) {
    this[direction] = true;
}