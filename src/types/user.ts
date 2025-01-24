export interface User {
  _id: string;
  name: string;
  email: string;
  userName: string;
  userType: UserType;
}

export enum UserType {
  ADMIN = "admin",
  USER = "user",
}
