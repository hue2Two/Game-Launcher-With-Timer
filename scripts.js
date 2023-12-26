console.log("hello world");

let agario = document.getElementById("agario");
let diepio = document.getElementById("diepio");
let play_btn = document.getElementById("play_btn");
let timer_btn = document.getElementById("timer_btn");
let gameClicked;

agario.addEventListener("click", () => {
    console.log("agario was clicked");
    agario.style.border = "solid brown 5px";
    gameClicked = "agario";
});

diepio.addEventListener("click", () => {
    console.log("diepio was clicked");
    diepio.style.border = "solid brown 5px";
    gameClicked = "diepio";
});

play_btn.addEventListener("click", () => {
    if (gameClicked === "agario" || gameClicked === "diepio") {
        playing(gameClicked);
        startTimer(); // Start the timer
    }
});

function playing(game) {
    console.log(`playing game: ${game}`);

    if (game === "agario") {
        window.open("https://agar.io", "_blank");
    } else if (game === "diepio") {
        window.open("https://diep.io/", "_blank");
    }
}

// Call createTimer when the page loads to set up the timer
window.onload = createTimer;

function createTimer() {
    console.log("timer btn was clicked");

    let timerContainer = document.createElement('div');
    let timerDisplay = document.createElement('p');
    timerDisplay.id = "timer";
    timerDisplay.innerText = "...";

    let btnStart = document.createElement('button');
    btnStart.innerText = "start";
    btnStart.id = "btn-start"; // Assign an ID to the start button
    let btnPause = document.createElement('button');
    btnPause.innerText = "pause";
    let btnReset = document.createElement('button');
    btnReset.innerText = "reset";

    timerContainer.appendChild(timerDisplay);
    timerContainer.appendChild(btnStart);
    timerContainer.appendChild(btnPause);
    timerContainer.appendChild(btnReset);

    document.body.appendChild(timerContainer);

    let timerCount = 0;
    let intervalID;

    btnStart.addEventListener("click", () => {
        console.log("start button was clicked");
        intervalID = setInterval(() => {
            timerCount++;
            timerDisplay.innerText = timerCount;
        }, 1000);
    });

    btnPause.addEventListener("click", () => {
        console.log("pause button was clicked");
        clearInterval(intervalID);
    });

    btnReset.addEventListener("click", () => {
        console.log("reset button was clicked");
        timerCount = 0;
        timerDisplay.innerText = timerCount;
        clearInterval(intervalID);
    });
}

function startTimer() {
    let btnStart = document.getElementById("btn-start");
    if (btnStart) {
        btnStart.click();
    }
}
