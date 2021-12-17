export interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
}

export interface LoginResponse {
  access_token: string
  expiring: string
}
