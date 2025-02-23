document.getElementById("complete-na-button").addEventListener("click", () => {
    // Store completion state
    localStorage.setItem("completedQuestNaToSa", "1");
    // Navigate back to index.html
    window.location.href = "../index.html"; // Adjust path as needed
  });