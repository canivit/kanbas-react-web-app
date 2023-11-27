import { useEffect, useState } from "react";
import * as client from "./client";
import { Link } from "react-router-dom";

export function Account() {
  const [user, setUser] = useState<client.User | false>(false);
  const [updateResult, setUpdateResult] = useState<UpdateResult>("NoAttempt");

  async function getAccount() {
    try {
      const user = await client.getAccount();
      setUser(user);
    } catch {
      setUser(false);
    }
  }

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <>
      <h1 className="mb-4">Account</h1>
      {user ? (
        <AccountForm
          user={user}
          setUser={setUser}
          updateResult={updateResult}
          setUpdateResult={setUpdateResult}
        />
      ) : (
        <SigninAlert />
      )}
    </>
  );
}

function SigninAlert() {
  return (
    <div className="alert alert-danger" role="alert">
      Not signed in!
    </div>
  );
}

function AccountForm({
  user,
  setUser,
  updateResult,
  setUpdateResult,
}: {
  user: client.User;
  setUser: (user: client.User) => void;
  updateResult: UpdateResult;
  setUpdateResult: (updateResult: UpdateResult) => void;
}) {
  async function updateUser(user: client.User) {
    try {
      await client.updateUser(user);
      setUpdateResult("Success");
    } catch {
      setUpdateResult("Failure");
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
          value={user.username}
          className="form-control"
          id="usernameInput"
          placeholder="Username"
          onChange={(e) => {
            setUser({
              ...user,
              username: e.target.value,
            });
            setUpdateResult("NoAttempt");
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="passwordInput">
          Password
        </label>
        <input
          type="text"
          value={user.password}
          className="form-control"
          id="passwordInput"
          placeholder="Password"
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
            setUpdateResult("NoAttempt");
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="firstNameInput">
          Firstname
        </label>
        <input
          type="text"
          value={user.firstName}
          className="form-control"
          id="firstNameInput"
          placeholder="Firstname"
          onChange={(e) => {
            setUser({
              ...user,
              firstName: e.target.value,
            });
            setUpdateResult("NoAttempt");
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="lastNameInput">
          Lastname
        </label>
        <input
          type="text"
          value={user.lastName}
          className="form-control"
          id="lastNameInput"
          placeholder="Lastname"
          onChange={(e) => {
            setUser({
              ...user,
              lastName: e.target.value,
            });
            setUpdateResult("NoAttempt");
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="emailInput">
          Email
        </label>
        <input
          type="email"
          value={user.email}
          className="form-control"
          id="emailInput"
          placeholder="Email"
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
            setUpdateResult("NoAttempt");
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="dobInput">
          Date of Birth
        </label>
        <input
          type="date"
          value={user.dob?.split("T")[0]}
          className="form-control"
          id="dobInput"
          placeholder="Date of Birth"
          onChange={(e) => {
            setUser({
              ...user,
              dob: e.target.value,
            });
            setUpdateResult("NoAttempt");
          }}
        />
      </div>

      <button
        type="button"
        className="btn btn-primary mb-3"
        onClick={(e) => {
          e.preventDefault();
          updateUser(user);
        }}
      >
        Save
      </button>
      <Link to="../admin/users" className="btn btn-warning mb-3 float-end">
        Show All Users
      </Link>
      <UpdateAlert updateResult={updateResult} />
    </form>
  );
}

function UpdateAlert({ updateResult }: { updateResult: UpdateResult }) {
  switch (updateResult) {
    case "Success":
      return (
        <div className="alert alert-success" role="alert">
          Update successful!
        </div>
      );
    case "Failure":
      return (
        <div className="alert alert-danger" role="alert">
          Update failed!
        </div>
      );
    case "NoAttempt":
      return <></>;
  }
}

type UpdateResult = "Success" | "Failure" | "NoAttempt";
