function Plane() {
  this.inAir = true;
};

Plane.prototype.land = function(airport) {
  this.inAir = false;
};
