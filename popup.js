document.addEventListener('DOMContentLoaded', function() {
    // Execute content script to find emails
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs.length === 0) {
            console.error("No active tab found.");
            return;
        }

        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: findEmails
        }, (results) => {
            if (chrome.runtime.lastError) {
                console.error("Script execution failed:", chrome.runtime.lastError);
                document.getElementById('emailList').innerText = "Error executing script.";
                return;
            }

            if (results && results[0] && results[0].result) {
                const emails = results[0].result;
                console.log("Found emails:", emails); // Log found emails
                document.getElementById('emailList').innerText = emails.length > 0 ? emails.join(", ") : "No emails found.";
            } else {
                console.log("No emails found or error in script execution.");
                document.getElementById('emailList').innerText = "No emails found.";
            }
        });
    });

    function findEmails() {
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const bodyText = document.body.innerText;
        const emails = bodyText.match(emailRegex);
        return emails ? Array.from(new Set(emails)) : []; // Return unique emails
    }
});
