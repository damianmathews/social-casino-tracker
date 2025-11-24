# Social Casino Tracker

A beautiful, practical single-page web app to track profits across social casinos.

## Features

- **Dashboard Summary**: View total deposited, redeemed, and profit at a glance
- **Casino Table**: Complete list with clickable site links, financial details, and editable notes
- **Transaction Management**: Easily log new deposits and redemptions
- **Smart Filtering**: Filter by profit type (positive/negative/zero) and search by casino name
- **Sortable Data**: Sort casinos by profit (ascending or descending)
- **Dark Mode**: Toggle between light and dark themes (defaults to system preference)
- **Persistent Storage**: All data saved locally in browser localStorage
- **Fully Responsive**: Works seamlessly on desktop and mobile devices
- **Zero Dependencies**: Pure HTML, CSS, and JavaScript - no external libraries

## Usage

### Running Locally

Simply open `index.html` in any modern web browser. No build process or server required.

### Deploying

Deploy the entire folder to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Any web server

All paths are relative, so the app works anywhere.

### Adding Transactions

1. Click the "+ Add Transaction" button
2. Select a casino from the dropdown
3. Choose transaction type (Deposit or Redemption)
4. Enter the amount in USD
5. Optionally add a note
6. Submit to update totals immediately

### Managing Data

- **Notes**: Click into any notes field to edit. Changes save automatically on blur.
- **Search**: Type in the search box to filter casinos by name
- **Filter**: Use the dropdown to show only positive, negative, or zero profit casinos
- **Sort**: Click the sort button to toggle between descending and ascending profit order

### Settings

Click the gear icon (⚙️) in the top right to access settings:
- Toggle Dark Mode on/off
- Your preference is saved and persists across sessions

## Data Persistence

All data is stored in your browser's localStorage:
- Casino financial data
- Transaction history
- Notes
- Dark mode preference

Data persists across browser sessions but is local to the browser/device.

## Technical Details

- **No external dependencies**: 100% vanilla web technologies
- **Browser support**: Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile optimized**: Fully responsive design with mobile-first approach
- **Accessibility**: Semantic HTML with proper ARIA labels

## File Structure

```
social-casino-tracker/
├── index.html    # Main HTML structure
├── styles.css    # All styles with dark mode support
├── app.js        # Application logic and data management
└── README.md     # This file
```

## Browser Storage Note

Since this app uses localStorage, your data is:
- ✅ Saved automatically
- ✅ Persists across browser sessions
- ✅ Private to your browser
- ⚠️ Tied to this specific browser/device
- ⚠️ Cleared if you clear browser data

For backup, you can export localStorage data from browser developer tools.

## License

Free to use and modify.
