function startGame() {
    document.getElementById("gameContent").style.display = "block";
    document.getElementById("story").classList.remove("blink");
    document.getElementById("backgroundMusic").play();
}

let points = 0;
let achievements = [];

function explore(location) {
    let resultText = document.getElementById("resultText");
    let achievementsDiv = document.getElementById("achievements");

    if (location === 'canteen') {
        points += 10;
        resultText.innerHTML = "You went to the canteen with Altair and Islam then you bought a big slice of pizza and started to talk about the homework of Talgat Polatovich. Suddenly you remembered that you need to do the homework!!!";

        setTimeout(() => {
            resultText.innerHTML += "<br><br>Your target is to do homework in 15 minutes of break time and at least to not get F mark in your Kundelik!!!!!!";
        }, 3000);

        if (!achievements.includes("Pizza Lover")) {
            achievements.push("Pizza Lover");
            achievementsDiv.innerHTML += "<br>Achievement Unlocked: Pizza Lover!";
        }
    } else if (location === 'volleyball') {
        points += 5;
        resultText.innerHTML = "While you were playing with Erdar you saw the Erbol Omarovich and remembered that his handshake is so strong that you can get at least an injury";

        setTimeout(() => {
            resultText.innerHTML += "<br><br>Your target is to do a handshake on the level of Erbol Omarovich!!!";
        }, 3000);

        if (!achievements.includes("Volleyball Pro")) {
            achievements.push("Volleyball Pro");
            achievementsDiv.innerHTML += "<br>Achievement Unlocked: Volleyball Pro!";
        }
    } else if (location === 'homework') {
        points += 7;
        resultText.innerHTML = "You were doing your homework and did it great and finished all. Then you really wanted to play some basketball with friends ";

        setTimeout(() => {
            resultText.innerHTML += "<br><br>Your target is to eat a dinner an go to play some basketball but you should at least try to not get any injury while playing a game with friends";
        }, 3000);

        if (!achievements.includes("Homework Hero")) {
            achievements.push("Homework Hero");
            achievementsDiv.innerHTML += "<br>Achievement Unlocked: Homework Hero!";
        }
    } else if (location === 'library') {
        points += 3;
        resultText.innerHTML = "You went to the library to find a book for your project. You found the book, but it was so boring that you fell asleep!";

        setTimeout(() => {
            resultText.innerHTML += "<br><br>Your target is to wake up before the librarian catches you!";
        }, 3000);

        if (!achievements.includes("Bookworm")) {
            achievements.push("Bookworm");
            achievementsDiv.innerHTML += "<br>Achievement Unlocked: Bookworm!";
        }
    } else if (location === 'classroom') {
        points += 8;
        resultText.innerHTML = "You sneaked into the classroom to get your forgotten notebook. But the teacher caught you!";

        setTimeout(() => {
            resultText.innerHTML += "<br><br>Your target is to come up with a good excuse!";
        }, 3000);

        if (!achievements.includes("Sneaky Student")) {
            achievements.push("Sneaky Student");
            achievementsDiv.innerHTML += "<br>Achievement Unlocked: Sneaky Student!";
        }
    }

    resultText.innerHTML += "<br><br>Points: " + points;
}
    
