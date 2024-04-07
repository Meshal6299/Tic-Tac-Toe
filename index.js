let currentPlayer = 1;

    function reset() {
        const sc1 = document.getElementById("score1");
        const sc2 = document.getElementById("score2");

        sc1.innerText = "Score: 0";
        sc2.innerText = "Score: 0";

        const spaces = document.querySelectorAll("td");
        spaces.forEach(space => {space.innerText = "";});

        const currentPlayerDisplay = document.getElementById(`player1}`);
        const otherPlayerDisplay = document.getElementById(`player2`);

        currentPlayerDisplay.style.textShadow = "none"; // Add text shadow to indicate current player
        otherPlayerDisplay.style.textShadow = "none"; // Remove text shadow from other player
    }

    function changeTurns() {
        currentPlayer = currentPlayer === 1 ? 2 : 1; // Toggle between players 1 and 2
        const currentPlayerDisplay = document.getElementById(`player${currentPlayer}`);
        const otherPlayerDisplay = document.getElementById(`player${currentPlayer === 1 ? 2 : 1}`);

        currentPlayerDisplay.style.textShadow = "0 0 20px black"; // Add text shadow to indicate current player
        otherPlayerDisplay.style.textShadow = "none"; // Remove text shadow from other player
    }

    document.addEventListener("DOMContentLoaded", function() {
        const spaces = document.querySelectorAll("td");
        spaces.forEach(space => {
            space.addEventListener("click", function() {
                if (space.innerText.trim() === "") {
                    space.innerText = currentPlayer === 1 ? "X" : "O";
                    space.style.color = space.innerText === 'X' ? 'blue' : 'red';
                    changeTurns();
                }
            });
        });
    });

    function checkWinner() {
        const spaces = document.querySelectorAll("td");
        spaces.forEach(space => {
            
        });
    }