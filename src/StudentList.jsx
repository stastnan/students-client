import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((response) => response.json())
      .then((body) => {
        setStudents(body);
      });
  }, []);

  const handleStudentDelete = (id) => {
    const filteredStudents = students.filter((student) => student.id !== id);
    setStudents(filteredStudents);
  };

  return (
    <>
      <h1>List of students</h1>
      {students.length > 0 ? (
        <table className="table table-light table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>House</th>
              <th>Year</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>
                  <Link to={`/students/${student.id}`}>
                    {student.firstName} {student.lastName}
                  </Link>
                </td>
                <td>{student.gender}</td>
                <td>{student.house}</td>
                <td>{student.year}</td>
                <td>
                  <Link to={`/students/${student.id}/edit`}> Edit</Link>
                  <button
                    type="button"
                    className="btn btn-danger student-delete"
                    onClick={() => handleStudentDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      <nav>
        <Link to="/students/create">Create new student</Link>
      </nav>
    </>
  );
};
