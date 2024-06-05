let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#computer-score");

const choices = document.querySelectorAll(".choice");

const computerChoice = () =>{
    const options = ["rock" , "paper", "scissors"];
    const randomIndex =  Math.floor(Math.random() * 3);   
    return options[randomIndex];
}


const playGames = (userChoice) =>{
    console.log("User choice:", userChoice);
    const compChoice = computerChoice();
    console.log("Computer choice :" , compChoice)

    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.querySelector("img").getAttribute("id");
        console.log(userChoice, "was clicked");
        playGames(userChoice);
    });
});
