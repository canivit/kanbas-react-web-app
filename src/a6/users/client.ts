import axios from "axios";
import { API_BASE } from "../../Kanbas/client/course";

const USERS_API = `${API_BASE}/users`;

const request = axios.create({
  withCredentials: true,
});

export async function signin(credentials: Credentials): Promise<User> {
  const response = await request.post(`${USERS_API}/signin`, credentials);
  return response.data;
}

export async function getAccount(): Promise<User> {
  const response = await request.get(`${USERS_API}/account`);
  return response.data;
}

export async function updateUser(user: User): Promise<void> {
  await request.post(`${USERS_API}/${user._id}`, user);
}

export async function findAllUsers(): Promise<User[]> {
  const response = await request.get(`${USERS_API}`);
  return response.data;
}

export async function createUser(user: User): Promise<User> {
  const response = await request.put(`${USERS_API}`, user);
  return response.data;
}

export async function findUserById(id: string) {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
}

export async function deleteUser(id: string): Promise<void> {
  await request.delete(`${USERS_API}/${id}`);
}

export async function signup(credentials: Credentials): Promise<User> {
  const response = await request.post(`${USERS_API}/signup`, credentials);
  return response.data;
}

export async function signout(): Promise<void> {
  await request.get(`${USERS_API}/signout`);
}

export type Credentials = {
  username: string;
  password: string;
};

export type User = {
  _id: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  dob?: string;
  role?: "STUDENT" | "FACULTY" | "ADMIN" | "USER";
};
