// Componente de carregamento
import { FaSpinner } from "react-icons/fa";
import "./Loader.css";

function Loader() {
  return (
    <section id="loader">
        <FaSpinner/>
        <h3>Carregando...</h3>
    </section>
  );
}

export default Loader;