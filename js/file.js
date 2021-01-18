let container = document.querySelector("#container");
let roadrunner = document.querySelector("#roadrunner");
let coyote = document.querySelector("#coyote");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

//declarando variavel para pontuacao
let interval = null;
let playerScore = 0;


//funcao para pontuacao
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}


//start Game
window.addEventListener("keydown", (start) => {
    if (start.code == "Space") {
        gameOver.style.display = "none";
        coyote.classList.add("coyoteActive");
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 2.5s linear infinite";

        //pontuacao
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});


//Evento que faz Personagem pular com seta pra cima
window.addEventListener("keydown", (e) => {

    if (e.key == "ArrowUp")
        if (roadrunner.classList != "roadrunnerActive") {
            roadrunner.classList.add("roadrunnerActive");

            //                remove class after 0.5 seconds
            setTimeout(() => {
                roadrunner.classList.remove("roadrunnerActive");
            }, 500);
        }
});

//Game Over se RoadRunner colide com o Coyote
let result = setInterval(() => {
    let roadrunnerBottom = parseInt(getComputedStyle(roadrunner).getPropertyValue("bottom"));
    

    let coyoteLeft = parseInt(getComputedStyle(coyote).getPropertyValue("left"));
   

    if (roadrunnerBottom <= 90 && coyoteLeft >= 20 && coyoteLeft <= 145) {
        gameOver.style.display = "coyote";
        coyote.classList.remove("coyoteActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);
