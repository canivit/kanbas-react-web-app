import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const [credentials, setCredentials] = useState<client.Credentials>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/a6/account");
  };
  return (
    <div className="container mt-3 w-50">
      <form>
        <div className="mb-3">
          <label className="form-label" htmlFor="usernameInput">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="usernameInput"
            placeholder="Username"
            onChange={(e) => {
              setCredentials({
                ...credentials,
                username: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="passwordInput">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Password"
            onChange={(e) => {
              setCredentials({
                ...credentials,
                password: e.target.value,
              });
            }}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            signin();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
