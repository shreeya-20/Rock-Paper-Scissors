let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3); //.floor removes any decimal and *3 means there will be 3 options
    return options[randIdx];
};

const drawGame = ()=> {
    msg.innerText="Game was draw.Play again";
    msg.style.backgroundColor="#FF4788";
};
const showWinner = (userWin,userChoice,compChoice) =>{
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else{
        compScore++;
        compScorePara.innerText=compScore;
       
        msg.innerText=`you lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame= (userChoice) => {
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice=",compChoice);
    if(userChoice===compChoice){
        drawGame();
    } else {
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
           userWin= compChoice==="paper"?false:true;
        } else if(userChoice==="paper"){
            //scissors,rock
           userWin= compChoice==="scissors"?false:true;
        } else{
            //rock,paper
            userWin = compChoice==="rock"? false:true;
        }
      showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});
