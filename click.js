$(document).ready(function(){

  var counter = 0;

  function countup() {
    counter += 1;
  };

  $("img").on('click', function (){  //on click of the image
    countup();                //run the counter function to increase score
    //$(this).prop('onclick',null);     // add null property = "this.onclick=null"
    $(this).off('click');               // removed on click
  });

  //onclick="countdown()"
  $("#start-button").on("click", function () {
    countdown();
  });

  function countdown() {
    setTimeout(function countandgive() {
    //alert("Time's Up! You were able to click " + counter + " Icons!");
      $('.modal-body').text("Time's Up! You were able to click " + counter + " Icons!");
      $('#myModal').modal('show');
    }, 20000);

  };

});
