export const fetchStudent = (id, setStudent) => {
  return fetch(`http://localhost:8080/students/${id}`)
    .then((response) => response.json())
    .then((body) => setStudent(body));
};
