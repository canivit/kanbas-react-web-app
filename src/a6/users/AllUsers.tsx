import { useEffect, useState } from "react";
import * as client from "./client";

export function AllUsers() {
  const[users, setUsers] = useState<client.User[]>([]);
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>User List</h1>
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
