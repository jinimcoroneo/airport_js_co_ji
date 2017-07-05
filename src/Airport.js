function Airport() {
  this.hangar = [];
};

Airport.prototype.instruct_landing = function(plane) {
  plane.land(this);
  this.hangar.push(plane);
};
