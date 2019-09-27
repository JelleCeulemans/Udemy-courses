/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice, gamePlaying, previousDice;
init();

// writing
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// reading
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

// change css


document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {
        // Random number
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;


        //Display the result

        document.querySelector('#dice-1').style.display = 'block';
        document.querySelector('#dice-2').style.display = 'block';
        document.querySelector('#dice-1').src = 'dice-' + dice1 + '.png';
        document.querySelector('#dice-2').src = 'dice-' + dice2 + '.png';



        //Update the round score IF the rolled number was not 1
        /*if (previousDice === 6 && dice === 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        } else if (dice !== 1 || dice2 !== 1) {
            //Add score
            roudScore += dice + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roudScore;
        } else {
            //Next player
            nextPlayer();
        }

        previousDice = dice;*/
        
        if (dice1 !== 1 || dice2 !== 1) {
            //Add score
            roudScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roudScore;
        } else {
            //Next player
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roudScore;

        //Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer() {
    activePlayer = (activePlayer === 0) ? 1 : 0;
    roudScore = 0;
    previousDice = undefined;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.palyer-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roudScore = 0;
    gamePlaying = true;
    previousDice = undefined;

    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
