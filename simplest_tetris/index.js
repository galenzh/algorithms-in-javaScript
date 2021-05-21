// 
let COL = 10,
    ROW = 20;

function init() {
  let screen = document.getElementById('screen');
  let htmlStr = '';
  for(let i=0; i < 200; i++) {
    htmlStr += '<div class="square"></div>';
  }
  screen.innerHTML = htmlStr;
}

init();
let Util = {
  getRandomNumber(start, end) {
    Math.floor(Math.random() * end) + start;
  }
}
class Element {
  constructor(matrix) {
    this.matrix = matrix;
    this.position = {x: 0, y: 0};
    this.prePosition = {x: 0, y: 0};
  }
  rotate() {
    this.matrix = this.matrix.map((val, index) => this.matrix.map(row => row[index]).reverse());
  }
  moveLeft() {
    this.position.y -= 1;
  }
  moveRight() {
    this.position.y += 1;
  }
  moveDown() {
    this.position.x += 1;
  }
  moveUp() {
    this.position.x -= 1;
  }
  backPre() {
    this.position.x = this.prePosition.x;
    this.position.y = this.prePosition.y;
  }
  checkCollision(squares) {
    for(let i=0; i<this.matrix.length; i++) {
      for(let j=0; j<this.matrix[i].length; j++) {
        if(this.matrix[i][j] > 0) {
          if(this.position.x + i < 0 || this.position.x + i > COL - 1 || this.position.y + j < 0 || this.position.y + j > ROW -1) {
            return true;
          }
          if(squares[this.position.x + i][this.position.y + j] > 0) {
            return true;
          }
        }
      }
    }
    return false;
  }
}
class ElementFactory {
  getRandomElement(eleNum) {
    let num = typeof eleNum !== 'undefined' ? eleNum : Util.getRandomNumber(0, 7);
    if(num === 0) {
      return new Element([ // I
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
      ]);
    } else if(num === 1) {
      return new Element([ // L
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
      ]);
    } else if(num === 2) {
      return new Element([ // J
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
      ]);
    } else if(num === 3) {
      return new Element([ // N
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1]
      ]);
    } else if(num === 4) {
      return new Element([ // Z
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 0]
      ]);
    } else if(num === 5) {
      return new Element([ // T
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0]
      ]);
    } else if(num === 6) {
      return new Element([ // O
        [1, 1],
        [1, 1]
      ]);
    }
  }
}
class Tetris {
  constructor() {
    this.squares = new Array(ROW).fill(Array(COL).fill(0));
    this.doms = document.getElementById('screen').childNodes;
    this.eleFactory = new ElementFactory();
    this.ele = this.eleFactory.getRandomElement(1);
  }
  update() {
    for(let i=0; i<this.squares.length; i++) {
      for(let j=0; j<this.squares[i].length; j++) {
        if(this.squares[i][j] > 0) {
          this.doms[i * COL + j].className = 'square active';
        } else {
          this.doms[i * COL + j].className = 'square';
        }
      }
    }
    for(let i=0; i<this.ele.matrix.length; i++) {
      for(let j=0; j<this.ele.matrix[i].length; j++) {
        if(this.ele.matrix[i][j] > 0) {
          this.doms[(this.ele.position.x + i) * COL + this.ele.position.y + j].className = 'square active';
        } else {
          this.doms[(this.ele.position.x + i) * COL + this.ele.position.y + j].className = 'square';
        }
      }
    }
  }
  init() {
    var game = this;
    function loop(stamp) {
      game.update();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
}

let tetris = new Tetris();
tetris.init();

window.addEventListener('keydown', function(event) {
  if(event.key === 'a') {
    tetris.ele.moveLeft();
  } else if(event.key === 'd') {
    tetris.ele.moveRight();
  } else if(event.key === 's') {
    tetris.ele.moveDown();
  } else if(event.key === 'w') {
    tetris.ele.rotate();
  }
});