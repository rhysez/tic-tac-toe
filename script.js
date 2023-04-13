const createPlayer = (id, marker) => {
    return { id, marker }
};

const gameBoard = (() => {
    // pushes cells to board array
    let board = []
    for (i = 0; i < 9; i++) {
        board.push("X");
    }
    
    const displayBoard = document.querySelector('#gameBoard');

    // builds game board with 9 cells
    board.forEach((item) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        displayBoard.appendChild(cell);
    })

    return { board };
    
})();

const game = ((playerX, playerO) => {

    const buttonPlayerX = document.querySelector('#X');
    const buttonPlayerO = document.querySelector('#O');

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

    // value is either X or O dependent on who is currently playing
    let activePlayer;

    return {playerX, playerO, activePlayer}

})();



