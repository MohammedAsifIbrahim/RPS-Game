let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.getElementById("user-score");
const compScorePara=document.getElementById("comp-score");

const genCompChoice=() =>{
    const options=["rock","scissors","paper"];
    const randIdx=Math.floor(Math.random() *3);
    return options[randIdx];
}
const drawGame =() => {
    msg.innerText="Draw, Play again";
    msg.style.backgroundColor="purple";
}

const showWinner= (userWin,userChoice,compChoice) =>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win.! your ${userChoice} beats the ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice) => {
    console.log("user choice=",userChoice);

    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice)
    {
    drawGame();
    }
    else
    {
        let userWin=(userChoice==="rock") ? compChoice!=="paper" : ((userChoice==="paper") ? compChoice!=="scissors": compChoice!=="rock");
        // if(userChoice==="rock")
        // {
        //     userWin=!(compChoice ==="paper");
        // }
        // else if(userChoice==="paper")
        // {
        //     userWin=compChoice!=="scissors";
        // }
        // else{
        //     userWin =compChoice!=="rock";
        // }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });
});




