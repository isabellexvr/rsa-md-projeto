import styled from "styled-components";
import colors from "./assets/colors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import Options from "./pages/Options";
import PublicKey from "./pages/PublicKey";
import Encryptation from "./pages/Encryptation";
import Decryptation from "./pages/Decryptation";
import { useState } from "react";
import KeysProvider from "./contexts/keysContext";
import DecryptedProvider from "./contexts/decryptedContext";
import EncryptedProvider from "./contexts/encryptedContext";
import Header from "./pages/components/Header";

function App() {
  const [loading, setLoading] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  return (
    <KeysProvider>
      <DecryptedProvider>
        <EncryptedProvider>
          <BrowserRouter>
            <AppContainer color={colors.black}>
              <Routes>
                <Route
                  element={<Home loading={loading} setLoading={setLoading} />}
                  path="/"
                />
                <Route
                  element={
                    <Presentation loading={loading} setLoading={setLoading} />
                  }
                  path="/about"
                />
                <Route
                  element={
                    <Options loading={loading} setLoading={setLoading} />
                  }
                  path="/options"
                />
                <Route
                  element={
                    <PublicKey
                      loading={loading}
                      setLoading={setLoading}
                      sidebar={sidebar}
                      setSidebar={setSidebar}
                    />
                  }
                  path="/public-key"
                />
                <Route
                  element={
                    <Encryptation
                      loading={loading}
                      setLoading={setLoading}
                      sidebar={sidebar}
                      setSidebar={setSidebar}
                    />
                  }
                  path="encrypt"
                />
                <Route
                  element={
                    <Decryptation
                      loading={loading}
                      setLoading={setLoading}
                      sidebar={sidebar}
                      setSidebar={setSidebar}
                    />
                  }
                  path="decrypt"
                />
              </Routes>
            </AppContainer>
          </BrowserRouter>
        </EncryptedProvider>
      </DecryptedProvider>
    </KeysProvider>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: ${(p) => p.color};
  color-scheme: dark;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
