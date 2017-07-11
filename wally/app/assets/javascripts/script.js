$(document).ready(function(){
  var width = $('.game-picture').width();
  var height = $('.game-picture').height();
  $('#container').css({'width':width, 'height': height});

  var characterNames = [];
  var characterPositionX = [];
  var characterPositionY = [];
  var clicked = false;

  $.getJSON("/images/1.json", function(data, posX, posY){
    for(var i = 0; i < data.length; i++){
      characterNames.push(data[i].name);
      characterPositionX.push(data[i].positionX);
      characterPositionY.push(data[i].positionY);
    }
});

  var checkSelection = function(posX, posY){
    var isFound = false;
      for(var i = 0; i < characterNames.length; i++){

        if (((characterPositionX[i] - posX) < 50) && ((characterPositionX[i] - posX) > -50) &&
            ((characterPositionY[i] - posY) < 50) && ((characterPositionY[i] - posY) > -50))
            {
              isFound = true;
              $('#container').append("<div class='notify-box' style='left:" + posX + "px; top:" + posY + "px'> You found " + characterNames[i] + "</div>");
            }
      }
      if (!isFound){
        setTimeout(function(){
          $('.selector-circle').last().fadeOut();
        }, 450);
      }
  }

  var getMousePosition = function(object, event){
    return{
      x: Math.round(event.pageX - object.offset().left),
      y: Math.round(event.pageY - object.offset().top)
    };
  }

  $('#container').click(function(event){
    if (!clicked){
      clicked = true;
      var mousePosition = getMousePosition($('#container'), event);
      var posX = mousePosition.x -7;
      var posY = mousePosition.y -7;
      var circle = $("<div class='selector-circle' style='left:" + posX +"px; top:" + posY + "px'></div>")
      circle.appendTo($('#container'));
      setTimeout(function(){circle.addClass("scale");}, 50);
      checkSelection(posX,posY);
      setTimeout(function(){
        clicked = false;
      },450);
      console.log(mousePosition.x + ", "+mousePosition.y)

    }
  });



});
