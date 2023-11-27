import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CODEBOOK_NAME_GENDER,
  CODEBOOK_NAME_HOUSE,
  CODEBOOK_NAME_YEAR,
  getCodebookOptions,
  getCodebookRadioButtons,
} from "./codebook";

export const StudentCreateForm = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    house: "",
    year: "",
  });

  const setFirstName = (firstName) => {
    setStudent({ ...student, firstName });
  };
  const setLastName = (lastName) => {
    setStudent({ ...student, lastName });
  };
  const setGender = (gender) => {
    setStudent({ ...student, gender });
  };
  const setHouse = (house) => {
    setStudent({ ...student, house });
  };
  const setYear = (year) => {
    setStudent({ ...student, year });
  };

  const createStudent = () => {
    return fetch(`http://localhost:8080/students/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createStudent()
      .then((response) => response.json())
      .then((body) => {
        navigate(`/students/${body}`);
      });
  };

  return (
    <>
      <h1>Create student</h1>
      <form onSubmit={handleSubmit}>
        <table className="table table-light table-bordered">
          <tbody>
            <tr>
              <th>
                <label htmlFor="first-name" className="form-label">
                  First name
                </label>
              </th>
              <td>
                <input
                  id="first-name"
                  name="first-name"
                  className="form-control"
                  value={student.firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="last-name" className="form-label">
                  Last name
                </label>
              </th>
              <td>
                <input
                  id="last-name"
                  name="last-name"
                  className="form-control"
                  value={student.lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>
                {getCodebookRadioButtons(
                  CODEBOOK_NAME_GENDER,
                  student.gender,
                  (event) => setGender(event.target.value)
                )}
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="house" className="form-label">
                  House
                </label>
              </th>
              <td>
                <select
                  id="house"
                  name="house"
                  className="form-select"
                  value={student.house}
                  onChange={(event) => setHouse(event.target.value)}
                >
                  {getCodebookOptions(CODEBOOK_NAME_HOUSE, true)}
                </select>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="year" className="form-label">
                  Year
                </label>
              </th>
              <td>
                <select
                  id="year"
                  name="year"
                  className="form-select"
                  value={student.year}
                  onChange={(event) => setYear(event.target.value)}
                >
                  {getCodebookOptions(CODEBOOK_NAME_YEAR, true)}
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button className="btn btn-primary">Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <nav>
        <Link to="/">Back to student list</Link>
      </nav>
    </>
  );
};
