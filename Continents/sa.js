document.getElementById("complete-sa-button").addEventListener("click", () => {
    // Store completion state
    localStorage.setItem("completedQuestSaToAf", "1");
    // Navigate back to index.html
    window.location.href = "../index.html"; // Adjust path as needed
  });