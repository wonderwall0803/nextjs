import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from "react"

export interface ChildrenProps {
  children: ReactNode
}

type PageContextType = {
  isSample: boolean
  setIsSample: Dispatch <SetStateAction<boolean>>;
  txtSample: string;
  setTxtSample: Dispatch <SetStateAction<string>>;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export function PageWrapper({ children } : ChildrenProps ) {
  const [isSample, setIsSample] = useState<boolean>(false);
  const [txtSample, setTxtSample] = useState<string>("ページコンテクストサンプル");

  const pageValue = useMemo(() => ({
    isSample, setIsSample,
    txtSample, setTxtSample,
  }), [
    isSample, setIsSample,
    txtSample, setTxtSample,
  ]);

  return (
    <PageContext.Provider value={pageValue}>
      {children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('Context is undefined');
  }
  return context;
}
