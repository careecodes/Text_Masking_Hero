$(document).ready(function(){

    var mouseX, mouseY;
    var traX, traY;


    var ww = $( window ).width();
    var wh = $( window ).height();


    $(document).mousemove(function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;


        console.log(mouseX + ',' + mouseY);
        // traX = .01 * mouseX;
        // traY = .01 * mouseY;
        traX = -50 + mouseX;
        traY= .001 + mouseY;
        //console.log(traX + ',' + traY);
        bgX= traX/ww;
        bgY=traY/wh;
        //console.log(bgX + ',' + bgY);
        $(".hero-text").css({"background-position": traX + "%" + traY + "%"});
    });
  });