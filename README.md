Sweepstakes League
Welcome to the Sweepstakes League! This project was designed for colleagues at my previous teaching job, adding a fun competitive twist to a European football competition.

Overview
The app randomly assigns teams from a European competition to players and tracks their performance over the course of the tournament. Points are awarded based on how each team performs, and players are ranked in a league accordingly. The project is built using React (via Vite) on the frontend, styled with styled-components, and powered by a Node.js (Express) backend, connected to a MongoDB database.

Features:
Random team assignment for each player.
Automated point calculation based on live team performances through real-time updates from an external API.
Player rankings are updated automatically as new match results come in.
Fun and colorful interface inspired by the Euro 2024 color palette.
Technologies Used
Frontend:

React (via Vite)
JavaScript, HTML, CSS (styled-components)
Backend:

Node.js with Express
MongoDB (via Mongoose)
Other Key Features:

Fetching live data from an external API to update player scores based on team performance.
Populating and updating player records with team performance data automatically.
Styling & Design
The app features a playful and colorful design, using a color palette inspired by the Euro 2024 logo. The interface was designed to be engaging, though in retrospect, I feel it may have been a little too heavy on primary colors. Future designs may incorporate a more subdued color scheme.

Setup Instructions
Clone this repository:

bash
Copy code
git clone https://github.com/yourusername/sweepstakes-league.git
cd sweepstakes-league
Install dependencies for both frontend and backend:

bash
Copy code
cd client
npm install
cd ../server
npm install
Start both the frontend and backend servers:

Frontend (React + Vite):
bash
Copy code
cd client
npm run dev
Backend (Node/Express):
bash
Copy code
cd server
npm run start
MongoDB Configuration:

Set up a MongoDB database, either locally or via a cloud service like MongoDB Atlas.
Update the MongoDB connection string in the server/.env file.
Important Notes:
The app connects to a database hosted on a free server, which may spin down due to inactivity. Please be patient when first loading the app as it may take around one minute to establish a connection.
A loading spinner has been incorporated to indicate when the app is fetching data from the database and external API.
Usage
Upon launching the app, a message on the homepage will provide further details on how to interact with it.

To see the finished results of the league, simply enter "liga" in the input field.
If you wish to view a live draw where players are randomly assigned teams, enter "ejemplo" in the input field. Please note that as the competition is over, the teams already have data associated with their matches.
Future Improvements
Color Scheme: I plan to rework the app's color palette in future versions to make it more subtle and visually balanced.
Loading Times: Exploring ways to reduce latency when connecting to the free server.
License
This project is licensed under the MIT License. See the LICENSE file for more details.
