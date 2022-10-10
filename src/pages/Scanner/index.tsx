
import { ButtonBack } from '../../components/button/ButtonBack';
import { Header } from '../../components/header';
import { HeaderItem } from '../../components/header/HeaderItem';
import { items } from '../../services/items';
import * as S from './styles'

export default function Scanner(){
    const item = items[4]
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

   
    </S.Container>
    </>
}