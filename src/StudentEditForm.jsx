import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export const StudentEditForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    house: "",
    year: "",
  });

  const fetchStudent = () => {
    return fetch(`http://localhost:8080/students/${id}`)
      .then((response) => response.json())
      .then((body) => setStudent(body));
  };
  useEffect(() => {
    fetchStudent();
  }, []);

  const setFirstName = (firstName) => setStudent({ ...student, firstName });
  const setLastName = (lastName) => setStudent({ ...student, lastName });
  const setHouse = (house) => setStudent({ ...student, house });
  const setYear = (year) => setStudent({ ...student, year });
  const setGender = (gender) => setStudent({ ...student, gender });

  const updateStudent = () => {
    return fetch(`http://localhost:8080/students/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent().then(() => navigate(`/students/${id}`));
  };

  return (
    <>
      <h1>Edit student</h1>
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
                  onChange={(e) => setFirstName(e.target.value)}
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
                  onChange={(e) => setLastName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>
                <input
                  id="gender"
                  name="gender"
                  className="form-control"
                  value={student.gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="house" className="form-label">
                  House
                </label>
              </th>
              <td>
                <input
                  id="house"
                  name="house"
                  className="form-control"
                  value={student.house}
                  onChange={(e) => setHouse(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="year" className="form-label">
                  Year
                </label>
              </th>
              <td>
                <input
                  id="year"
                  name="year"
                  className="form-control"
                  value={student.year}
                  onChange={(e) => setYear(e.target.value)}
                />
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
