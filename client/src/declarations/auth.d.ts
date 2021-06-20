type User = {
  email: string;
  password: string;
};

type AuthContextType = {
  token: string | null;
  authorized: boolean;
  user: User | null;
  signInUser: (_user: LoginValues) => void;
  signOutUser: () => void;
  authUser: (_token?: string) => void;
};
