document.getElementById("complete-afr-button").addEventListener("click", () => {
    // Store completion state
    localStorage.setItem("completedQuestAfToEu", "1");
    // Navigate back to index.html
    window.location.href = "../index.html"; // Adjust path as needed
  });