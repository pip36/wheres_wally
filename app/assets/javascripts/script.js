$(document).on("turbolinks:load", function(){
  var width = $('.game-picture').width();
  var height = $('.game-picture').height();
  $('#container').css({'width':width, 'height': height});

  var characterNames = [];
  var characterPositionX = [];
  var characterPositionY = [];
  var startTime = Date.now();
  var clicked = false;
  var beenFound = [];
  var imageID;
  var url = window.location.href


if ((url.slice(-1).search(/\d/)) == 0){
  $.getJSON(window.location.href + ".json", function(data, posX, posY){
    imageID = data.id;
    for(var i = 0; i < data.characters.length; i++){
      characterNames.push(data.characters[i].name);
      characterPositionX.push(data.characters[i].positionX);
      characterPositionY.push(data.characters[i].positionY);
      beenFound.push(false);
    }
  }
)};

  var checkSelection = function(posX, posY){
    var isFound = false;
      for(var i = 0; i < characterNames.length; i++){

        if (((characterPositionX[i] - posX) < 50) && ((characterPositionX[i] - posX) > -50) &&
            ((characterPositionY[i] - posY) < 50) && ((characterPositionY[i] - posY) > -50) && !beenFound[i])
            {
              var secs = (Date.now()-startTime)/1000;
              isFound = true;
              beenFound[i] = true;
              $('#container').append("<div class='notify-box' style='left:" + posX
              + "px; top:" + posY + "px'> You found " + characterNames[i]
              + " in "+ secs +" seconds!</div>");
              $('#'+characterNames[i].replace(" ","")).css("opacity", "1");
              if (checkWin()){
                var finalTime = (Date.now()-startTime)/1000;
                var playerName = prompt("You found everyone! \n In only " + finalTime + " seconds! \n Enter you name");
                //send this via json to rails url "score/new
                //score model name:"phil" score:"float"
                //resources only:[:new]
                //controller accept json request and add the data to the database
                $.post("http://floating-everglades-97160.herokuapp.com/scores", {name: playerName, time: finalTime, id: imageID}, null, "json");
              }
            }
      }
      if (!isFound){
        setTimeout(function(){
          $('.selector-circle').last().fadeOut();
        }, 450);
      }
  }

  var checkWin = function(){
    for(var i = 0; i < beenFound.length; i++){
      if (beenFound[i] == false){
        return false
      }
    }
    return true
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
