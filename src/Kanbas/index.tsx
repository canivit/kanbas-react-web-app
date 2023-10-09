import { Navigate, Route, Routes } from "react-router";
import { KanbasNavigation } from "./KanbasNavigation";
import { Dashboard } from "./Dashboard";

function Kanbas() {
  return (
    <div className="d-flex mt-4">
      <KanbasNavigation />
      <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route path="Account" element={<h1>Account</h1>} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Courses/*" element={<h1>Courses</h1>} />
      </Routes>
    </div>
  );
}
export default Kanbas;
