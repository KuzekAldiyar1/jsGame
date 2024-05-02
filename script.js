
function startGame() {
    document.getElementById("gameContent").style.display = "block";
    document.getElementById("story").classList.remove("blink");
}

let points = 0;

function explore(location) {
    let resultText = document.getElementById("resultText");

    if (location === 'canteen') {
        points += 10;
        resultText.innerHTML = "You went to the canteen with Altair and Islam then you bought a big slice of pizza and started to talk about the homewoek of Talgat Polatovich. Suddenly you remembered that you need to do the homework!!!";

        setTimeout(() => {
            resultText.innerHTML += "<br><br>Your target is to do homework in 15 minutes of break time and at least to not get F mark in your Kundelik!!!!!!";
        }, 3000);
    } else if (location === 'volleyball') {
        points += 5;
        resultText.innerHTML = "While you were playing with Erdar you saw the Erbol Omarovich and remembered that his handshake is so strong that you can get at least an injury";

        setTimeout(() => {
            resultText.innerHTML += "<br><br>Your targer is to do a handshake on the level of Erbol Omarovich!!!";
        }, 3000);
    } else if (location === 'homework') {
        points += 7;
        resultText.innerHTML = "You were doing your homework and did it great and finished all. Then you really wanted to play some basketball with friends ";

        setTimeout(() => {
            resultText.innerHTML += "<br><br>Your target is to eat a dinner an go to play some basketball but you should at least try to not get any injury while playing a game with friends";
        }, 3000);
    }

    resultText.innerHTML += "<br><br>Points: " + points;
}
