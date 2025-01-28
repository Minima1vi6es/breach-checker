document.getElementById("breach-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const inputData = document.getElementById("input-data").value.trim();
    const results = document.getElementById("results");

    // Simulated data breaches (can replace with real API in the future)
    const breachDatabase = ["example@example.com", "user123", "testuser"];

    if (breachDatabase.includes(inputData.toLowerCase())) {
        results.textContent = `⚠️ Alert: The email or username "${inputData}" was found in a data breach!`;
        results.style.color = "red";
    } else {
        results.textContent = `✅ Good news: No breaches found for "${inputData}".`;
        results.style.color = "green";
    }
});
