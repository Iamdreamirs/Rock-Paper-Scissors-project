game();

function game() {

    const myArray = ['rock', 'paper', 'scissors'];
    let humanPoints = 0;
    let aiPoints = 0;

    for (let i = 0; i < 5; i++) {

        function getComputerChoice() {
            const indexChoice = Math.floor(Math.random() * myArray.length);
            return myArray[indexChoice];
        }

        function playerSelection() {
            const choice = prompt("Please choice between Rock, Paper and Scissors");
            const normalizeChoice = choice;
            if (myArray.includes(normalizeChoice)) {
                return normalizeChoice;
            } else {
                return null;
            }
        }

        const pc = getComputerChoice();
        const user = playerSelection();

        console.log(`Human choose ${user} whilst AI choose ${pc}`);
        

        function playRound() {
            if (user === 'rock') {
                if (pc === 'paper') {
                    aiPoints++;
                    return "AI wins the battle";
                } else if (pc === 'scissors') {
                    humanPoints++;
                    return "Human wins the battle";
                } else {
                    return "It is a draw";
                }
            } else if (user === 'paper') {
                if (pc === 'rock') {
                    humanPoints++;
                    return "Human wins the battle";
                } else if (pc === 'scissors') {
                    aiPoints++;
                    return "AI wins the battle";
                } else {
                    return "It is a draw";
                }
            } else {
                if (pc === 'rock') {
                    aiPoints++;
                    return 'AI wins the battle';
                } else if (rock === 'paper') {
                    humanPoints++;
                    return 'human wins the battle';
                } else {
                    return "It is a draw";
                }
            }
        }
        console.log(playRound());
        console.log(`So far we've got: You at ${humanPoints} point/s and the AI at ${aiPoints} point/s`);
    }

    const answerUser = prompt("Do you want to play again? y or n");
    if (answerUser === 'yes' || answerUser === 'y'){
        game();
    } 
}