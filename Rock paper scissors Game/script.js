let userScore =0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const userScorep= document.querySelector("#user-score");
const compScorep= document.querySelector("#comp-score");




const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game Draw";
    msg.style.backgroundColor="black";
}

const showWinner=(userWin)=>{
    if(userWin){
        console.log("you win ");
        userScore++;
        userScorep.innerText=userScore;
        msg.innerText="you win";
        msg.style.backgroundColor ="green";
    }
    else{
        console.log("computer win")
        msg.innerText="you lost";
        msg.style.backgroundColor ="red";
        compScore++;
        compScorep.innerText=compScore;
    }
}



const playgame =  (userChoice)=>{
    console.log("user choice =", userChoice);

     const compchoice= gencompchoice();
     console.log("computer's choice=", compchoice);

     if(userChoice===compchoice){
        //draw
        drawGame();
     } else{
        let userWin= true;
        if(userChoice===rock){
            userWin= compchoice==="paper"? false: true;
        } else if(userChoice===paper){
            userWin= compchoice==="scissor"? false: true;
        } else{
            userWin= compchoice=== "paper"?true:false;
        }
        showWinner(userWin);

        
     }
    
}


choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
        const user_choice=choice.getAttribute("id");
        console.log("choices was clicked ",user_choice  )
        playgame(user_choice);

    })

})

const gencompchoice =()=>{
    const options= ["rock", "paper","scissor"];
    const index= Math.floor(Math.random()*3);
    console.log(index);
    return options[index];
}

