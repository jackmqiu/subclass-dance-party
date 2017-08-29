var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
<<<<<<< HEAD
=======
  makeDancer.call(this); //, top, left, timeBetweenSteps);
>>>>>>> ae43d8a0b2f4213e5d7a31b42f6fa89fd4ddb42a

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step();

<<<<<<< HEAD
};
  
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {

  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);

=======
  //this.oldStep = this.step;

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   // oldStep();
  //   this.step();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

  // return blinkyDancer;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.nextStep = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  this.step();
>>>>>>> ae43d8a0b2f4213e5d7a31b42f6fa89fd4ddb42a
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
<<<<<<< HEAD
  
};
=======
};
>>>>>>> ae43d8a0b2f4213e5d7a31b42f6fa89fd4ddb42a
