function Plane() {
  this.inAir = true;
};

Plane.prototype.land = function(airport) {
  this.inAir = false;
};

Plane.prototype.takeOff = function(airport) {
  this.inAir = true;
}

Plane.prototype.isInAir = function () {
  return this.inAir;
};
