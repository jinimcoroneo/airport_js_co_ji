describe("feature", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport;
    plane = new Plane;
    spyOn(plane, "land");
    spyOn(plane, "takeOff");
  });

  describe("instruct plane to land", function() {
    it("calls the land function on plane", function() {
      airport.instructLanding(plane);
      expect(plane.land).toHaveBeenCalled();
    });

    it("moves the plane into the hangar", function() {
      airport.instructLanding(plane);
      expect(airport.hangar).toContain(plane);
    });
  });

  describe("confirms a plane has landed", function() {
    it("checks the status of the plane", function() {
      airport.instructLanding(plane);
      spyOn(plane, "isInAir").and.returnValue(false);
      expect(airport.isLanded(plane)).toEqual(true);
    });
  });

  describe("instruct a plane to take off", function() {
    it("calls the takeOff function on plane", function() {
      airport.instructLanding(plane);
      airport.instructTakeOff(plane);
      expect(plane.takeOff).toHaveBeenCalled();
    });

    it("cannot take off if there is no airplane in the hangar", function() {
      expect(function() {
        airport.instructTakeOff(plane);
      }).toThrow(new AirportException("No airplanes available"));
    });
  });
});
