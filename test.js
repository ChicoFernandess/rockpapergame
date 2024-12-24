const answersArray = ["paper","rock","scissor"];
let meCounter = 0;
let botCounter = 0;
let mePointsStorage = parseInt(localStorage.getItem("mePoints")) || 0;
let botPointsStorage = parseInt(localStorage.getItem("botPoints")) || 0;

function displayScore(){
    document.getElementById("scoreId").innerHTML = `score: ${mePointsStorage} - ${botPointsStorage}`;
}

function getAnswer(value){
    console.log("Me: " , value);
    const botAnswer = getBotAnswer();
    console.log("Bot :" , botAnswer);
    let message = "";
    //console.log(getWinner());
    if(value == "paper" && botAnswer == "rock"){
        console.log("Me wins with paper");
        message = "Me wins with paper";
        mePointsStorage++;
    }
    if(value == "rock" && botAnswer == "scissor"){
        console.log("Me wins with rock");
        message = "Me wins with rock";
        mePointsStorage++;
    }
    if(value == "scissor" && botAnswer == "paper"){
        console.log("Me wins with scissor");
        message = "Me wins with scissor";
        mePointsStorage++;
    }
    if(value == "paper" && botAnswer == "scissor"){
        console.log("Bot wins with scissor");
        message = "Bot wins with paper";
        botPointsStorage++;
    }
    if(value == "rock" && botAnswer == "paper"){
        console.log("Bot wins with rock");
        message = "Bot wins with rock";
        botPointsStorage++;
    }
    if(value == "scissor" && botAnswer == "rock"){
        console.log("Bot wins with scissor");
        message = "Bot wins with scissor";
        botPointsStorage++;
    }


    localStorage.setItem("mePoints", mePointsStorage);
    localStorage.setItem("botPoints",botPointsStorage);

    console.log("score:" , mePointsStorage , "-" , botPointsStorage);

    document.getElementById("messages").innerHTML = `${message}`;

    displayScore();
}

function getBotAnswer(){
    const item = answersArray[Math.floor(Math.random() * answersArray.length)];
    return item;
}

function getWinner(){
    let message = "";

    if(getAnswer() === "paper" && getBotAnswer() === "scissor"){
       message = "Me wins with paper"
    }

    //rock wins over scissor

    //paper wins over rock

    //scissor wins over paper

    return message;

}
displayScore();