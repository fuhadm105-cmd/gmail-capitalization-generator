# GlassCase — Gmail Capitalization Generator

A lightweight Chrome Extension (Manifest V3) with a modern glass-style interface. Format text before pasting it into Gmail.

## Features
- Sentence case
- Title Case for headings and subject lines
- UPPERCASE and lowercase
- Live preview and character count
- One-click copy to clipboard
- Clear button
- Local-only processing: your text is not sent to a server
- No host permissions or login required

## Install in Chrome
1. Download or clone this repository.
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode**.
4. Click **Load unpacked**.
5. Select this repository folder (the folder containing `manifest.json`).
6. Pin GlassCase from the Extensions menu.

## Files
- `manifest.json` — extension configuration
- `popup.html` — popup structure
- `styles.css` — glass UI
- `popup.js` — capitalization and copy logic

## Privacy
All capitalization runs locally in the popup. The extension requests no host permissions and does not transmit user text.

## Version
1.0.0