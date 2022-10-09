
import { ButtonBack } from '../../components/button/ButtonBack';
import { Header } from '../../components/header';
import { HeaderItem } from '../../components/header/HeaderItem';
import { items } from '../../services/items';
import * as S from './styles'

export default function Massivo(){
    const item = items[11]
    const name = item.nameItem as string;
    return<>

     
    <S.Container>
    <Header>TEMPLATE CHABOT</Header>
    <ButtonBack/>

     <HeaderItem children={name}/> 
<S.DivElement>

<p>Estamos com um problema sistêmico geral, este erro está impactando diversos sistemas (chamado geral: )</p>

<p>Já atrelei o chamado da loja ao evento massivo.</p>

<p>A equipe responsável já foi sinalizada.</p>
<p>Neste caso, a loja terá que aguardar a tratativa do time que já está atuando para a solução do problema ocorrido.</p>

<p>Vou finalizar o atendimento por aqui. Qualquer outra eventualidade só nos contatar via chatbot. Um abraço e bom trabalho pra ti </p> 
 
  </S.DivElement>

   
    </S.Container>
    </>
}