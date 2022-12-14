
import { ButtonBack } from '../../components/button/ButtonBack';
import { Header } from '../../components/header';
import { HeaderItem } from '../../components/header/HeaderItem';
import { items } from '../../services/items';
import onboarding from '../../img/onboarding.png'
import * as S from './styles'

export default function OnBoarding(){
    const item = items[8]
    const name = item.nameItem as string;

//item.values.map((p,i)=>console.log('Index: ',i, 'Value: ',p))

    return<>

     
    <S.Container>
    <Header>TEMPLATE CHABOT</Header>
    <ButtonBack/>

     <HeaderItem children={name}/> 
<S.DivElement>
{item.values?.map((name,index)=>{
    return<div key={index}>
        <p>{name.header}</p>
        <article>{name.text}</article>

    </div>
})}
  

  </S.DivElement>

   <S.DivInfo>INFORMAÇÕES P/ DIRECIONAMENTO
<img src ={onboarding} alt='onboarding redirect'/>

Clique <a href='https://riachuelo.atlassian.net/wiki/spaces/SD/pages/1840152581/Sistema+Loja+-+Cadastros+e+Propostas+Onboarding+-+Trobleshooting' target='_blank' rel="noreferrer">AQUI</a> para referência.

   </S.DivInfo>
    </S.Container>
    </>
}