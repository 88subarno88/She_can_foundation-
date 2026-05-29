# She Can Foundation - Contact Form

A simple full-stack contact form webpage built for the She Can Foundation internship task.

## Features
- Contact form with Name, Email and Message fields
- Shows "Form Submitted Successfully" after submitting
- Form validation (both in the browser and on the server)
- Backend API built with Node.js + Express
- Messages saved to a file (simple database)
- Admin panel to view all submitted messages (password protected)
- Responsive design (works on mobile and desktop)

## Tech Used
- HTML, CSS, JavaScript (frontend)
- Node.js + Express (backend)

## How to Run
1. Install Node.js (https://nodejs.org)
2. Open this folder in the terminal
3. Install the packages:
   ```
   npm install
   ```
4. Start the server:
   ```
   npm start
   ```
5. Open your browser at: http://localhost:3000

## Admin Panel
- Go to http://localhost:3000/admin.html
- Password: `shecan123`

## Folder Structure
```
she-can-foundation/
├── server.js          # Backend server + API
├── package.json       # Project info and dependencies
├── data/
│   └── messages.json  # Saved form submissions
└── public/
    ├── index.html     # Contact form page
    ├── style.css      # Styling
    ├── script.js      # Form validation + submit
    └── admin.html     # Admin panel
```
