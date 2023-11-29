import { useState } from "react";
import * as client from "./client";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";

export function Signup() {
  const [credentials, setCredentials] = useState<client.Credentials>({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function signup() {
    try {
      await client.signup(credentials);
      setError("");
      navigate("../account");
    } catch (e) {
      console.log(e);
      if (e instanceof AxiosError) {
        setError(e.response?.data ?? "Unknown error occurred");
      }
    }
  }

  return (
    <form>
      <div className="mb-3">
        <label className="form-label" htmlFor="usernameInput">
          Username
        </label>
        <input
          type="text"
          value={credentials.username}
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
          value={credentials.password}
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
        className="btn btn-primary mb-3"
        onClick={(e) => {
          e.preventDefault();
          signup();
        }}
      >
        Signup
      </button>
      {error !== "" && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </form>
  );
}
