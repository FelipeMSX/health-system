import { createContext, useState } from "react";
import { useContext } from "react";
import { ReactNode } from "react";

type ContextValue = {
  isFullcreen: boolean;
  setFullscreen(value: boolean): void;
};
type Props = {
  children: ReactNode;
};

const ApplicationContext = createContext<ContextValue | undefined>(void 0);

export function AppContextProvider(props: Props) {
  const { children } = props;
  const [isFullScreen, setFullscreen] = useState(false);

  return (
    <ApplicationContext.Provider
      value={{
        isFullcreen: isFullScreen,
        setFullscreen: setFullscreen,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export function UseAppContext() {
  const context = useContext(ApplicationContext);

  if (typeof context === "undefined") throw new Error("the function must be used within and AppContext!");

  return context;
}
