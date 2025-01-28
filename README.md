Input Validation:

    Allowed only valid emails or alphanumeric usernames.
    Limited usernames to 50 characters to prevent abuse.

Output Escaping:

    Used textContent and escapeHTML to ensure no untrusted content is rendered in the DOM.

Rate Limiting:

    Added a simple rate-limiting mechanism to allow only 5 requests per minute per user.

Error Handling:

    Provided user feedback for invalid input or excessive requests.

Content Security Policy:

    Added a Content-Security-Policy meta tag to block unauthorized scripts.

Avoided innerHTML:

    Used textContent for DOM updates to ensure security.
