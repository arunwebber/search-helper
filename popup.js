document.addEventListener('DOMContentLoaded', () => {
    const searchQuery = document.getElementById('searchQuery');
    const searchButtonsContainer = document.getElementById('searchButtonsContainer');
    const lineNumbersDiv = document.getElementById('lineNumbers');

    // Load saved content from localStorage when popup opens
    const savedContent = localStorage.getItem('textContent');
    if (savedContent) {
        searchQuery.value = savedContent;
    }

    // Event listener for input in the text area
    searchQuery.addEventListener('input', updateLineNumbers);

    // Function to update line numbers dynamically
    function updateLineNumbers() {
        const textarea = searchQuery;
        const lineCount = textarea.value.split('\n').length;

        let lineNumbers = '';
        let searchButtonsHTML = ''; // Store HTML for search buttons

        // Generate line numbers and search buttons for each line
        for (let i = 1; i <= lineCount; i++) {
            lineNumbers += i + '<br>'; // Add line number
            searchButtonsHTML += `
                <button class="searchButton" data-line="${i}">
                    Search${i} <!-- Display line number on the button -->
                </button>
            `;
        }

        // Update line numbers and search buttons
        lineNumbersDiv.innerHTML = lineNumbers;
        searchButtonsContainer.innerHTML = searchButtonsHTML;

        // Add event listeners to each search button
        const searchButtons = document.querySelectorAll('.searchButton');
        searchButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const lineNumber = button.getAttribute('data-line');
                performSearch(lineNumber);
            });
        });
    }

    // Function to perform search based on the content of the line
    function performSearch(lineNumber) {
        const lines = searchQuery.value.split('\n');
        const lineContent = lines[lineNumber - 1].trim(); // Get the content of the specific line

        if (lineContent) {
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(lineContent)}`;

            // Perform search
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                const currentTab = tabs[0];
                chrome.tabs.update(currentTab.id, { url: searchUrl });
            });
        } else {
            alert('The line is empty. Please enter content first!');
        }
    }

    // Sync the scroll of line numbers with the textarea scroll
    function syncScroll() {
        const textarea = searchQuery;
        lineNumbersDiv.scrollTop = textarea.scrollTop;
        searchButtonsContainer.scrollTop = textarea.scrollTop;
        lineNumbersDiv.scrollLeft = textarea.scrollLeft;
        searchButtonsContainer.scrollLeft = textarea.scrollLeft;
    }

    // Initialize line numbers and search buttons on page load
    updateLineNumbers();

    // Sync scroll position between textarea, line numbers, and buttons
    searchQuery.addEventListener('scroll', syncScroll);

    // Save the content in localStorage when the user types
    searchQuery.addEventListener('input', () => {
        localStorage.setItem('textContent', searchQuery.value);
    });
});
