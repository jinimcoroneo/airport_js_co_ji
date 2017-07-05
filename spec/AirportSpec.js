describe("feature", function() {
  var airport;
  var plane;
  
  beforeEach(function() {
    airport = new Airport;
    plane = new Plane;
    spyOn(plane, "land");
  });
  
  describe( "instruct plane to land", function() {
    it("calls the land function on plane", function() {
      airport.instruct_landing(plane);
      expect(plane.land).toHaveBeenCalled();
    });
    
    it("moves the plane into the hangar", function() {
      airport.instruct_landing(plane);
      expect(airport.hangar).toContain(plane);
    });
  });
  
  describe("confirms a plane has landed", function() {
    it("checks the status of the plane", function() {
      airport.instruct_landing(plane);
      spyOn(plane, "isInAir").and.returnValue(false);
      expect(airport.isLanded(plane)).toEqual(true);
    });
  });
});
