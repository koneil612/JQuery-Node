// **************************************
// Closure Exercises
// **************************************

/// **************************************
// Counter
// **************************************
// Make a counter function that returns a function that returns a successive number each time it is called.
//
// > var count1 = counter()
// > var count2 = counter()
// > count1()
// 1
// > count1()
// 2
// > count2()
// 1
// > count2()
// 2
// > count1()
// 3

function counter() {
    var count = 0;
    function countForReal() {
        count++;
        return count;
    }
    return countForReal;
}

var count1 = counter();
var count2 = counter();

// **************************************
// Counter 2
//// **************************************

// Allow the caller of counter to initialize the count to the first argument that's passed in.
//
// > var count1 = counter(5)
// > count1()
// 5
// > count1()
// 6

function counter(x) {
    var count = x;
    function countForReal() {
        count++;
        return count;
    }
    return count,
    countForReal();
}
var count3 = counter(5);

//// **************************************
// Battleship
//// **************************************
// The following code implements a battleship board. The fire function takes a row and col and returns 'Hit!' or 'miss' depending on if it hit a part of the ship. The problem is we don't want the enemy to see our board! So we need to hide the board variable within a closure, but still expose the fire function to the outside. Use the module pattern to do this.
//


function fire(row, col) {
    var board =     [
          ['o', ' ', 'o', 'o', ' '],
          ['o', ' ', ' ', ' ', ' '],
          ['o', ' ', 'o', 'o', 'o'],
          ['o', ' ', ' ', ' ', ' '],
          [' ', ' ', 'o', ' ', 'o'],
          [' ', ' ', 'o', ' ', 'o']
        ];
  if (board[row][col] === 'o') {
    board[row][col] = 'x';
    return 'Hit!';
} else {
    return 'Miss';
  }
return fire();
}


console.log(fire(0, 1));
