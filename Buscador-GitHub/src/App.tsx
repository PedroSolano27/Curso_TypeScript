// Aplicativo Principal
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Buscador de GitHub</h1>
      </header>

      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default App;