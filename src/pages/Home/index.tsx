import * as S from './styles'
import { Button } from '../../components/button'
import { Header } from '../../components/header'
import { themes } from '../../styles/themes'
import Layout from '../Layout'
import  {useNavigate}  from "react-router";


export default function Home(){
    const navigation = useNavigate();

    const handleClickHi =()=>  navigation('/hibye')
    const handleClickPDV =()=> navigation('/pdv')
    const handleClickMobile =()=> navigation('/mobile')
    const handleClickPc =()=> navigation('/pc')
    const handleClickScanner =()=> navigation('/scanner')
    const handleClickImpR =()=> navigation('/impr')
    const handleClickEt =()=> navigation('/impet')
    const handleClickCa =()=> navigation('/impcart')
    const handleClickOnBoarding =()=> navigation('/onboarding')
    const handleClickOnSenha =()=> navigation('/senha')
    const handleClickWeb =()=> navigation('/webcam')
    const handleClickMassivo =()=> navigation('/massivo')
    const handleClickLocker =()=> navigation('/Locker')
    const handleClickTv =()=> navigation('/Tv')
    const handleClickFilServer =()=> navigation('/FilServer')
    const handleClickFilSicc =()=> navigation('/Sicc')
    const handleClickPinMobile =()=> navigation('/PinMobile')
    const handleClickPinPdv =()=> navigation('/PinPDv')
    const handleClickFiltro =()=> navigation('/Filtro')
    const handleClickOutlook =()=> navigation('/Outlook')

return(<S.Container>
   <Header>TEMPLATE CHABOT</Header>

<Layout>
  <div>
  <Button style={themes.colorButtonHi} onClick={handleClickHi} color={themes.colorTexBottom}>HI/Bye</Button>
  <Button style={themes.colorButtonFiltro} onClick={handleClickFiltro} color={themes.colorTexBottom}>FILTRO</Button>
  </div>

  <S.DivTitle>PDV - MOBILE - PINPADs</S.DivTitle>  <div>
  <Button style={themes.ColorButtonPDV} onClick={handleClickPDV}color={themes.colorTexBottom} >PDV</Button>
  <Button style={themes.ColorButtonPinPdv} onClick={handleClickPinPdv}color={themes.colorTexBottom} >PIN PDV</Button>
  <Button style={themes.ColorButtonMobile}  onClick={handleClickMobile} color={themes.colorTexBottom}>PDV MOBILE</Button>
  <Button style={themes.ColorButtonPinMobile}  onClick={handleClickPinMobile} color={themes.colorTexBottom}>PIN MOBILE</Button>  
  </div>

  <S.DivTitle>PC - SCANNER - IMP RELAT??RIO - WEBCAM</S.DivTitle>  <div>
  <Button style={themes.ColorButtonPC} onClick={handleClickPc} color={themes.colorTexBottom}>PC</Button>
  <Button style={themes.ColorButtonScanner} onClick={handleClickWeb} color={themes.colorTexBottom}>WEBCAM</Button>

  <Button style={themes.ColorButtonScanner} onClick={handleClickScanner}color={themes.colorTexBottom}>SCANNER</Button>
  <Button style={themes.ColorButtonImpR}  onClick={handleClickImpR} color={themes.colorTexBottom}>IMP RELAT??RIO</Button>
  </div>

  <S.DivTitle>PC - IMP ETIQUETAS - IMP CART??O</S.DivTitle>  <div>
  <Button style={themes.ColorButtonImpElpr}  onClick={handleClickEt}color={themes.colorTexBottom}>IMP ETIQUETAS</Button>
  <Button style={themes.ColorButtonImpc} onClick={handleClickCa}color={themes.colorTexBottom}>IMP CART??O</Button>
  </div>

  <S.DivTitle>ONBOARDING - SICC - SENHA - LOCKER</S.DivTitle>  <div>
  <Button style={themes.ColorButtonOnboarding} onClick={handleClickOnBoarding} color={themes.colorTexBottom}>ONBOARDING</Button>
  <Button style={themes.ColorButtonSicc} onClick={handleClickFilSicc} color={themes.colorTexBottom}>SICC</Button>
  <Button style={themes.ColorButtonSenha} onClick={handleClickOnSenha} color={themes.colorTexBottom}>SENHA</Button>
  <Button style={themes.ColorButtonLocker} onClick={handleClickLocker} color={themes.colorTexBottom}>LOCKER</Button>
  </div>
 
  <S.DivTitle>SERVER - FILESERVER - MASSIVO - TV</S.DivTitle>  <div>
  <Button style={themes.ColorButtonServer}  color={themes.ColorTextServer}>SERVER</Button>
  <Button style={themes.ColorButtonFileServer} onClick={handleClickFilServer} color={themes.ColorButtonTextFileserver}>FILESERVER</Button>
  <Button style={themes.ColorButtonMassivo} onClick={handleClickMassivo} color={themes.bgColor}>MASSIVO</Button>
  <Button style={themes.ColorButtonTv} onClick={handleClickTv}color={themes.ColorTextServer}>TV</Button>

  </div>

  <S.DivTitle>APPS</S.DivTitle>  <div>

  <Button style={themes.ColorButtonTextOutlook} onClick={handleClickOutlook}  color={themes.colorTexBottom}>OUTLOOK</Button>
  </div>



</Layout>

</S.Container>)

}