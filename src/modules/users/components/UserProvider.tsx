import { ReactNode, createContext } from "react";

export interface User {
  name: string;
  age: number;
}

interface UserContext {
  users: User[];
}

export const UserContext = createContext({
  users: [],
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  return (
    <UserContext.Provider
      value={{
        users: [],
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
