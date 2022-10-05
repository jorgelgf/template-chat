

import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import * as S from './styles'
import HiBye from './pages/HiBye';
import PDV from './pages/PDV';

function App() {
  return (
    <BrowserRouter>
       <S.DivApp>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hibye' element={<HiBye/>}/>
        <Route path='/pdv' element={<PDV/>}/>

       </Routes>

       </S.DivApp>
    </BrowserRouter>
  );
}

export default App;
