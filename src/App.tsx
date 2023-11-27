import Nav from "./Nav";
import { Kanbas } from "./Kanbas";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { A6 } from "./a6";

function App() {
  return (
    <HashRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/a6/*" element={<A6 />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
