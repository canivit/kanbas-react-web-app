import { useEffect, useState } from "react";
import * as client from "./client";

export function AllUsers() {
  const [users, setUsers] = useState<client.User[]>([]);
  const [user, setUser] = useState<client.User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  async function createUser(user: client.User) {
    try {
      const newUser = await client.createUser(user);
      setUsers([...users, newUser]);
      setUser({
        _id: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        role: "USER",
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <NewUserForm user={user} setUser={setUser} createUser={createUser} />
      <UserList users={users} />
    </div>
  );
}

function NewUserForm({
  user,
  setUser,
  createUser,
}: {
  user: client.User;
  setUser: (user: client.User) => void;
  createUser: (user: client.User) => void;
}) {
  return (
    <div className="mb-5">
      <h2>Add User</h2>
      <form>
        <div className="row g-4 mb-4">
          <div className="col">
            <label htmlFor="usernameInput" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="usernameInput"
              value={user.username}
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="firstnameInput" className="form-label">
              Firstname
            </label>
            <input
              type="text"
              className="form-control"
              id="firstnameInput"
              value={user.firstName}
              onChange={(e) => {
                setUser({ ...user, firstName: e.target.value });
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="lastnameInput" className="form-label">
              Lastname
            </label>
            <input
              type="text"
              className="form-control"
              id="lastnameInput"
              value={user.lastName}
              onChange={(e) => {
                setUser({ ...user, lastName: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="row g-4 mb-4">
          <div className="col">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="dobInput" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="dobInput"
              value={user.dob}
              onChange={(e) => {
                setUser({ ...user, dob: e.target.value });
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="roleInput" className="form-label">
              Role
            </label>
            <select
              value={user.role}
              className="form-select"
              onChange={(e) => {
                if (
                  e.target.value === "USER" ||
                  e.target.value === "ADMIN" ||
                  e.target.value === "FACULTY" ||
                  e.target.value === "STUDENT"
                ) {
                  setUser({
                    ...user,
                    role: e.target.value,
                  });
                }
              }}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            createUser(user);
          }}
        >
          Create User
        </button>
      </form>
      <hr />
    </div>
  );
}

function UserList({ users }: { users: client.User[] }) {
  return (
    <div>
      <h2>User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
