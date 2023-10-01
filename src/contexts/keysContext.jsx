import { createContext, useState, useContext } from "react";

const KeysContext = createContext();

export default function KeysProvider({ children }) {
  const [keys, setKeys] = useState([]);

  return (
    <KeysContext.Provider value={{ keys, setKeys }}>
      {children}
    </KeysContext.Provider>
  );
}

export function useKeys() {
  const context = useContext(KeysContext);

  const { keys, setKeys } = context;
  return { keys, setKeys };
}
