'use strict';
// Selcting elements
const elements = {
    score_0El: document.querySelector('#score--0'),
    score_1El: document.getElementById('score--1'),
    diceEl:    document.querySelector('.dice'),
    btnNew:    document.querySelector('.btn--new'),
    btnRoll:   document.querySelector('.btn--roll'),
    btnHold:   document.querySelector('.btn--hold'),
    current_0El: document.getElementById('current--0'),
    current_1El: document.getElementById('current--1')
}

// Starting condiction
elements.score_0El.textContent = 0;
elements.score_1El.textContent = 0;
elements.diceEl.classList.add('hidden');

let currentScore = 0;
// Helper functions
const random = (a, b) => Math.trunc(Math.random() * b) + a;
// Rolling dice functionality
elements.btnRoll.addEventListener('click', function(){
    // 1. Generating a random dice roll
    const dice = random(1, 6)
    // 2. Display dice
    elements.diceEl.classList.remove('hidden');
    elements.diceEl.src = `./img/dice-${dice}.png`
    // 3. Check for rolled 1
    if(dice !== 1){
        // Add dice to current score
        currentScore += dice;
        elements.current_0El.textContent = currentScore; // !Change later
    }else{
        //Switch to next player
    }
});