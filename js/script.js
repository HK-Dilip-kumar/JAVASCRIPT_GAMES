function showdays() {
    var born = prompt("Enter your year of birth");
    var days = (2020 - born) * 365;
    var h1 = document.createElement('h2');
    var textAnswer = document.createTextNode('You are :-' + days + 'days Old');
    h1.setAttribute('id', 'days');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset() {
    document.getElementById('days').remove();
}

// function decideWinner(humanChoice, botChoice) {
//     let x = humanChoice;
//     let y = botChoice;
//     if (x == 'rock' && y == 'paper') { console.log("You Lost!"); return "You Lost!"; }

//     else if (x == 'paper' && y == 'rock') { console.log("You Won!"); return "You Won!" }

//     else if (x == 'rock' && y == 'scissor') { console.log("You Won!"); return "You Won" }

//     else if (x == 'scissor' && y == 'rock') { console.log("You Lost!"); return "You Lost"; }

//     else if (x == "paper" && y == "scissor") {
//         console.log("You Lost!");
//         return "You Lost!";
//     }
//     else if (x == "scissor" && y == "paper") {
//         console.log("You Won!");
//         return "You Won";
//     }
// }

function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'scissors': 0, 'rock': 1, 'paper': 0.5 },
        'scissors': { 'scissors': 0.5, 'rock': 0, 'paper': 1 },
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore]
}
function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You Lost!', 'color': 'red' };
    }
    else if (yourScore === 0.5) {
        return { 'message': 'You Tied', 'color': 'yellow' };
    }
    else {
        return { 'message': 'You Won!', 'color': 'green' };
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' width=100px height=100px style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'> ";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' width=100px height=100px style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'> ";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

