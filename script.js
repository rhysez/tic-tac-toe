const buttonPlayerX = document.querySelector('#X');
const buttonPlayerO = document.querySelector('#O');
const displayBoard = document.querySelector('#gameBoard');
const cell = document.querySelector('.cell');

const createPlayer = (name, marker) => {
    return { name, marker }
};

const gameBoard = (() => {
    let board = []
    for (i = 0; i < 9; i++) {
        board.push("X");
    }

    // builds game board with 9 cells
    board.forEach((item) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        displayBoard.appendChild(cell);
    })

    return { board };
})();

const game = ((activePlayer) => {
    buttonPlayerX.addEventListener('click', () => {
        const playerX = createPlayer('Player 1', 'X');
        game.activePlayer = playerX;
        buttonPlayerX.textContent = "X ✓";
        buttonPlayerX.style.color = "green";
        buttonPlayerO.textContent = "O";
        buttonPlayerO.style.color = "snow";
})

    buttonPlayerO.addEventListener('click', () => {
        const playerO = createPlayer('Player 2', 'O');
        game.activePlayer = playerO;
        buttonPlayerO.textContent = "O ✓";
        buttonPlayerO.style.color = "green";
        buttonPlayerX.textContent = "X";
        buttonPlayerX.style.color = "snow";
})

    return { activePlayer }
})();



