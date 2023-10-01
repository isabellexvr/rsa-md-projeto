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

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <BrowserRouter>
      <AppContainer color={colors.black}>
        <Routes>
          <Route
            element={<Home loading={loading} setLoading={setLoading} />}
            path="/"
          />
          <Route
            element={<Presentation loading={loading} setLoading={setLoading} />}
            path="/about"
          />
          <Route
            element={<Options loading={loading} setLoading={setLoading} />}
            path="/options"
          />
          <Route
            element={<PublicKey loading={loading} setLoading={setLoading} />}
            path="/public-key"
          />
          <Route
            element={<Encryptation loading={loading} setLoading={setLoading} />}
            path="encrypt"
          />
          <Route
            element={<Decryptation loading={loading} setLoading={setLoading} />}
            path="decrypt"
          />
        </Routes>
      </AppContainer>
    </BrowserRouter>
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
