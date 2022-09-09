import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from "react"

export interface ChildrenProps {
  children: ReactNode
}

type UserContextType = {
  userName: string
  setUserName: Dispatch <SetStateAction<string>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserWrapper({ children } : ChildrenProps ) {
  const [userName, setUserName] = useState<string>("鈴木 孝之");

  const pageValue = useMemo(() => ({
    userName, setUserName
  }), [
    userName, setUserName
  ]);

  return (
    <UserContext.Provider value={pageValue}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('Context is undefined');
  }
  return context;
}
