# Linkz

A mobile application for organizing and managing your important links, built with React Native and Expo.

## Features

- 📱 Modern and intuitive mobile interface
- 🗂️ Categorize links (Courses, Projects, Sites, Articles, Videos, Documentation)
- 🔍 Filter links by category
- 🔗 Open links directly in the device's browser
- 🗑️ Delete unwanted links
- 💾 Persistent storage using AsyncStorage
- 🌙 Dark mode by default

## Tech Stack

- React Native
- Expo
- TypeScript
- AsyncStorage for data persistence
- Expo Router for navigation
- Material Icons for icons

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (or physical device)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/linkz.git
cd linkz
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Run on your preferred platform:
- Press `i` for iOS
- Press `a` for Android
- Scan the QR code with Expo Go app on your physical device

## Project Structure

```
src/
├── app/              # Main application screens
│   ├── add/         # Add new link screen
│   └── index/       # Home screen with link list
├── components/       # Reusable components
├── storage/         # Data persistence logic
├── styles/          # Global styles and theme
└── utils/           # Utility functions and constants
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 