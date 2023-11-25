import { useState } from "react";
import { Link } from "react-router-dom";

export const StudentCreateForm = () => {
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    house: "",
    year: "",
  });
  return (
    <>
      <h1>Create student</h1>

      <form>
        <table class="table table-light table-bordered">
          <tbody>
            <tr>
              <th>
                <label for="first-name" className="form-label">
                  First name
                </label>
              </th>
              <td>
                <input
                  id="first-name"
                  name="first-name"
                  className="form-control"
                  onChange={(e) => e.target.value}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label for="last-name" className="form-label">
                  Last name
                </label>
              </th>
              <td>
                <input
                  id="last-name"
                  name="last-name"
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="gender"
                    class="form-check-input"
                    value="M"
                  />
                  Male
                </label>
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="gender"
                    class="form-check-input"
                    value="F"
                  />
                  Female
                </label>
              </td>
            </tr>
            <tr>
              <th>
                <label for="house" className="form-label">
                  House
                </label>
              </th>
              <td>
                <select id="house" name="house" className="form-select">
                  <option></option>
                  <option value="GRYFFINDOR">Gryffindor</option>
                  <option value="HUFFLEPUFF">Hufflepuff</option>
                  <option value="RAVENCLAW">Ravenclaw</option>
                  <option value="SLYTHERIN">Slytherin</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>
                <label for="year" className="form-label">
                  Year
                </label>
              </th>
              <td>
                <select id="year" name="year" className="form-select">
                  <option></option>
                  <option value="1">First</option>
                  <option value="2">Second</option>
                  <option value="3">Third</option>
                  <option value="4">Fourth</option>
                  <option value="5">Fifth</option>
                  <option value="6">Sixth</option>
                  <option value="7">Seventh</option>
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
