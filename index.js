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
    }

    document.addEventListener("DOMContentLoaded", function() {


        const spaces = document.querySelectorAll("td");
        spaces.forEach(space => {
            space.addEventListener("click", function() {
                if (space.innerText.trim() === "") {
                    space.innerText = currentPlayer === 1 ? "X" : "O";
                    space.style.color = space.innerText === 'X' ? 'blue' : 'red';
                    changeTurns();
                    checkWinner();
                }
            });
        });
    });

    function checkWinner() {
        const spaces = document.querySelectorAll("td");
        let winner;
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            const spaceA = spaces[a].innerText;
            const spaceB = spaces[b].innerText;
            const spaceC = spaces[c].innerText;

            if (spaceA !== "" && spaceA === spaceB && spaceA === spaceC) {
                winner = spaceA;
                announceWinner(winner);
                reset();
                break;
            }
        }
    }

    let isWinner = false;

    function announceWinner(winner) {
        if (isWinner) {
            return;
        }
        const message = document.createElement("h2");
        message.innerText = winner === "X" ? document.getElementById("name1").innerText + " won" : document.getElementById("name2").innerText + " won" ;
        const div = document.createElement("div");
        div.classList.add("announce-winner");
        div.appendChild(message);
        const body = document.querySelector("body");
        body.appendChild(div);

        const sc1 = document.getElementById("score1");
        const sc2 = document.getElementById("score2");

        if (winner === "X") {
            const currentScore1 = parseInt(sc1.innerText.split(":")[1].trim());
            sc1.innerText = "Score: " + (currentScore1 + 1);
        } else {
            const currentScore2 = parseInt(sc2.innerText.split(":")[1].trim());
            sc2.innerText = "Score: " + (currentScore2 + 1);
        }


        setTimeout(function() {body.removeChild(div);isWinner = false;}, 2000);
    }

    let isProfileOpen = false;

    function changeProfile(playerNum) {
        if (isProfileOpen) {
            return;
        }

        const name = document.getElementById(`name${playerNum}`).innerText;

        const body = document.querySelector("body");

        const changePage = document.createElement("div");
        changePage.classList.add("changeProfile");

        const nameLabel = document.createElement("label");
        nameLabel.innerText = `Change ${name}'s name ?`;
        changePage.appendChild(nameLabel);

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        changePage.appendChild(nameInput);

        const colorLabel = document.createElement("label");
        colorLabel.innerText = `Change ${name}'s color ?`;
        changePage.appendChild(colorLabel);

        const colorInput = document.createElement("select");
        colorInput.name = "color";
        colorInput.id = "color";

        const colorOptions = ["orange", "pink", "green", "yellow", "purple"];
        colorOptions.forEach(color => {
            const option = document.createElement("option");
            option.value = color;
            option.text = color;
            colorInput.appendChild(option);
        });

        changePage.appendChild(colorInput);

        const closeBtn = document.createElement("button");
        closeBtn.classList.add("closeBtn");
        closeBtn.innerText = "X";

        changePage.appendChild(closeBtn);
        closeBtn.addEventListener("click", function() {
            body.removeChild(changePage);
            isProfileOpen = false;
        });

        const doneBtn = document.createElement("button");
        doneBtn.classList.add("doneBtn");
        doneBtn.innerText = "Confirm";
        doneBtn.addEventListener("click", function() {

            const player = document.getElementById(`player${playerNum}`);
            const name = document.getElementById(`name${playerNum}`);

            if(nameInput.value == ""){
                window.alert("Empty name");
                changePage(player);
            }
            else{
                player.style.color = color.value;
                name.innerText = nameInput.value;
            }

            

            body.removeChild(changePage);
            isProfileOpen = false;

        });

        changePage.appendChild(doneBtn);

        body.appendChild(changePage);

        isProfileOpen = true;
    }