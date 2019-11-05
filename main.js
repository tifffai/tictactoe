function startGame() {
    document.turn = "X";
    showMessage("Player " + document.turn + " starts \n LET'S PLAY!")
}

function showMessage(msg) {
    document.getElementById("message").innerText = msg;
}


function nextMove(square) {
    if(square.innerText == '') {
        square.innerText = document.turn;
        switchPlayer();
    } else {
        alert("Too bad, this one is taken. Pick another spot!")
    }
}

function switchPlayer() {
    if(checkWinner(document.turn)) {
        showMessage("👑  Congrats! Player " + document.turn + " you won! 👑 ")
    } else if(document.turn == "X") {
        document.turn = "O"
        showMessage("Player " + document.turn + ", play your turn");
    } else {
        document.turn = "X"
        showMessage("Player " + document.turn + ", play your turn");
    };

}

function checkWinner(move) {
    let result = false;

    if(checkSets(1, 2, 3, move) || 
        checkSets(4, 5, 6, move) || 
        checkSets(7, 8, 9, move) || 
        checkSets(1, 4, 7, move) || 
        checkSets(2, 5, 8, move) || 
        checkSets(3, 6, 9, move) || 
        checkSets(1, 5, 9, move) || 
        checkSets(3, 5, 7, move)) {
            result = true
        }
        return result
}

function checkSets(a, b, c, move) {
    let result = false;

    if (getSquare(a) == move && getSquare(b) == move && getSquare(c) == move) {
        result = true;
    }
    return result
}

function getSquare(number) {
    return document.getElementById("s" + number).innerText;
}