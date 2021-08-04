import React, { createContext, useState, useContext } from "react";
import { ReactNode } from "react";



type ContextValue ={
  sideBarExpanded: boolean;
  setSideBarExpanded(value:boolean): void;
}
type Props = {
  children:ReactNode

}
const ApplicationContext = createContext<ContextValue | undefined>(void 0);

export function ApplicationContextProvider(props: Props) {
  const { children } = props;
  const [sideBarExpanded, setSideBarExpanded] = useState(true);

  return (
    <ApplicationContext.Provider
      value={{
        sideBarExpanded,
        setSideBarExpanded
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export function useCount() {
  const context = useContext(ApplicationContext);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const { count, setCount } = context;
  return { count, setCount };
}