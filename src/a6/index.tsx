import { Navigate, Route, Routes } from "react-router";
import { Signin } from "./users/Signin";
import { Navigation } from "./Navigation";
import { Account } from "./users/Account";
import { AllUsers } from "./users/AllUsers";

export function A6() {
  return (
    <div className="container d-flex mt-4">
      <Navigation />
      <div className="flex-fill">
        <div className="container ms-5">
          <Routes>
            <Route path="/" element={<Navigate to="signin" />} />
            <Route path="signin" element={<Signin />} />
            <Route path="account" element={<Account />} />
            <Route path="admin/users" element={<AllUsers />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
