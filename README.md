## Reservation List Project
This project implements a reservation list with filtering, searching and sorting capabilities.

### Overview
The ReservationList component displays a table of reservation data. It allows users to:

- Filter reservations by status, date, area etc using dropdowns
- Search for reservations by customer first name and last name
- Sort reservations by columns in ascending/descending order
- The component is built using React and TypeScript.

### Improvements
Here are some ways the project could be improved:

- Add pagination to handle large data sets better
- Using debouncing for having better performance
- Extract search components
- Write unit tests for utils

-  Use React Context for global data like filters
- Memoize callbacks to prevent unnecessary re-renders

### Getting Started
To run the project locally:

`npm install`
`npm start`
This will start the dev server on http://localhost:3000

### Run Test
`npm run test`

### Usage
- Use the dropdowns to filter reservations
- Type in the search box to search by customer name
- Click the column headers to sort ascending/descending

### Resources
- Create React App Docs
- React Docs
- Tailwind CSS
- TypeScript Docs
