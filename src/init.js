$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var makeBlinkyDancerClassName = $(this).data('dancer-class-name');

    // get the maker function for the kind of dancer we're supposed to make
    var makeBlinkyDancer = window[makeBlinkyDancerClassName];

    // make a dancer with a random position

    var dancer = new makeBlinkyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);//add dancers to window.dancers
  });

  $('.interactButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length - 1; i+=2){
      console.log('loops through dancers: count : ' + i);
      window.dancers[i].setPosition(window.dancers[i+1].top + 50, window.dancers[i+1].left + 50);
    };
  });









  //
});
