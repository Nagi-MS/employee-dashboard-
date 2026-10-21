import { useState } from "react";

const emptyForm = { name: "", designation: "", location: "", salary: "" };

export default function EmployeeForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.designation.trim()) newErrors.designation = "Designation is required";
    if (!form.location.trim()) newErrors.location = "Location is required";
    if (!form.salary || Number(form.salary) <= 0)
      newErrors.salary = "Enter a valid salary";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // No need to post data from the frontend (as per assignment)
      console.log("Employee form data:", form);
      setSubmitted(true);
      setForm(emptyForm);
    }
  };

  const field = (label, name, type = "text", placeholder = "") => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={`form-control ${errors[name] ? "is-invalid" : ""}`}
        placeholder={placeholder}
        value={form[name]}
        onChange={handleChange}
      />
      {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
    </div>
  );

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-sm">
          <div className="card-body p-4">
            <h2 className="card-title mb-4">Employee Form</h2>

            {submitted && (
              <div className="alert alert-success">
                Employee details captured successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {field("Name", "name", "text", "e.g. Anandhu")}
              {field("Designation", "designation", "text", "e.g. Software Engineer")}
              {field("Location", "location", "text", "e.g. Kochi")}
              {field("Salary", "salary", "number", "e.g. 50000")}
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
