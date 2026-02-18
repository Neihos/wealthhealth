# HRnet – React Version

## Description

HRnet is an internal web application used to manage employee records.

This project is a complete React rewrite of the original jQuery-based application in order to:

- reduce technical debt
- improve performance
- improve maintainability
- modernize the architecture

The application allows users to:

- Create new employees
- View the list of current employees
- Search employees (first name / last name)
- Sort employees by column
- Paginate results

A custom React modal plugin replaces the original jQuery modal.

---

## Prerequisites

Make sure you have the following installed:

- Node.js v18 or higher
- npm v9 or higher
- A modern browser (Chrome recommended for Lighthouse reports)

---

## Installation

1️ - Clone the repository

git clone https://github.com/Neihos/wealthhealth.git
cd wealthhealth

2️ - Install project dependencies

npm install

3️ - Install the custom modal plugin

This project uses a custom React modal plugin published via GitHub:

npm install github:Neihos/react-simple-modal

This plugin replaces the original jQuery modal used in the legacy application.

---

## Run the Project (Development Mode)

npm run dev

Open the provided local URL in your browser.

---

## Production Build

To generate an optimized production build:

npm run build

To preview the production build locally:

npm run preview

---

## Performance Reports

Lighthouse performance reports are available in the project:

performance-reports/
  lighthouse-jquery.json
  lighthouse-react.json

These reports allow comparison between:

- The original jQuery version
- The React version

They include:

- Page load metrics
- Network requests
- Performance indicators

They can be opened directly in Google Lighthouse.

---

## Custom Modal Plugin

The modal component was developed as a reusable React plugin.

Repository:
https://github.com/Neihos/react-simple-modal

Characteristics:

- Fully controlled via props
- UI-only (no business logic)
- Reusable in any React project
- Published for public access

---

## Technical Stack

- React
- Redux Toolkit (state management)
- Vite
- SCSS

---

## Notes

- This project does not use jQuery.
- No backend or authentication is implemented.
- Employee data is managed via Redux state.
- The project was developed as part of a learning exercise.
