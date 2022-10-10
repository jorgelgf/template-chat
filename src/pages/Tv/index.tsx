
import { ButtonBack } from '../../components/button/ButtonBack';
import { Header } from '../../components/header';
import { HeaderItem } from '../../components/header/HeaderItem';
import { items } from '../../services/items';
import mm from '../../img/mm.jpg'
import * as S from './styles'

export default function Tv(){
    const item = items[13]
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

  <div style={{marginTop:'40px',width:'100%',display:'flex', alignItems:'center', justifyContent:'center'}}>
  <img src ={mm} style={{borderRadius:'15px'}}alt='onboarding redirect'/>
  </div>
    </S.Container>
    </>
}