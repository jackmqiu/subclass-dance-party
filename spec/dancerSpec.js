


describe('Dancer', function() {

  var Dancer, clock;
  var timeBetweenSteps = 100;
  //verifyClass(makeDancer).followsPattern('pseudoclassical', {}, false);


  beforeEach(function() {
    clock = sinon.useFakeTimers();
    Dancer = new makeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(Dancer.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(Dancer.$node, 'toggle');
  //   Dancer.step();
  //   expect(Dancer.$node.toggle.called).to.be.true;
  // });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(Dancer, 'step');
      expect(Dancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(Dancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(Dancer.step.callCount).to.be.equal(2);
    });
  });
});
