const gameBoard = (() => {
    // pushes cells to board array
    let board = []
    for (i = 0; i < 9; i++) {
        board.push("cell");
    }
    
    const displayBoard = document.querySelector('#gameBoard');

    board.forEach((item) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        displayBoard.appendChild(cell);
    })

    return { board };

})();