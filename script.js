let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const cs=document.querySelector("#compscore")
const us=document.querySelector("#userscore")

//computer choice
const genCompChoice=()=>{
    const option=["rock","paper","scissors"]; 
    const randomIndex=Math.floor(Math.random()*3);
    return option[randomIndex];
}

//drawgame

const drawGame=()=>{
    console.log("game was draw")
    msg.innerText="DRAW!!!"
    msg.style.backgroundColor="#081b31"
}

//Winner
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        console.log("you win!!");
        msg.innerText=`YOU WIN! Your ${userChoice} beats ${compChoice} `
        msg.style.backgroundColor="green"
        userscore++
        us.innerText=userscore
    }else{
        console.log("you lose");
        msg.innerText=`YOU LOSE! Computer's ${compChoice} beats your ${compChoice} `
        msg.style.backgroundColor="red "
        compscore++
        cs.innerText=compscore
    }
}

//playGame
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice()
    console.log("Comp choice=",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
         let userWin=true;
         if(userChoice==="rock"){
            //comp paper or scissor
            userWin=compChoice==="paper"?false:true;
         }else if(userChoice==="paper"){
            //rock scissor
            userWin=compChoice==="rock"?true:false; 
         }else{
            //user=scissor
            //rock paper
            userWin=compChoice==="rock"?false:true;
         }
         showWinner(userWin,userChoice,compChoice)
    }
}



//user choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id")
        playGame(userChoice);
    })
})