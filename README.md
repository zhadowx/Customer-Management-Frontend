# Customer Management Frontend

This is the frontend for the customer management application. It provides a user interface to manage customers and addresses.

## Technologies Used

- React
- Tailwind CSS
- React Router
- Axios
- Vite

## Installation

1. Clone this repository:

   ```sh
   git clone https://github.com/zhadowx/Customer-Management-Frontend.git
   cd frontend-repo
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the application:
   ```sh
   npm run dev
   ```

## Project Structure

frontend/
├── src/
│ ├── api/
│ │ └── api.js
│ ├── assets/
│ │ └── customer-management-logo.webp
│ ├── components/
│ │ ├── AddressDetail.jsx
│ │ ├── AddressForm.jsx
│ │ ├── AddressList.jsx
│ │ ├── CustomerDetail.jsx
│ │ ├── CustomerForm.jsx
│ │ ├── CustomerList.jsx
│ │ └── Layout.jsx
│ ├── context/
│ │ ├── GlobalContext.jsx
│ │ └── Reducers.jsx
│ ├── pages/
│ │ ├── AddressesPage.jsx
│ │ ├── CustomersPage.jsx
│ │ └── HomePage.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality and issues.
- `npm run preview`: Previews the production build.

## Dependencies

- `axios`: ^1.7.2
- `prop-types`: ^15.8.1
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.23.1

## DevDependencies

- `@types/react`: ^18.2.66
- `@types/react-dom`: ^18.2.22
- `@vitejs/plugin-react`: ^4.2.1
- `autoprefixer`: ^10.4.19
- `eslint`: ^8.57.0
- `eslint-plugin-react`: ^7.34.1
- `eslint-plugin-react-hooks`: ^4.6.0
- `eslint-plugin-react-refresh`: ^0.4.6
- `postcss`: ^8.4.38
- `tailwindcss`: ^3.4.4
- `vite`: ^5.2.0
