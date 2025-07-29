# Golden State Warriors Dashboard
## By Rahul Champaneria

A simple interactive web dashboard that is utilizable on PC, laptop, tablet, and mobile. This dashboard displays the various details about the Golden State Warriors such as the players and the head coach. Using <b>React</b> on the frontend and <b>Flask</b> on the backend, I utilized data given through APIs from TheSportsDB.

## Features
* Team Information
* Searchable player roster with responsive cards
* Recent game results
* Game performance charts
* Sticky navbar with smooth scroll to selection
* "Back to Top" button
* Modern UI with responsive layout

## Tech Stack
### Frontend
* React + Vite
* CSS Modules
* Recharts

### Backend
* Flask (Python)
* RESTful API
* CORS + JSON

## Explanations
### Aesthetic Choices
* Blue & Gold Theme: Chosen to reflect the official Golden State Warriors team colors. These colors create strong brand recognition and evoke energy and enthusiasm.
* Card Layout: Player and game information are presented in responsive, rounded cards for a clean, modern look. Cards allow modular, mobile-friendly design.
* Smooth Scroll Navigation: Enables a seamless experience as users navigate to different sections of the dashboard — giving it the feel of a single cohesive app.
* "Back to Top" Button: Improves UX for users browsing large datasets like rosters or game history.
* Responsive Design: Layout adjusts for mobile, tablet, and desktop devices using flex and gap, ensuring the dashboard is accessible on all screen sizes.
* Minimal Shadowing and Borders: Used to keep the UI clean and readable while maintaining a sense of separation between elements.

### Tech Stack Choices
#### Frontend
* React (w/ Vite): Chosen for its component-based architecture, reactivity, and large ecosystem. Vite offers faster dev builds compared to Create React App.
* CSS Modules / Custom Styles: Enables scoped, reusable styling with clear structure and flexibility over a UI framework like Bootstrap or MUI.
* Recharts: Lightweight and simple-to-integrate chart library ideal for visualizing structured sports data like points or wins.

#### Backend
* Flask (Python): Lightweight and simple to set up. Ideal for serving a few API endpoints and handling data transformation.
* Fetch API Integration: Chosen for clear separation of frontend/backend concerns — React handles UI, Flask handles data.
