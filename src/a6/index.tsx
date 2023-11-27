import { Navigate, Route, Routes } from "react-router";
import { Signin } from "./users/Signin";
import { Navigation } from "./Navigation";

export function A6() {
  return (
    <div className="container d-flex mt-4">
      <Navigation />
      <div className="flex-fill">
        <Routes>
          <Route path="/" element={<Navigate to="signin" />} />
          <Route path="signin" element={<Signin />} />
        </Routes>
      </div>
    </div>
  );
}
