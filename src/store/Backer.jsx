import { useState, createContext } from 'react';

export const BackerContext = createContext();

function BackerProvider({ children }) {
  const [backerState, setBackerState] = useState({ backed: 89914, backers: 5007 });

  return <BackerContext.Provider value={{ backerState, setBackerState }}>{children}</BackerContext.Provider>;
}

export default BackerProvider;
