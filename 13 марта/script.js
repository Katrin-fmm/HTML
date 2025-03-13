const boardSize = 10;
const gameBoard = document.getElementById('game-board');
const cells = [];

let snake = [{ x: 0, y: 0 }];
let food = { x: 5, y: 5 };
/**
 *  отвечает за направление движения змейки
 */
let direction = 'right'; // Начальное направление змейки


// Остальной код игры...

/**
 * отвечает за скорость движения змейки
 */
let speed = 800;

function initializeGameBoard() {
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cells.push(cell);
      gameBoard.appendChild(cell);
    }
  }
}

function render() {
  cells.forEach((cell) => cell.classList.remove('snake', 'food'));

  snake.forEach((segment) => {
    const index = segment.x + segment.y * boardSize;
    cells[index].classList.add('snake');
  });

  const foodIndex = food.x + food.y * boardSize;
  cells[foodIndex].classList.add('food');
}

function update() {
  const head = Object.assign({}, snake[0]);

  switch (direction) {
    case 'up':
      head.y -= 1;
      break;
    case 'down':
      head.y += 1;
      break;
    case 'left':
      head.x -= 1;
      break;
    case 'right':
      head.x += 1;
      break;
  }

  if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize) {
    resetGame();
    return;
  }

  if (isCollisionWithSelf(head)) {
    resetGame();
    return;
  }

  if (head.x === food.x && head.y === food.y) {
    snake.unshift(head);
    generateFood();
  } else {
    snake.pop();
    snake.unshift(head);
  }
}

function isCollisionWithSelf(head) {
  return snake
    .slice(1)
    .some((segment) => segment.x === head.x && segment.y === head.y);
}

function generateFood() {
  food = {
    x: Math.floor(Math.random() * boardSize),
    y: Math.floor(Math.random() * boardSize),
  };
}

function resetGame() {
  snake = [{ x: 0, y: 0 }];
  direction = 'right';
  generateFood();
  updateScore(snake.length);
}

initializeGameBoard();

function gameLoop() {
  update();
  render();
  updateScore(snake.length);
  setTimeout(gameLoop, speed);
}



// TODO: добавить обработчик нажатия на клавиши

const button = (event) => {
  ///////////////////                          1
  if (event.key === 'ArrowLeft') {
    direction = 'left';
  } else if (event.key === 'ArrowRight') {
    direction = 'right';
  } else if (event.key === 'ArrowUp') {
    direction = 'up';
  } else if (event.key === 'ArrowDown') {
    direction = 'down';
  } 
};
document.addEventListener('keydown', button);



// TODO: добавить обработчик нажатия клавиши R (сброс игры)

const over = (evers) => {
  if (evers.key === 'r' || evers.key === 'R') { 
    resetGame(); 
}};

document.addEventListener('keydown', over); 


// TODO: добавить обработчики нажатия кнопок

const button1 = document.getElementById('up');
button1.addEventListener('click', () => {
  direction='up';
});


const button2 = document.getElementById('left');
button2.addEventListener('click', () => {
  direction='left';
});


const button3 = document.getElementById('down');
button3.addEventListener('click', () => {
  direction='down';
});


const button4 = document.getElementById('right');
button4.addEventListener('click', () => {
  direction='right';
});



// TODO: добавить возможность изменения скорости змейки

const speedInput = document.getElementById('speed-input');

speedInput.addEventListener('change', (event) => {
  const newSpeed = parseInt(event.target.value, 10); 
  if (!isNaN(newSpeed)) {
    speed = newSpeed; 
  } else {
    speedInput.value = 800;
    speed = 800;
  }
});




updateScore(snake.length);
gameLoop();

function updateScore(score) {

  const scoreElement = document.querySelector('#score');
  
  scoreElement.textContent = `Счёт: ${score-1}`;

}
