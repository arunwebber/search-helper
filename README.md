# Email Finder Chrome Extension

This is a Chrome extension that extracts email addresses from the current page and provides functionalities to view, copy, and adjust the font size of the email list. It allows users to easily copy email addresses, change their font size, and manage selected text for customization.

## Features
- **Email Extraction**: Extracts email addresses from the current webpage.
- **Font Size Adjustment**: Allows users to increase or decrease the font size of the email list.
- **Email Selection**: Users can select individual emails and adjust their font size.
- **Copy Emails**: Users can copy the list of emails to their clipboard with a single click.
- **Email Count**: Displays the number of unique emails found on the page.
- **Real-time Updates**: Updates the email count and character count dynamically as users interact with the emails.

## Installation

1. **Clone the repository or download the ZIP file.**
   - To clone, run:
     ```bash
     git clone https://github.com/your-username/email-finder-extension.git
     ```

2. **Load the extension in Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable Developer mode (top-right).
   - Click **Load unpacked** and select the folder where the extension files are located.
   - The extension will now be active, and you will see its icon in the Chrome toolbar.

## Usage

### Extract Emails:
- Click on the extension icon in the toolbar. It will scan the current webpage for email addresses.
- The list of extracted emails will appear in the popup.

### Font Size Control:
- You can increase or decrease the font size of the entire email list using the + and - buttons.
- If you select a part of an email and adjust the font size, only the selected portion will change size.
- If no text is selected, the entire email list’s font size will change.

### Copy Emails:
- Click on the **Copy Emails** button to copy the list of email addresses to your clipboard. The emails will be formatted with commas for easy pasting.

### Email Count:
- The extension displays the total count of emails found on the page and updates dynamically as the list changes.

## Functionality

- **Extract Emails**: Uses a regular expression to scan the page’s text content for email addresses. The found emails are filtered for duplicates and displayed.
- **Adjust Font Size**: The font size of emails can be adjusted through a simple button click. It allows for continuous adjustment while holding down the button.
- **Copy to Clipboard**: Once the emails are displayed, users can copy all emails to the clipboard in a comma-separated format for easy sharing.
- **Dynamic Count**: The extension keeps track of the total number of unique emails and the character count of the emails displayed.

## Files

- **background.js**: Handles background tasks such as extracting email addresses from the webpage.
- **popup.html**: The popup interface shown when the extension icon is clicked.
- **popup.css**: The styling for the popup.
- **popup.js**: Manages user interactions with the popup (email list, font size changes, and copying emails).
- **manifest.json**: The extension's metadata file.

## Troubleshooting

- **Emails Not Extracted**: If no emails are found, ensure the webpage contains plain text email addresses and not embedded in images or forms.
- **Font Size Not Changing**: If the font size isn't changing, check that you are interacting with the email list and not other parts of the page.
- **Emails Not Copying**: Ensure you are clicking the "Copy Emails" button correctly. If copying still fails, try restarting the extension or Chrome.

## Contributing

Feel free to fork the repository, report issues, or submit pull requests. Contributions are welcome!

### Steps for Contributing:
1. Fork the repository.
2. Clone your fork locally.
3. Create a new branch for your feature or bugfix.
4. Make your changes.
5. Push your changes to your fork.
6. Create a pull request to the main repository.

## License
This project is open-source and available under the MIT License.
