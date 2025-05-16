// Aplicativo Principal
import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default App;