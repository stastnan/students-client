import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const StudentDetail = () => {
  const [student, setStudent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/students/${id}`)
      .then((response) => response.json())
      .then((body) => {
        setStudent(body);
      });
  }, [id]);

  return (
    <>
      <h1>Student detail</h1>
      {student !== null ? (
        <table className="table table-light table-bordered">
          <tbody>
            <tr>
              <th>Name</th>
              <td>
                {student.firstName} {student.lastName}
              </td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{student.gender}</td>
            </tr>
            <tr>
              <th>House</th>
              <td>{student.house}</td>
            </tr>
            <tr>
              <th>Year</th>
              <td>{student.year}</td>
            </tr>
          </tbody>
        </table>
      ) : null}
      <div style={{ display: "flex", gap: 20 }}>
        <nav>
          <Link to="/">Back to student list</Link>
          {student !== null ? (
            <Link to={`/students/${id}/edit`}>
              Edit {student.firstName} {student.lastName}
            </Link>
          ) : null}
        </nav>
      </div>
    </>
  );
};
