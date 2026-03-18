export type UserRole = "patient" | "admin";

export type AuthUser = {
  id: string;
  role: UserRole;
  name: string;
  email: string;
};

export type AuthSession = {
  user: AuthUser;
  accessToken: string;
  expiresAt: number;
};
