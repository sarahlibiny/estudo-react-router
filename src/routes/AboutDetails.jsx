import { useParams } from "react-router-dom";

export default function AboutDetails() {
  const { id } = useParams();

  return <h2>Exibindo informações do about: {id}</h2>;
}
