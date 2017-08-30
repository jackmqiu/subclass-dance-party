
var makeShiftingDancer = function(top, left, timeBetweenSteps) {
  console.log('shifting dancer made: ' + JSON.stringify(this));
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step();

};

makeShiftingDancer.prototype = Object.create(makeDancer.prototype);
makeShiftingDancer.prototype.constructor = makeShiftingDancer;

makeShiftingDancer.prototype.step = function() {

  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({
    'left' : '+=30px'
  });
  this.$node.animate({
    'left' : '-=30px'
  });

};
