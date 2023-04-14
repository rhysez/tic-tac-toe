const buttonPlayerX = document.querySelector('#X');
const buttonPlayerO = document.querySelector('#O');
const displayBoard = document.querySelector('#gameBoard');
const gameContainer = document.querySelector('#gameContainer');
const header = document.querySelector('#header');
const cell = document.querySelectorAll('.cell');
const restartGame = document.querySelector('#restart');

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
        if (board[0].textContent === "X" && board[3].textContent === "X" && board[6].textContent === "X"
         || board[1].textContent === "X" && board[4].textContent === "X" && board[7].textContent === "X"
         || board[2].textContent === "X" && board[5].textContent === "X" && board[8].textContent === "X"
         || board[0].textContent === "X" && board[1].textContent === "X" && board[2].textContent === "X"
         || board[3].textContent === "X" && board[4].textContent === "X" && board[5].textContent === "X"
         || board[6].textContent === "X" && board[7].textContent === "X" && board[8].textContent === "X"
         || board[0].textContent === "X" && board[4].textContent === "X" && board[8].textContent === "X"
         || board[2].textContent === "X" && board[4].textContent === "X" && board[6].textContent === "X"){
            gameContainer.style.backgroundColor = "lightgreen";
            header.style.color = "lightgreen";
            header.textContent =  `${playerNameX.value} wins!`;
            if (playerNameX.value === ""){
                header.textContent = "O wins!"
            }

        } else if ((board[0].textContent === "O" && board[3].textContent === "O" && board[6].textContent === "O"
                 || board[1].textContent === "O" && board[4].textContent === "O" && board[7].textContent === "O"
                 || board[2].textContent === "O" && board[5].textContent === "O" && board[8].textContent === "O"
                 || board[0].textContent === "O" && board[1].textContent === "O" && board[2].textContent === "O"
                 || board[3].textContent === "O" && board[4].textContent === "O" && board[5].textContent === "O"
                 || board[6].textContent === "O" && board[7].textContent === "O" && board[8].textContent === "O"
                 || board[0].textContent === "O" && board[4].textContent === "O" && board[8].textContent === "O"
                 || board[2].textContent === "O" && board[4].textContent === "O" && board[6].textContent === "O")){
                    gameContainer.style.backgroundColor = "lightgreen";
                    header.style.color = "lightgreen";
                    header.textContent = `${playerNameO.value} wins!`; 
                    if (playerNameO.value === ""){
                        header.textContent = "O wins!"
                    }
                 }
    };

    function restart(){
        window.location.reload();
    }

    restartGame.addEventListener('click', () => {
        restart();
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
