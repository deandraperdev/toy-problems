/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful
// [
//   [x, x, x]
//   [x, x, x]
//   [x, x ,x]
// ]

// I would just like to say that I have solved this, but implementation will take a great deal of time more than hour.

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var nextDirection = function(direction) {
  switch(direction) {
    case 'right':
      return 'down';
      break;
    case 'down':
      return 'left';
      break;
    case 'left':
      return 'up';
      break;
    case 'up':
      return 'right';
      break;
    
  }
}

let solutions = 0;
let currentDirection = 'right';
let directionsTried = 0;


var robotPaths = function(n, board, i, j) {
  //use passed down board or makeBoard if initializing
  if (directionsTried === 4) {
    return;
  }
  if (board.hasBeenVisited[i][j] || i > n || j > n || i < 0 || j < 0) {
    currentDirection = nextDirection(currentDirection);
    directionsTried += 1;
    return;
  }
  if (i === n && j === n) {
    solutions++
  }
  board = board || new makeBoard(n);
  switch (currentDirection) {
    case 'right':
      return robotPaths(n, board, i, j + 1);
      break;
    case 'down':
      return robotPaths(n, board, i + 1, j);
      break;
    case 'right':
      return robotPaths(n, board, i, j - 1);
      break;
    case 'right':
      return robotPaths(n, board, i - 1, j);
      break;
    
  }


};

//initialize at 0,0
robotPaths(5, board, 0, 0);
/*
move one direction
if not oob, and not hasBeenVisited, toggle piece
else backtrack and increment directionsTried
if piece is [n][n], solutions++, then backtrack
*/