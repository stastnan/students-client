import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CODEBOOK_NAME_GENDER,
  CODEBOOK_NAME_HOUSE,
  CODEBOOK_NAME_YEAR,
  getCodebookItemName,
} from "./codebook";
import { fetchStudent } from "./fetchStudent";

export const StudentDetail = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchStudent(id, setStudent);
  }, []);

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
              <td>
                {getCodebookItemName(CODEBOOK_NAME_GENDER, student.gender)}
              </td>
            </tr>
            <tr>
              <th>House</th>
              <td>{getCodebookItemName(CODEBOOK_NAME_HOUSE, student.house)}</td>
            </tr>
            <tr>
              <th>Year</th>
              <td>{getCodebookItemName(CODEBOOK_NAME_YEAR, student.year)}</td>
            </tr>
          </tbody>
        </table>
      ) : null}
      <nav>
        <Link to="/">Back to student list</Link>{" "}
        {student !== null ? (
          <Link to={`/students/${student.id}/edit`}>
            Edit {student.firstName} {student.lastName}
          </Link>
        ) : null}
      </nav>
    </>
  );
};
