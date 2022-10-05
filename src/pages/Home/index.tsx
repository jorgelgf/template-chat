import * as S from './styles'
import { Button } from '../../components/button'
import { Header } from '../../components/header'
import { themes } from '../../styles/themes'
import Layout from '../Layout'
import  {useNavigate}  from "react-router";


export default function Home(){
    const navigation = useNavigate();



    const handleClickHi = ()=>  navigation('/hibye')

    const handleClickHiPDV =()=> navigation('/pdv')

return(<S.Container>
   <Header>TEMPLATE CHABOT</Header>

<Layout>
  <div>
  <Button style={themes.colorButtonHi} onClick={handleClickHi} color={themes.colorTexBottom}>HI/Bye</Button>
  </div>

  <S.DivTitle>PDV - MOBILE</S.DivTitle>  <div>
  <Button style={themes.ColorButtonPDV} onClick={handleClickHiPDV}color={themes.colorTexBottom} >PDV</Button>
  <Button style={themes.ColorButtonMobile} color={themes.colorTexBottom}>PDV MOBILE</Button>
  </div>

  <S.DivTitle>PC - SCANNER - IMP RELATÓRIO</S.DivTitle>  <div>
  <Button style={themes.ColorButtonPC} color={themes.colorTexBottom}>PC</Button>
  <Button style={themes.ColorButtonScanner} color={themes.colorTexBottom}>SCANNER</Button>
  <Button style={themes.ColorButtonImpR} color={themes.colorTexBottom}>IMP RELATÓRIO</Button>
  </div>

  <S.DivTitle>PC - IMP ETIQUETAS - IMP CARTÃO</S.DivTitle>  <div>
  <Button style={themes.ColorButtonImpElpr} color={themes.colorTexBottom}>IMP ETIQUETAS</Button>
  <Button style={themes.ColorButtonImpc} color={themes.colorTexBottom}>IMP CARTÃO</Button>
  </div>

  <S.DivTitle>SERVER - FILESERVER</S.DivTitle>  <div>
  <Button style={themes.ColorButtonServer} color={themes.ColorTextServer}>SERVER</Button>
  <Button style={themes.ColorButtonFileServer} color={themes.ColorButtonTextFileserver}>FILESERVER</Button>
  </div>


</Layout>

</S.Container>)

}