import { Link } from "react-router-dom";

export const StudentCreateForm = () => {
  return (
    <>
      <p>Tady bude vytvoření studenta.</p>
      <p>
        <Link to="/">Seznam studentů.</Link>
      </p>
    </>
  );
};
