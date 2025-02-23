document.getElementById("complete-as-button").addEventListener("click", () => {
    // Store completion state
    localStorage.setItem("completedQuestAsToAus", "1");
    // Navigate back to index.html
    window.location.href = "../index.html"; // Adjust path as needed
  });