import { Navigate, Route, Routes } from "react-router";
import { KanbasNavigation } from "./KanbasNavigation";
import { Dashboard } from "./Dashboard";
import { Courses } from "./Courses";
import "./index.css";

function Kanbas() {
  return (
    <div className="d-flex mt-4">
      <KanbasNavigation />
      <div className="flex-fill">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
