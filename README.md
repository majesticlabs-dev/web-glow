# WebGlow - Mode Toggle 🌗

Mode Toggle is a Chrome extension that allows you to toggle between **Light Mode**, **Dark Mode**, and **Off (Default)** for any webpage. The extension remembers your preference for each domain and automatically applies it when you revisit the page.

## Features

- 🌞 **Light Mode**: White background with dark text.
- 🌑 **Dark Mode**: Dark background with light text.
- 🕹️ **Off Mode**: Use the default site settings.
- 🔄 **Persistent Settings**: Remembers your mode preference per domain.

## Installation

1. **Download or Clone the Repository**:

   ```bash
   git clone https://github.com/majesticlabs-dev/web-glow.git
   cd web-glow
   ```

2. **Load the Extension in Chrome**:
   - Open `chrome://extensions` in your Chrome browser.
   - Enable **Developer Mode** (top-right corner).
   - Click **Load unpacked** and select the folder containing the extension files.

## Usage

1. **Navigate to Any Webpage**.
2. **Click the Extension Icon** in the toolbar to open the popup.
3. **Select a Mode**:
   - \ud83c\udf1e **Light Mode**
   - \ud83c\udf11 **Dark Mode**
   - \ud83d\udd79\ufe0f **Off**
4. **Your Setting is Saved** for the current domain and automatically applied on future visits.

## Files Overview

- **manifest.json**: Extension configuration and permissions.
- **background.js**: Handles storing and retrieving user preferences.
- **content.js**: Injects CSS to apply the selected mode.
- **popup.html**: Popup interface for selecting modes.
- **popup.css**: Styles for the popup UI.
- **popup.js**: Handles user interactions in the popup.

## Permissions

- **Storage**: To save your preferences per domain.
- **Tabs**: To interact with active tabs and apply your preferences.
- **Scripting**: To inject CSS dynamically into webpages.

## Contributing

Contributions are welcome! If you find a bug or have an idea for an improvement:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your feature"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/your-feature
   ```

5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ and ☕ in Austin, TX to enhance your browsing experience!
