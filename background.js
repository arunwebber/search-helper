// background.js
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: extractEmails
    });
});

function extractEmails() {
    const bodyText = document.body.innerText;
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const foundEmails = bodyText.match(emailRegex);
    const emails = foundEmails ? Array.from(new Set(foundEmails)) : [];

    // Save the emails to storage
    chrome.storage.local.set({emails: emails}, function() {
        console.log("Emails saved:", emails);
    });
}
