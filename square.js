'use strict';

function Square(length) {
  this._length = length;
}

Square.prototype.area = function() {
  return this._length * this._length;
}
