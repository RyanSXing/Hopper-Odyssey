const player = document.getElementById("player")
let playerPos = {x: 480, y: 300}

function updatePlayerPosition() {
    player.style.left = `${playerPos.x - (player.clientWidth / 2)}px`;
    player.style.top = `${playerPos.y - (player.clientHeight / 2)}px`;
}

const questData = {
    na: {
        title: "North American Recipe",
        text: "A creamy, briny chowder packed with clams, potatoes, and smoky bacon, evoking the hidden treasures of sunken ships along the New England coast. Served in a bread bowl shaped like a pirate’s chest!",
        img: "images/na_img.png",
        link: "/Continents/na.html"
    },
    sa: {
        title: "South American Recipe",
        text: "Flaky, golden empanadas stuffed with spiced beef, olives, and eggs, shaped like pirate hats.",
        img: "images/sa_img.png",
        link: "/Continents/sa.html"
    },
    afr: {
        title: "African Recipe",
        text: "A fragrant Moroccan-inspired stew with spiced lamb “cannonballs,” apricots, and olives, evoking the loot of Barbary pirates.",
        img: "images/af_img.png",
        link: "/Continents/afr.html"
    },
    eur: {
        title: "European Recipe",
        text: "A hearty, slow-cooked stew blending Caribbean rum with European root vegetables, inspired by the rum-loving pirates of the Spanish Main.",
        img: "images/eu_img.png",
        link: "/Continents/eur.html"
    },
    as: {
        title: "Asian Recipe",
        text: " A fiery wok-tossed noodle dish with shrimp, chili, and charred veggies—inspired by the ruthless pirates of the South China Sea.",
        img: "images/as_img.png",
        link: "/Continents/as.html"
    },
    aus: {
        title: "Australian Recipe",
        text: "Fresh fish steamed in banana leaves with coconut milk, lime, and chili—a taste of Polynesian pirate hideouts.        ",
        img: "images/au_img.png",
        link: "/Continents/aus.html"
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
                <img src="${quest.img}">
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