// This function runs when the popup is opened
document.addEventListener('DOMContentLoaded', () => {
    // Request the content script to extract emails
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript(
            {
                target: { tabId: tabs[0].id },
                function: extractEmails,
            },
            (results) => {
                if (results && results[0] && results[0].result) {
                    const emails = results[0].result;
                    displayEmails(emails);
                }
            }
        );
    });

    // Add an event listener for the Copy button
    document.getElementById('copyEmailsButton').addEventListener('click', () => {
        const emails = document.getElementById('emailsContainer').innerText.split('\n').filter(email => email.trim() !== ''); // Split and filter emails
        const formattedEmails = emails.join(', '); // Join emails with a comma and a space
        copyToClipboard(formattedEmails); // Use the formatted emails for copying
    });
});

// Function to extract emails from the page
function extractEmails() {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const bodyText = document.body.innerText;
    const emails = bodyText.match(emailRegex);
    return emails || []; // Return empty array if no emails found
}

// Function to display emails in the popup
function displayEmails(emails) {
    const container = document.getElementById('emailsContainer');
    container.innerHTML = ''; // Clear previous content
    if (emails.length === 0) {
        container.innerText = 'No emails found.';
    } else {
        emails.forEach(email => {
            const emailElement = document.createElement('div');
            emailElement.innerText = email;
            container.appendChild(emailElement);
        });
    }
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Log success to console and close the popup
        console.log("Emails copied to clipboard:", text);
        window.close(); // Close the popup
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
