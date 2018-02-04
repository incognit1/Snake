//settings
var rows = 10,
    columns = 20,
    increment = 1,
    intervalTime = 500;


var currentX = 1,
    currentY = 1,
    direction, //38 - up, 39 - right, 40 - down, 41 - left
    gameStart = false,
    gameOver = false,
    tail = 2,
    arrSnakeX = [1],
    arrSnakeY = [1],
    interval;

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
table.rows[currentY].cells[currentX].classList.add('snake');



function Start(){
    interval = setInterval(function() {
      if (gameStart) {
        update();
      }

      else if(gameOver) {
        clearInterval(interval);
      }

    }, 200);
}


window.addEventListener('keydown', function(e) {
  if(e.keyCode == 40 || e.keyCode == 39 || e.keyCode == 38 || e.keyCode == 37) {
    direction = e.keyCode;
    gameStart = true;
  }

}, false)



//Обновление
function update() {
  if (direction == 40) { //up
    if (currentY < table.rows.length - 1) {
      ++currentY;
    }
  }

  if (direction == 38) { //left
    if (currentY < table.rows.length - 1) {
      --currentY;
    }
  }

  if (direction == 39) { //right
    if (currentX < table.rows[currentY].cells.length - 1) {
      ++currentX;
    }
  }

  if (direction == 37) { //down
    if (currentX < table.rows[currentY].cells.length - 1) {
      --currentX;
    }
  }

  table.rows[currentY].cells[currentX].classList.add('snake');
  arrSnakeY[arrSnakeY.length] = currentY;
  arrSnakeX[arrSnakeX.length] = currentX;

  cutTail();
}

//Сохранение длины змейки
function cutTail() {
  var mustBeDeleted = arrSnakeY.length - tail; // количество элементов на удаление
  console.log('Y = ' + arrSnakeY);
  console.log('X = ' + arrSnakeX);

  //alert("mustBeDeleted = " + mustBeDeleted) ;                                            // в зависимости от длины
  if(mustBeDeleted >= 1) {
      //создаем массив удаленных элементов X и Y
      var deletedX = arrSnakeX.splice(0, mustBeDeleted);
      var deletedY = arrSnakeY.splice(0, mustBeDeleted);
      console.log('deletedX = ' + deletedX);
      console.log('deletedY = ' + deletedY);

      //в цикле удаляем лишний хвост
      for(var i = 0; i < deletedX.length; i++) {
        //alert('del Y = ' + deletedY[i]);
        //alert('del X = ' + deletedX[i]);
        table.rows[deletedY[i]].cells[deletedX[i]].classList.remove('snake');


      }
  }

}

Start();
