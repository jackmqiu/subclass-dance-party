
var makeJonSnowShiftingDancer = function(top, left, timeBetweenSteps) {
console.log('jon snow dancer made: ' + JSON.stringify(this));
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.removeClass('dancer').addClass('JonSnow');
  //this.setPosition(top, left);
  this.step();

};

makeJonSnowShiftingDancer.prototype = Object.create(makeDancer.prototype);
makeJonSnowShiftingDancer.prototype.constructor = makeJonSnowShiftingDancer;

makeJonSnowShiftingDancer.prototype.step = function() {

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
makeJonSnowShiftingDancer.prototype.setPosition() = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  // var styleSettings = {
  //   top: top,
  //   left: left
  // };
  // this.$node.css(styleSettings);
  //makeDancer.prototype.setPosition.call(this);
};
