//settings
var rows = 5,
    columns = 9,
    increment = 1,
    intervalTime = 500;


var startX = 1,
    startY = 1,
    direction, //38 - up, 39 - right, 40 - down, 41 - left
    gameStart = true,
    gameOver = false,
    tail = 1,
    arrSnakeX = [],
    arrSnakeY = [];

createMap();

//creating map
function createMap() {
  var map = document.createElement('table');
  for(var i = 0; i < rows; i++) {
    var row = document.createElement('tr');

    for(var j = 0; j < columns; j++) {
      var column = document.createElement('td');
      column.className = 'item'
      row.appendChild(column);
    }

    map.appendChild(row);
  }
  document.body.appendChild(map);
}

//creating snake
var table = document.getElementsByTagName('table')[0];
table.rows[startY].cells[startX].classList.add('snake');


window.addEventListener('keydown', function(e) {
  direction = e.keyCode;

  if(direction == 40) {
    moveSnake();
  }

}, false)



var ni = startY + 1;
function moveSnake() {
  if (gameStart) {

    var interval = window.setInterval(function(){
      if (direction == 40) {
        console.log(ni);
        if (ni < table.rows.length) {
          table.rows[ni].cells[startX].classList.add('snake');
          ni++;
          arrSnakeY[arrSnakeY.length] = ni;
          arrSnakeX[arrSnakeX.length] = startX;
          console.log(arrSnakeY);
          cutTail();
        }

      }
    }, intervalTime);

  }
}

function cutTail() {
  var mustBeDeleted = arrSnakeY.length - tail;
  alert(mustBeDeleted);

}
