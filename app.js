const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');
const numTracker = document.querySelector('.num-tracker');


let counter = 0;


// Update the counter display
const updateCounter = () => {
    numTracker.textContent = counter;
}

// Event listener for the decrease button
decreaseBtn.addEventListener('click', () => {
    counter--;
    updateCounter();
});

// Event listener for the reset button
resetBtn.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

// Event listener for the increase button
increaseBtn.addEventListener('click', () => {
    counter++;
    updateCounter();
});

// Initial update
updateCounter();


