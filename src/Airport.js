function AirportException(message) {
  this.name = "AirportException";
  this.message = message;
}


function Airport() {
  this.hangar = [];
};

Airport.prototype.instructLanding = function(plane) {
  plane.land(this);
  this.hangar.push(plane);
};

Airport.prototype.instructTakeOff = function(plane) {
  if (this.hangar.length < 1) {
    throw new AirportException("No airplanes available")
  }
  plane.takeOff(this);
  this.hangar.pop(plane);
}

Airport.prototype.isLanded = function (plane) {
  return !plane.isInAir();
};
