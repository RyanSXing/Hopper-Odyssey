const player = document.getElementById("player")
let playerPos = {x: 480, y: 300}

function updatePlayerPosition() {
    player.style.left = `${playerPos.x - (player.clientWidth / 2)}px`;
    player.style.top = `${playerPos.y - (player.clientHeight / 2)}px`;
}

const questData = {
    na: {
        title: "North American Recipe",
        text: "Solve the quadratic equation from the map: x² - 3x - 5 = 0. Find both roots!",
        link: "/Continents/na.html"
    },
    sa: {
        title: "South American Recipe",
        text: "Navigate to the hidden cave at coordinates 23°17′N 75°12′W using the stars."
    },
    afr: {
        title: "African Recipe",
        text: "Navigate to the hidden cave at coordinates 23°17′N 75°12′W using the stars."
    },
    eur: {
        title: "European Recipe",
        text: "Navigate to the hidden cave at coordinates 23°17′N 75°12′W using the stars."
    },
    as: {
        title: "Asian Recipe",
        text: "Navigate to the hidden cave at coordinates 23°17′N 75°12′W using the stars."
    },
    aus: {
        title: "Australian Recipe",
        text: "Navigate to the hidden cave at coordinates 23°17′N 75°12′W using the stars."
    }

};

document.querySelectorAll('.quest-button').forEach(button => {
    button.addEventListener('click', (e) => {
        // Get the quest ID from the clicked button's data-quest attribute
        const questId = e.target.dataset.quest;

        // Fetch the corresponding quest data from the questData object
        const quest = questData[questId];

        // Get the popup element
        const popup = document.getElementById('questPopup');

        // Clear existing popup content
        popup.innerHTML = '';

        // Create the popup content with a navigation button
        const popupContent = `
            <div class="popup-content">
                <span class="close-btn">&times;</span>
                <h2>${quest.title}</h2>
                <p>${quest.text}</p>
                <a href="${quest.link}" class="popup-button">Go to Quest</a>
            </div>
        `;

        // Insert the popup content
        popup.insertAdjacentHTML('beforeend', popupContent);

        // Show the popup by adding the 'active' class
        popup.classList.add('active');

        // Add close button functionality
        const closeButton = popup.querySelector('.close-btn');
        closeButton.addEventListener('click', () => {
            popup.classList.remove('active');
        });
    });
});

// Close popup functionality
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('questPopup').classList.remove('active');
});

document.addEventListener('click', (e) => {
    const popup = document.getElementById('questPopup');
    if (!popup.contains(e.target) && !e.target.classList.contains('quest-button')) {
        popup.classList.remove('active');
    }
});

function moveAlongPath(pathId) {
    const path = document.getElementById(pathId);
    const duration = 3000; // Animation duration in ms
    const startTime = Date.now();
    const totalLength = path.getTotalLength();
    

    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const point = path.getPointAtLength(progress * totalLength);
        
        playerPos.x = point.x;
        playerPos.y = point.y;
        updatePlayerPosition();
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
    console.log(playerPos.x)
    console.log(playerPos.y)
}



updatePlayerPosition()
moveAlongPath("na-to-sa")