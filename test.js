const answersArray = ["paper","rock","scissor"];
let meCounter = 0;
let botCounter = 0;

function getAnswer(value){
    console.log("Me: " , value);
    const botAnswer = getBotAnswer();
    console.log("Bot :" , botAnswer)
    //console.log(getWinner());
    if(value == "paper" && botAnswer == "rock"){
        console.log("Me wins with paper");
        meCounter++;
    }
    if(value == "rock" && botAnswer == "scissor"){
        console.log("Me wins with rock");
        meCounter++;
    }
    if(value == "scissor" && botAnswer == "paper"){
        console.log("Me wins with scissor");
        meCounter++;
    }
    if(value == "paper" && botAnswer == "scissor"){
        console.log("Bot wins with scissor");
        botCounter++;
    }
    if(value == "rock" && botAnswer == "paper"){
        console.log("Bot wins with rock");
        botCounter++;
    }
    if(value == "scissor" && botAnswer == "rock"){
        console.log("Bot wins with scissor");
        botCounter++;
    }

    let mePoints = meCounter;
    let botPoints = botCounter;

    console.log("score:" , mePoints , "-" , botPoints);

    document.getElementById("scoreId").innerHTML = `score: ${mePoints} - ${botPoints}`;
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