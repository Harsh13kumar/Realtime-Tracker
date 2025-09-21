# Realtime Tracker

## Description
Realtime Tracker is a web application that enables live location tracking of users on an interactive map. Designed for real-time collaboration, it allows multiple users to share and view each other's locations instantly. Key features include live updates, user management, and a responsive map interface.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Harsh13kumar/Realtime-Tracker.git
   cd realtime-tracker
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the server:**
   ```bash
   npm start
   ```
4. **Open the app:**
   Visit `http://localhost:3000` in your browser.

## Usage
- You can try the live demo at: [Here👋](https://realtime-tracker-kzi7.onrender.com)
- Open the application in your browser.
- Allow location access when prompted.
- Your location will be shared and displayed on the map in real time.
- Other connected users' locations will also appear on the map.

**Example:**
```javascript
// Client-side location sharing
navigator.geolocation.watchPosition((position) => {
  socket.emit('send-location', {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  });
});
```

## Features
- Real-time location sharing and updates
- Interactive map with user markers
- Automatic removal of disconnected users
- Responsive and user-friendly interface

## Technologies Used
- JavaScript (Node.js, ES6)
- Socket.IO (real-time communication)
- Leaflet.js (interactive maps)
- OpenStreetMap (map tiles)
- HTML5 & CSS3

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

Please follow the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## License
This project is licensed under the MIT License.

## Contact
For questions or support, please contact:
- **Name:** Harsh kumar
- **Email:** businessharsh72@gmail.com
- **GitHub:** [Harsh13kumar](https://github.com/Harsh13kumar)

## Acknowledgements
- [Leaflet.js](https://leafletjs.com/)
- [Socket.IO](https://socket.io/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- Inspiration from open-source real-time tracking projects
