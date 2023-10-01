import { createContext, useState, useContext } from "react";

const EncryptedContext = createContext();

export default function EncryptedProvider({ children }) {
  const [encrypted, setEncrypted] = useState([]);

  return (
    <EncryptedContext.Provider value={{ encrypted, setEncrypted }}>
      {children}
    </EncryptedContext.Provider>
  );
}

export function useEncrypted() {
  const context = useContext(EncryptedContext);

  const { encrypted, setEncrypted } = context;
  return { encrypted, setEncrypted };
}
