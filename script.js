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
    let cellId = 1;

    for (i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = cellId++;
        displayBoard.appendChild(cell);
        board.push(cell);
        
        board.forEach((item, index) => {
            cell.addEventListener('click', () => {
                if (game.activePlayer === game.player1) {
                    cell.textContent = "X";
                    checkWin();
    
                } else if (game.activePlayer === game.player2) {
                    cell.textContent = "O";
                    checkWin();
                }
            })
        })
    }

    

    buttonSubmitNameX.addEventListener('click', () => {
        playerNameX.style.backgroundColor = 'var(--containercolor)'
        playerNameX.style.boxShadow = '5px 5px var(--itemcolor)'
    })

    buttonSubmitNameO.addEventListener('click', () => {
        playerNameO.style.backgroundColor = 'var(--containercolor)'
        playerNameO.style.boxShadow = '5px 5px var(--itemcolor)'
    })

    function checkWin(){
        // will check if player has won
    }

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
