

import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import * as S from './styles'
import Rout from './pages/Rout';

function App() {
  return (
    <BrowserRouter>
       <S.DivApp><Rout/></S.DivApp>
    </BrowserRouter>
  );
}

export default App;
