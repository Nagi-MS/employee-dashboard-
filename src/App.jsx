import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import EmployeeForm from "./pages/EmployeeForm.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
          <Route
            path="*"
            element={<h4 className="text-center mt-5">404 - Page not found</h4>}
          />
        </Routes>
      </main>
    </>
  );
}
