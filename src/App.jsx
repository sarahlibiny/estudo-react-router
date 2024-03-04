import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* outlet é usado para renderizar layouts fixos -header e footer por ex- , muda apenas o conteudo de acordo com a pagina */}
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default App;
