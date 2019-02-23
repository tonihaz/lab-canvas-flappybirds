var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');    
                                                                                                             
function drawBackground() {

}

drawBackground()

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  

  function startGame() {
    var image = new Image();
    image.src = './images/bg.png';
    ctx.drawImage(image, 0, 0, 1200, 600);
  }

};
