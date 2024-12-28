let userScore =0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx]
}
const drawgame = () =>{
    msg.innerHTML = "Game Was Draw Play again !";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin) {
        userScore ++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You Lost ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};
const playGame = (userChoice) => {
    
    const compChoice = genCompChoice();
    

    if (userChoice === compChoice){
        drawgame();
    } else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false :true;

        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice , compChoice);
    }
     
};
choices.forEach((choice) =>{
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});