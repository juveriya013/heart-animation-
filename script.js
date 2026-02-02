const heart = document.querySelector('.heart');

const colors = [
    '#ff6b6b',
    '#ff006e',
    '#8338ec',
    '#3a86ff',
    '#06ffa5',
    '#ffbe0b',
    '#fb5607'
];

let currentColorIndex = 0;

heart.addEventListener('click', () => {
    // Change to next color
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    heart.style.fill = colors[currentColorIndex];
    
    // Update shadow to match color
    heart.style.filter = `drop-shadow(0 0 20px ${colors[currentColorIndex]}80)`;
    
    // Add beat animation
    heart.classList.remove('beat');
    void heart.offsetWidth; // Trigger reflow
    heart.classList.add('beat');
    
    // Remove beat class after animation
    setTimeout(() => {
        heart.classList.remove('beat');
    }, 500);
});
