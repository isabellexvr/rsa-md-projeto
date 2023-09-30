import styled from 'styled-components';
import colors from "./assets/colors"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Presentation from './pages/Presentation';

function App() {

  return (
    <BrowserRouter>
      <AppContainer color={colors.black} >
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Presentation/>} path='/about'/>
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