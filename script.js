$(document).ready(function(){

    var mouseX, mouseY;
    var traX, traY;


    var ww = $( window ).width();
    var wh = $( window ).height();


    $(document).mousemove(function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = ((150 * mouseX) / 570) + 40;
        traY = ((150 * mouseY) / 570) + 50;
        $(".hero-text").css({
            "background-position": traX + "%" + traY + "%",
            "background-size": "105% 105%"
        });
    });

    $(document).mouseout(function(){
        $(".hero-text").css({
            "background-position": "center center",
            "background-size": "cover"
        });
    });
  });