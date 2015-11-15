var counter = 0;
function countup() {
  counter = counter + 1;
  }


function countdown() {
  setTimeout(function countandgive()
    { 
    alert("Time's Up! You were able to click " +counter+ " Icons!");
     
     }, 20000);

}