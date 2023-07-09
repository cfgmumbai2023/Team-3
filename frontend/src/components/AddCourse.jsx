import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddCourseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [years, setYears] = useState();
  const [file, setFile] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // You can access the input values using the state variables (title, description, qualifications, years)
    // Perform any necessary validation or API requests

    // Clear form input fields
    setTitle("");
    setDescription("");
    setQualifications("");
    setYears("");
  };

  return (
    <div>
      <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
        <div className="">
          <h3>Add a Course</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="qualifications" className="form-label">
                Minimum Qualifications
              </label>
              <input
                type="text"
                className="form-control"
                id="qualifications"
                value={qualifications}
                onChange={(e) => setQualifications(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="years" className="form-label">
                Number of Years
              </label>
              <input
                type="number"
                className="form-control"
                id="years"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="years" className="form-label">
                Upload videos files
              </label>
               <input
                type="file"
                className="form-control"
                id="years"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
              </div>
            <div className="">
              <Link to="/course"
                type="submit"
                className="btn btn-primary"
                style={{ marginRight: "10px" }}
              >
                Add Course
              </Link>
              <Link to="/instructor" className="btn btn-primary">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourseForm;
