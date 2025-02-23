document.getElementById("complete-eur-button").addEventListener("click", () => {
    // Store completion state
    localStorage.setItem("completedQuestEuToAs", "1");
    // Navigate back to index.html
    window.location.href = "../index.html"; // Adjust path as needed
  });