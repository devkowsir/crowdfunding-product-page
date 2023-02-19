import { useState, createContext } from 'react';

export const PledgeContext = createContext();

function PledgeProvider({ children }) {
  const [selectedPledge, setSelectedPledge] = useState(null);

  return <PledgeContext.Provider value={{ selectedPledge, setSelectedPledge }}>{children}</PledgeContext.Provider>;
}

export default PledgeProvider;
