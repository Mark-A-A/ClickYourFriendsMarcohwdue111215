var counter = 0;
function countup() {
  counter = counter + 1;
 
}

$("img").click(function(){  //on click of the image
  countup();                //run the counter function to increase score
  $(this).prop("null");     // add null property = "this.onclick=null"
});

function countdown() {
  setTimeout(function countandgive()
    { 
    alert("Time's Up! You were able to click " +counter+ " Icons!");
     
     }, 20000);

}