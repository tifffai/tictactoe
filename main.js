function startGame() {
    document.turn = "X";
    showMessage("Player " + document.turn + " starts. \n Let's Play!")
}

function showMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function nextMove(square) {
    if(square.innerText == '') {
        square.innerText = document.turn;
        switchPlayer();
    } else {
        showMessage("Too bad... Spot is taken, pick another one!")
    }
}

function switchPlayer() {
    if(document.turn == "X") {
        document.turn = "O"
    } else {
        document.turn = "X"
    }
}