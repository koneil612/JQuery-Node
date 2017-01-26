function PlayGame(){

}

function Player1(){

}


function Player2(){

}

function Board() {

}



function handler1() {
   $('.square').one("click", handler2);
       $(".square").one( "click", function() {
           $(this).text("O");
       });
         $(this).prop('disabled', true);
         }
function handler2() {
    $('.square').one("click", handler1);
         $(".square").one( "click", function() {
             $(this).text("X");
         });
           $(this).prop('disabled', true);
       }



$("document").ready(function(){

$(handler1);



});
