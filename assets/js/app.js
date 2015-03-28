$(document).ready(function(){
  
  var enlarged = $('#enlarged'),
      title = $('#enlarged .principle'),
      quote = $('#enlarged .quote'),
      articles = $('article'),
      principle1 = $('#principle-1'),
      text;

  var splashScreen = $('#splash');
  
  var counter = 0;
  var chaptersArray = document.querySelectorAll('.chapter');
  
  var sectionCounter = 0;
  var sectionsArray = [
    document.querySelectorAll('#fundamentals article'),
    document.querySelectorAll('#make-people-like-you article'),
    document.querySelectorAll('#how-to-win-people article'),
    document.querySelectorAll('#be-a-leader article')
  ];

  // Get all chapters in fundamentals section
  var fundamentals = $('#fundamentals article');


  // Draws data in appropriate places
  function updateText(section, chapter) {
    title.text($(section[chapter]).data('lesson'));
    quote.text($(section[chapter]).data('quote'));
  }

  function navigateUp() {
    sectionCounter--;
    updateText(sectionsArray[sectionCounter], counter);
  }
  
  function navigateDown() {
    if (sectionCounter < chaptersArray.length - 1) {
      sectionCounter++;
      console.log(sectionCounter);
      updateText(sectionsArray[sectionCounter], counter);
    } else {
      console.log('No more chapters');
    }
  }

  function navigateRight() {

    if (counter < fundamentals.length - 1) {
      counter++;
      console.log('Counter is ' + counter);
    } else {
      console.log('end of array');
      // Tell user they are at the end
    }

    return counter;
  }

  function navigateLeft() {
    if (counter >= 1) {
      counter--;
    } else {
      console.log('start of array');
      // Maybe wrap round? 
      // Tell user they are at the start
    }
  }

  function hideSplashScreen() {
    var splashScreen = document.getElementById('splash');
    splashScreen.classList.add('fadeOut');
  }


  $(document).keydown(function(e) {
    switch (e.which) {
      case 32: // Spacebar - hide menu screen
        hideSplashScreen();
        break;
      case 37: //left
        navigateLeft();
        updateText(sectionsArray[sectionCounter], counter);
        console.log('Pressed left arrow'); 
        break;

      case 38: // 

        navigateUp();
        console.log('Pressed up arrow');
        break;

      case 39: // right
        // title.text($(fundamentals))
        navigateRight();
        // counter++;
        // navigateRight(counter);
        updateText(sectionsArray[sectionCounter], counter);
        console.log(counter);
        console.log('Pressed right arrow');
        break;

      case 40: // down
        navigateDown();
        // updateText(chapterCounter, counter);
        console.log('Pressed down arrow');
        break;

      default: 
        break;
    }
    e.preventDefault();
  });

  articles.on('click', function(){
    title.text($(this).data('lesson'));
    quote.text($(this).data('quote'));

    enlarged.addClass('fadeIn');
    enlarged.animate({
      height: '300px'
    }, 500);
  })

  updateText(sectionsArray[sectionCounter], counter);

});