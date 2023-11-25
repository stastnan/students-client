import { Link } from "react-router-dom";

export const StudentList = () => {
  return (
    <>
      <p>Tady bude seznam studentů.</p>
      <p>
        <Link to="/students/create">Vytvoření studenta.</Link>
      </p>
      <p>
        <Link to="/students/1">Detail studenta č. 1.</Link>
      </p>
    </>
  );
};
