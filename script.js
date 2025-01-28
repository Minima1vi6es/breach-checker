// Select necessary DOM elements
const form = document.getElementById("breach-form");
const input = document.getElementById("input-data");
const results = document.getElementById("results");

// Simulated breach database (for demonstration only)
const breachDatabase = ["example@example.com", "user123", "testuser"];

// Simple rate-limiting (max 5 requests per minute)
let requestCount = 0;
const requestLimit = 5;
const resetTime = 60000; // 1 minute in milliseconds

// Reset request count periodically
setInterval(() => {
    requestCount = 0; // Reset request count every minute
}, resetTime);

// Utility function: Validate input
function validateInput(inputData) {
    // Allow only email or alphanumeric usernames (max 50 characters)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_-]{1,50}$/;

    return emailRegex.test(inputData) || usernameRegex.test(inputData);
}

// Utility function: Escape output to prevent XSS
function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

// Event listener for form submission
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    // Rate limiting
    if (requestCount >= requestLimit) {
        results.textContent = "⚠️ Too many requests. Please wait a minute and try again.";
        results.style.color = "red";
        return;
    }
    requestCount++;

    // Get and validate user input
    const inputData = input.value.trim();
    if (!validateInput(inputData)) {
        results.textContent = "⚠️ Invalid input. Please enter a valid email or username.";
        results.style.color = "red";
        return;
    }

    // Simulate data breach check
    const escapedInput = escapeHTML(inputData.toLowerCase());
    const isBreached = breachDatabase.includes(inputData.toLowerCase());

    if (isBreached) {
        results.textContent = `⚠️ Alert: The email or username "${escapedInput}" was found in a data breach!`;
        results.style.color = "red";
    } else {
        results.textContent = `✅ Good news: No breaches found for "${escapedInput}".`;
        results.style.color = "green";
    }
});
