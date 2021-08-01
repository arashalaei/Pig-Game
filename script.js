'use strict';
// Selcting elements
const elements = {
    scoreEl:   (id) => document.getElementById(`score--${id}`),
    diceEl:    document.querySelector('.dice'),
    btnNew:    document.querySelector('.btn--new'),
    btnRoll:   document.querySelector('.btn--roll'),
    btnHold:   document.querySelector('.btn--hold'),
    currentEl: (id) => document.getElementById(`current--${id}`),
    playerEl:  (id) => document.querySelector(`.player--${id}`)
}
// Helper functions
const random = (a, b) => Math.trunc(Math.random() * b) + a;
const nextPlayer = () => {
    playerTurn = 1 - playerTurn;
    currentScore = 0;
    elements.currentEl(0).textContent = 0;
    elements.currentEl(1).textContent = 0;
    elements.playerEl(0).classList.toggle('player--active');
    elements.playerEl(1).classList.toggle('player--active');
};

// Controller
const handler = {
    rollDice:function(){
        if(playing){
            // 1. Generating a random dice roll
            const dice = random(1, 6)
            // 2. Display dice
            elements.diceEl.classList.remove('hidden');
            elements.diceEl.src = `./img/dice-${dice}.png`
            // 3. Check for rolled 1
            if(dice !== 1){
                // Add dice to current score
                currentScore += dice;
                elements.currentEl(playerTurn).textContent = currentScore;
            }else{
                //Switch to next player
                nextPlayer();
            }
        }
    },

    hold:function(){
        if(playing){
            scores[playerTurn] += currentScore;
            elements.scoreEl(playerTurn).textContent = scores[playerTurn];
            // player wins!!!
            if(scores[playerTurn] >= 20){
                elements.playerEl(playerTurn).classList.add('player--winner');
                elements.playerEl(playerTurn).classList.remove('player--active');
                // Finish tha game
                playing = false;
            }else{
                nextPlayer();
            }
        }
    },

    reset:function(){
        currentScore = 0;
        playerTurn = 0;
        scores = [0, 0];
        playing = true;
        elements.diceEl.classList.add('hidden');
        elements.scoreEl(0).textContent = 0;
        elements.scoreEl(1).textContent = 0;
        elements.playerEl(0).classList.add('player--active');
        elements.playerEl(1).classList.remove('player--active');
        elements.playerEl(0).classList.remove('player--winner');
        elements.playerEl( 1).classList.remove('player--winner');
    }
}

// Starting condiction
let currentScore, playerTurn, scores, playing;
handler.reset();

// events
elements.btnRoll.addEventListener('click', handler.rollDice);
elements.btnHold.addEventListener('click', handler.hold);
elements.btnNew.addEventListener('click', handler.reset);