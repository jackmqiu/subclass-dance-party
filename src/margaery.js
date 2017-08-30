
var makeMargaeryShiftingDancer = function(top, left, timeBetweenSteps) {
//console.log('jon snow dancer made: ' + JSON.stringify(this));
  makeShiftingDancer.call(this, top, left, timeBetweenSteps);

  // this.$node.removeClass('dancer').addClass('Margaery');
  this.$node = $('<img src="http://pixel.nymag.com/imgs/daily/vulture/2013/04/22/22-natlaie-dormer-margaery-silo.w245.h368.png"></img>');
  this.setPosition(top, left);
  this.step();

};

makeMargaeryShiftingDancer.prototype = Object.create(makeShiftingDancer.prototype);
makeMargaeryShiftingDancer.prototype.constructor = makeMargaeryShiftingDancer;


makeMargaeryShiftingDancer.prototype.setPosition = function() {

  // call the old version of step at the beginning of any call to this new version of step
  makeShiftingDancer.prototype.setPosition.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.


};
