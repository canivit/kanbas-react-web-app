import { Routes, Route, Navigate } from "react-router-dom";
import Assignment3 from "./a3";
import { Assignment4 } from "./a4";
import { Provider } from "react-redux";
import { store } from "./store";

function Labs() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Labs</h1>
        <Routes>
          <Route path="/" element={<Navigate to="a3" />} />
          <Route path="a3" element={<Assignment3 />} />
          <Route path="a4" element={<Assignment4 />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default Labs;
