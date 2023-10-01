import styled from 'styled-components';
import colors from "./assets/colors"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Presentation from './pages/Presentation';
import Options from './pages/Options';
import PublicKey from './pages/PublicKey';
import Encryptation from './pages/Encryptation';
import Decryptation from './pages/Decryptation';

function App() {

  return (
    <BrowserRouter>
      <AppContainer color={colors.black} >
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Presentation/>} path='/about'/>
          <Route element={<Options/>} path='/options'/>
          <Route element={<PublicKey/>} path='/public-key'/>
          <Route element={<Encryptation/>} path='encrypt'/>
          <Route element={<Decryptation/>} path='decrypt'/>
        </Routes>
      </AppContainer>
    </BrowserRouter>
  )
}

export default App

const AppContainer = styled.div`
  background-color: ${p => p.color};
  color-scheme: dark;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`