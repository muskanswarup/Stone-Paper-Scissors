let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#computer-score");

const choices = document.querySelectorAll(".choice");

// const playGames() =>{

// }

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.querySelector("img").getAttribute("id");
        console.log(choiceId, "was clicked");
        playGames();
    });
});
