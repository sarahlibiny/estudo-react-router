import { Link, useNavigate } from "react-router-dom";
import "./About.css";

export default function About() {
  const navigate = useNavigate();

  const handleMessage = () => {
    return navigate("/");
  };

  return (
    <div className="about">
      <Link to="/about/1">About 1</Link>
      <Link to="/about/2">About 2</Link>
      <button onClick={handleMessage}>Enviar mensagem</button>
    </div>
  );
}
