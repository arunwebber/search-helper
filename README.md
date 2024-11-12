# Search Assistant Extension

The **Search Assistant** extension is a browser tool designed to help users easily input and search queries with a dynamic, user-friendly interface. This extension features a text input area, line numbers for easier tracking, and customizable search functionalities.

## Features
- **Dynamic Search Input**: A resizable text area that grows as the user types more content.
- **Line Numbers**: Each line of text in the input area is numbered for reference.
- **Radio Buttons for Search Engines**: Center-aligned radio buttons to select the preferred search engine.
- **Error Messaging**: Displays error messages in a red font directly within the extension, without alerts.
- **Customizable Buttons**: Search and execute buttons to interact with the content, aligned for ease of access.
- **Intuitive Layout**: Buttons are neatly aligned on the side for easy access, with adjustable margins.
- **Responsive Design**: Optimized to work well on different screen sizes and browsers.
- **Customizable CSS**: Easily tweak styles for text area, buttons, and overall layout to match your needs.

## Installation

To install the Search Assistant Extension:

### 1. Clone or Download the Repository
Clone this repository to your local machine or download the zip file.


### 2. Load the Extension in Your Browser
- Open the Extensions page in your browser:
  - **Chrome**: `chrome://extensions/`
  - **Firefox**: `about:addons`
- Enable **Developer mode** (in Chrome).
- Click **Load unpacked** (in Chrome) or **Install Add-on** (in Firefox) and select the extracted project folder.
- The extension should now appear in your browser's toolbar.

## Usage

Once installed, click the extension icon in your browser toolbar to open the popup window. The interface includes:

- **Text Area**: Where you can enter your search queries. The text area will automatically resize as you type.
- **Line Numbers**: A column displaying line numbers next to the text area for better organization and reference.
- **Radio Buttons for Search Engine Selection**: Center-aligned options to choose between Google, Bing, or DuckDuckGo.
- **Search Buttons**: Buttons aligned on the right side to trigger search actions or any other commands.
- **Error Message Display**: Any errors, such as empty search lines, will be shown within the extension in red text.

### How to Use
1. **Select Search Engine**: Choose Google, Bing, or DuckDuckGo using the radio buttons at the top of the popup.
2. **Enter Text**: Begin typing in the text area. As you type, the text area will expand vertically.
3. **Trigger Search**: Click the relevant **Search** button next to each line to execute a search on the selected search engine.

## Contributing

We welcome contributions! If you'd like to improve the Search Assistant Extension or suggest new features, please follow the steps below:

### Steps for Contributing:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make changes and commit them (`git commit -am 'Add new feature'`).
4. Push the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
