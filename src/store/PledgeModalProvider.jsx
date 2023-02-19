import { useState, createContext } from 'react';

export const PledgeModalContext = createContext();

function PledgeModalProvider({ children }) {
  const [pledgeModal, setPledgeModal] = useState(false);

  const pledgeModalToggler = () => {
    setPledgeModal((current) => !current);
  };

  return <PledgeModalContext.Provider value={{ pledgeModal, pledgeModalToggler }}>{children}</PledgeModalContext.Provider>;
}

export default PledgeModalProvider;
