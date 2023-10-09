import { Navigate, Route, Routes } from "react-router";
import { KanbasNavigation } from "./KanbasNavigation";
import { Dashboard } from "./Dashboard";
import { Courses } from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex mt-4">
      <KanbasNavigation />
      <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route path="Account" element={<h1>Account</h1>} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Courses/:courseId/*" element={<Courses />} />
      </Routes>
    </div>
  );
}
export default Kanbas;
