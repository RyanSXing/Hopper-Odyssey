// quest.js
const questData = {
    1: {
        title: "Caribbean Rum Cake",
        region: "Caribbean Isles",
        description: "Bake a traditional rum cake using secret pirate ingredients!",
        coordinates: { x: "30%", y: "45%" },
        image: "🍰"
    },
    2: {
        title: "Treasure Chest Stew",
        region: "Skull Island",
        description: "Prepare a hearty stew to feed hungry crew members!",
        coordinates: { x: "68%", y: "75%" },
        image: "🍲"
    },
    3: {
        title: "Kraken Sushi",
        region: "Pacific Depths",
        description: "Create sushi worthy of sea monsters!",
        coordinates: { x: "82%", y: "35%" },
        image: "🍣"
    }
};

// Create buttons dynamically
const mapContainer = document.querySelector('.map-container');
Object.entries(questData).forEach(([id, quest]) => {
    const button = document.createElement('button');
    button.className = 'quest-button';
    button.dataset.quest = id;
    button.style.left = quest.coordinates.x;
    button.style.top = quest.coordinates.y;
    mapContainer.appendChild(button);
});

// Handle button clicks
document.querySelectorAll('.quest-button').forEach(button => {
    button.addEventListener('click', () => {
        const questId = button.dataset.quest;
        const quest = questData[questId];
        
        document.getElementById('popupTitle').textContent = quest.title;
        document.getElementById('popupRegion').textContent = `Region: ${quest.region}`;
        document.getElementById('popupDescription').textContent = quest.description;
        document.getElementById('popupImage').textContent = quest.image;
        
        document.getElementById('questPopup').style.display = 'block';
    });
});

// Close popup
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('questPopup').style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('questPopup')) {
        document.getElementById('questPopup').style.display = 'none';
    }
});