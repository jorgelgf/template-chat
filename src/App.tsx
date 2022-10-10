

import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import * as S from './styles'
import HiBye from './pages/HiBye';
import PDV from './pages/PDV';
import Mobile from './pages/Mobile';
import PC from './pages/PC';
import Scanner from './pages/Scanner';
import ImpR from './pages/Imp-Relatorio';
import ImpEt from './pages/Imp-Etiqueta';
import ImpCart from './pages/ImpCartao';
import OnBoarding from './pages/OnBoarding';
import Senha from './pages/Senha';
import Webcam from './pages/Webcam';
import Massivo from './pages/Massivo';
import Locker from './pages/Locker';
import Tv from './pages/Tv';
import FilServer from './pages/FileServer';

function App() {
  return (
    <BrowserRouter>
       <S.DivApp>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hibye' element={<HiBye/>}/>
        <Route path='/pdv' element={<PDV/>}/>
        <Route path='/mobile' element={<Mobile/>}/>
        <Route path='/pc' element={<PC/>}/>
        <Route path='/scanner' element={<Scanner/>}/>
        <Route path='/ImpR' element={<ImpR/>}/>
        <Route path='/impet' element={<ImpEt/>}/>
        <Route path='/impcart' element={<ImpCart/>}/>
        <Route path='/onboarding' element={<OnBoarding/>}/>
        <Route path='/senha' element={<Senha/>}/>
        <Route path='/webcam' element={<Webcam/>}/>
        <Route path='/Massivo' element={<Massivo/>}/>
        <Route path='/Locker' element={<Locker/>}/>
        <Route path='/Tv' element={<Tv/>}/>
        <Route path='/FilServer' element={<FilServer/>}/>




       </Routes>

       </S.DivApp>
    </BrowserRouter>
  );
}

export default App;
