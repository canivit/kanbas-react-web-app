import axios from "axios";
import { API_BASE } from "../../Kanbas/client/course";

const USERS_API = `${API_BASE}/users`;

export async function signin(credentials: Credentials): Promise<User> {
  const response = await axios.post(`${USERS_API}/signin`, credentials);
  return response.data;
}

export async function getAccount(): Promise<User> {
  const response = await axios.get(`${USERS_API}/account`);
  return response.data;
}

export type Credentials = {
  username: string;
  password: string;
};

export type User = {
  username: string;
  password: string;
  firstName?: string;
  email?: string;
  lastName?: string;
  dob?: string;
  role?: "STUDENT" | "FACULTY" | "ADMIN" | "USER";
};
