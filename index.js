    let currentPlayer = 1;

    function reset() {
        const sc1 = document.getElementById("score1");
        const sc2 = document.getElementById("score2");

        sc1.innerText = "Score: 0";
        sc2.innerText = "Score: 0";

        const spaces = document.querySelectorAll("td");
        spaces.forEach(space => {space.innerText = "";});
    }

    function changeTurns() {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        const currentPlayerDisplay = document.getElementById(`player${currentPlayer}`);
        const otherPlayerDisplay = document.getElementById(`player${currentPlayer === 1 ? 2 : 1}`);

        currentPlayerDisplay.style.textDecoration = "underline black";
        otherPlayerDisplay.style.textDecoration = "none";
    }

    document.addEventListener("DOMContentLoaded", function() {

        const currentPlayerDisplay = document.getElementById(`player${currentPlayer}`);
        currentPlayerDisplay.style.textDecoration = "underline black";

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