jQuery(function($) {'use strict';

$("#start-counter").on("click", function(event){
var seconds = 10 ,
  countDiv = document.getElementsByClassName('countDown'),
  secondPass ,
  countDown = setInterval(function (){
    secondPass();

  }, 1000);

  function secondPass()
  {


    var minutes = Math.floor(seconds / 60),

  remSeconds = seconds % 60;

    countDiv[0].innerHTML = minutes +":" + remSeconds;
    if (seconds > 0){
      seconds -= 1 ;
    }
    else 
    {
      clearInterval(countDown);
      
      alert("finished")
    }



} // end func Pass
 
});


}) // end main