const buttonPlayerX = document.querySelector('#X');
const buttonPlayerO = document.querySelector('#O');
const displayBoard = document.querySelector('#gameBoard');
const cell = document.querySelector('.cell');

const playerNameX = document.querySelector('#playerNameX');
const playerNameO = document.querySelector('#playerNameO');
const buttonSubmitNameX = document.querySelector('#nameX');
const buttonSubmitNameO = document.querySelector('#nameO');

const createPlayer = (name, marker) => {
    return { name, marker }
};

const gameBoard = (() => {
    let board = []
    for (i = 0; i < 9; i++) {
        board.push("X");
    }

    board.forEach((item) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        displayBoard.appendChild(cell);
        cell.addEventListener('click', () => {
            if (game.activePlayer === game.player1) {
                cell.textContent = "X";
            } else if (game.activePlayer === game.player2) {
                cell.textContent = "O";
            }
        })
    })

    buttonSubmitNameX.addEventListener('click', () => {
        playerNameX.style.backgroundColor = 'var(--containercolor)'
    })

    buttonSubmitNameO.addEventListener('click', () => {
        playerNameO.style.backgroundColor = 'var(--containercolor)'
    })

    return { board };
})();

// decides who is currently playing based on button clicked
// holds information about both players
const game = ((activePlayer) => {
    const player1 = createPlayer('Player 1', 'X');
    const player2 = createPlayer('Player 2', 'O');
    buttonPlayerX.addEventListener('click', () => {
        game.activePlayer = player1;
        buttonPlayerX.textContent = "X ✓";
        buttonPlayerX.style.color = "green";
        buttonPlayerO.textContent = "O";
        buttonPlayerO.style.color = "snow";
})

    buttonPlayerO.addEventListener('click', () => {
        game.activePlayer = player2;
        buttonPlayerO.textContent = "O ✓";
        buttonPlayerO.style.color = "green";
        buttonPlayerX.textContent = "X";
        buttonPlayerX.style.color = "snow";
})

    return { activePlayer, player1, player2 }
})();
