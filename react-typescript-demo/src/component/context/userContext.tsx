import { createContext, useState } from "react";

//Context is always created outside the component

export type AuthUser = {
  name: string;
  email: string;
};

//Step3, we need to set value for context types
type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UsercontextProviderProps = {
  children: React.ReactNode;
};

//Step2: To create component that provides the usercontext value

export const UserContext = createContext({} as UserContextType);
//null -  We dont know how the value of the context out this context
// Step 1:

export const UserContextProvider = ({ children }: UsercontextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
