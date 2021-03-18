import { BrowserRouter } from "react-router-dom";

import Todos from "./components/Todos/todoes.components";

import "./App.css";

function App() {
  return (
    <div className="mainDivSection">
      <header className="header">
        <h1 className="mainHeader underline">Today work schedule : </h1>
      </header>
      <main className="main">
        <section className="mainSection">
          <Todos />
        </section>
      </main>
    </div>
  );
}

export default App;
