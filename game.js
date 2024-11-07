// Variables for the character and the game container
const character = document.getElementById('character');
const gameContainer = document.querySelector('.game-container');

// Initial position of the character
let positionX = gameContainer.offsetWidth / 2 - character.offsetWidth / 2;

// Set the initial position
character.style.left = `${positionX}px`;

// Move the character with arrow keys
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        // Move left: decrease positionX
        positionX -= 10;
        if (positionX < 0) positionX = 0; // Prevent moving off the left side
    } else if (e.key === 'ArrowRight') {
        // Move right: increase positionX
        positionX += 10;
        if (positionX > gameContainer.offsetWidth - character.offsetWidth) {
            positionX = gameContainer.offsetWidth - character.offsetWidth; // Prevent moving off the right side
        }
    }
    // Update the character's position
    character.style.left = `${positionX}px`;
});