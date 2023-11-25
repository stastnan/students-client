import { useParams } from "react-router-dom";

export const StudentDetail = () => {
  const { id } = useParams();

  return <p>Tady bude detail studenta č. {id}.</p>;
};
