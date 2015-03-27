$(document).ready(function(){
  
  // Write your Javascript!
  var enlarged = $('#enlarged'),
      title = $('#enlarged .principle'),
      quote = $('#enlarged .quote'),
      articles = $('article'),
      principle1 = $('#principle-1'),
      text;

  // Bind cursor keys, WASD, and swipe events to
  // enable navigation through chapters and principles

    var splashScreen = $('#splash');


  function hideSplashScreen() {
    var splashScreen = document.getElementById('splash');
    splashScreen.classList.add('fadeOut');
  }

  var counter = 0;
  console.log('Counter is: ' + counter);

  function navigateRight() {

    if (counter < fundamentals.length - 1) {
      counter++;
      console.log('Counter is ' + counter);
    } else {
      console.log('end of array');
    }

    return counter;
  }

  function navigateLeft() {
    if (counter >= 1) {
      counter--;
    } else {
      console.log('start of array');
      // Maybe wrap round? 
    }
  }

  function updateText(chapter) {
    title.text($(fundamentals[chapter]).data('lesson'));
    quote.text($(fundamentals[chapter]).data('quote'));
  }

  // Get all chapters in fundamentals section
  var fundamentals = $('#fundamentals article');
  console.log('Fundamentals length is ' + fundamentals.length);



  $(document).keydown(function(e) {
    switch (e.which) {
      case 32: // Spacebar - hide menu screen
        hideSplashScreen();
        break;
      case 37: //left
        navigateLeft();
        // counter--;
        updateText(counter);
        console.log('Pressed left arrow'); 
        break;

      case 38: // up
        console.log('Pressed up arrow');
        break;

      case 39: // right
        // title.text($(fundamentals))
        navigateRight();
        // counter++;
        // navigateRight(counter);
        updateText(counter);
        console.log(counter);
        console.log('Pressed right arrow');
        break;

      case 40: // down
        console.log('Pressed down arrow');
        break;

      default: 
        break;
    }
    e.preventDefault();
  });


  updateText(counter);



  articles.on('click', function(){
    title.text($(this).data('lesson'));
    quote.text($(this).data('quote'));

    enlarged.addClass('fadeIn');
    enlarged.animate({
      height: '300px'
    }, 500);
  })

});