# React Contact Management App

This is a simple Contact Management application built using React and Redux. It allows users to manage their contacts and visualize COVID-19 data on charts and maps.

### Hosted Link
'link'

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js: https://nodejs.org
- npm: This comes with Node.js by default

## Installation

1. Clone the repository or download the source code.
2. Open a terminal and navigate to the project directory.

## Setup

1. Install the required dependencies by running the following command:

```bash
In the project directory, you can run:
npm install - to install all the packages
npm start - to start dev server
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## API Endpoint
The application uses a third-party API to fetch COVID-19 data. The API endpoint used for fetching overall COVID-19 data is: 
'https://disease.sh/v3/covid-19/historical/all?lastdays=all' - to fetch records with specific dates
'https://disease.sh/v3/covid-19/countries'- to fetch Country Specific data of cases:
'https://disease.sh/v3/covid-19/all' - to fetch World wide data of cases.  

## Usage
### Home Page - Contacts Management

- Click on the "Add Contact" button to add a new contact with a first name, last name, and status (active or inactive).
- Existing contacts are displayed in a grid.
- Each contact card displays the first name, last name, and status.
- Click on the "Edit" button to edit the contact's details.
- Click on the "Delete" button to remove the contact.
### Charts & Maps Page

- The page displays COVID-19 data in charts and maps.
- Total COVID-19 cases, deaths, recovered, active cases, critical cases, and total tests are shown.
- COVID-19 data is visualized on a line chart and a world map.
