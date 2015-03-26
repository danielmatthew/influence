$(document).ready(function(){
  
  // Write your Javascript!
  var enlarged = $('#enlarged'),
      title = $('#enlarged .principle'),
      quote = $('#enlarged .quote'),
      articles = $('article'),
      principle1 = $('#principle-1'),
      text;

  // principle1.on('click', function(e){
  //   enlarged.text($(this).children('.summary').text());
  // });


  articles.on('click', function(){
    title.text($(this).data('lesson'));
    quote.text($(this).data('quote'));

    enlarged.addClass('fadeIn');
    enlarged.animate({
      height: '300px'
    }, 500);
  })

});