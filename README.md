# Employee Dashboard

A React app built for Assignment 2.

## Features
- Navbar with **Home** and **Employee Form** links (React Router)
- **Home / Dashboard** (`/`): fetches users from `https://jsonplaceholder.typicode.com/users` and shows `id`, `name`, `email` in a table
- **Employee Form** (`/employee-form`): Name, Designation, Location, Salary with basic validation (no data is posted)
- Styled with **Bootstrap 5**

## Tech stack
React 18, Vite, React Router v6, Bootstrap 5

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build
```bash
npm run build
```

## Project structure
```
src/
  main.jsx
  App.jsx
  components/Navbar.jsx
  pages/Home.jsx
  pages/EmployeeForm.jsx
```
