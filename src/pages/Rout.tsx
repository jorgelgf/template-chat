
import { Routes,Route } from "react-router-dom";
import Filserver from "./FileServer";
import HiBye from "./HiBye";
import Home from "./Home";
import ImpEt from "./Imp-Etiqueta";
import ImpR from "./Imp-Relatorio";
import ImpCart from "./ImpCartao";
import Locker from "./Locker";
import Massivo from "./Massivo";
import Mobile from "./Mobile";
import OnBoarding from "./OnBoarding";
import PC from "./PC";
import PDV from "./PDV";
import Scanner from "./Scanner";
import Senha from "./Senha";
import Sicc from "./Sicc";
import Tv from "./Tv";
import Webcam from "./Webcam";

export default function Rout (){

    return<>
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
        <Route path='/FilServer' element={<Filserver/>}/>
        <Route path='/Sicc' element={<Sicc/>}/>

        </Routes>
    </>
}