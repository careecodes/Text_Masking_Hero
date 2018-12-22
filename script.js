$(document).ready(function(){

    var mouseX, mouseY;
    var traX, traY;


    var ww = $( window ).width();
    var wh = $( window ).height();


    $(document).mousemove(function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
        console.log(mouseX + ',' + mouseY);
        traX = ((150 * mouseX) / 570) + 40;
        traY = ((150 * mouseY) / 570) + 50;
        console.log(traX + ',' + traY);
        $(".hero-text").css({
            "background-position": traX + "%" + traY + "%",
            "background-size": "105% 105%"
        });
    });
  });