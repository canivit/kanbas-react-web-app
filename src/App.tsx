import Nav from "./Nav";
import Kanbas from "./Kanbas";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <Nav/>
        <Routes>
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/kanbas" element={<Kanbas />} />
          <Route path="/hello" element={<HelloWorld />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
