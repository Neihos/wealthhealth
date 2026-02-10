# HRnet – React Version

## Description

HRnet is an internal web application used to manage employee records.
This project is a React rewrite of an existing jQuery-based application in order to improve performance, maintainability, and user experience.

The application allows users to:

- create new employees

- view the list of existing employees

A custom React modal plugin is used to replace the original jQuery modal.

## Prerequisites

Before installing the project, make sure you have:

- Node.js (version 18 or higher)

- npm

## Installation

1️ - Clone the repository
git clone https://github.com/Neihos/wealthhealth.git
cd wealthhealth

2️ - Install project dependencies
npm install

3️ - Install the custom modal plugin

This project uses a custom React modal plugin hosted on GitHub.

npm install github:Neihos/react-simple-modal


This plugin replaces the original jQuery modal and is used to display confirmation messages.

4️ - Run the project locally
npm run dev


Then open the provided local URL in your browser.

## Custom Modal Plugin

The modal used in this project is a reusable React component developed separately.

Repository:
https://github.com/Neihos/react-simple-modal

The plugin is:

- fully controlled by props

- UI-only (no business logic)

- reusable in other React projects

## Notes

- This project does not use jQuery.

- No backend or authentication is implemented.

- The project was developed as part of a learning exercise.