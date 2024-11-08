// Regular expression to match email addresses
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

// Find all email addresses in the page's text content
const emails = document.body.innerText.match(emailRegex);

if (emails) {
    chrome.storage.local.set({ emails: [...new Set(emails)] }); // Save unique emails to storage
} else {
    chrome.storage.local.set({ emails: [] }); // Save an empty array if no emails found
}
