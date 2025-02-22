// quest.js
document.querySelectorAll('.quest-button').forEach(button => {
    // Random positions for demonstration
    const randomX = Math.random() * 80 + 10; // 10-90%
    const randomY = Math.random() * 80 + 10; // 10-90%
    button.style.left = `${randomX}%`;
    button.style.top = `${randomY}%`;
});