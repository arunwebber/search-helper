// Regular expression to match email addresses
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

// Find all email addresses in the page's text content
const emails = document.body.innerText.match(emailRegex);

if (emails) {
    console.log("Emails found:", emails); // Log found emails
    chrome.storage.local.set({ emails: [...new Set(emails)] }); // Save unique emails to storage
} else {
    console.log("No emails found on this page."); // Log if no emails are found
    chrome.storage.local.set({ emails: [] }); // Save an empty array if no emails found
}
