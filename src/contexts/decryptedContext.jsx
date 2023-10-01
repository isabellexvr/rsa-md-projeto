import { createContext, useState, useContext } from "react";

const DecryptedContext = createContext();

export default function DecryptedProvider({ children }) {
  const [decrypted, setDecrypted] = useState([]);

  return (
    <DecryptedContext.Provider value={{ decrypted, setDecrypted }}>
      {children}
    </DecryptedContext.Provider>
  );
}

export function useDecrypted() {
  const context = useContext(DecryptedContext);

  const { decrypted, setDecrypted } = context;
  return { decrypted, setDecrypted };
}
