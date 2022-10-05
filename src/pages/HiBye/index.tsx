
import { ButtonBack } from "../../components/button/ButtonBack";
import { Header } from "../../components/header";
import { HeaderItem } from "../../components/header/HeaderItem";
import { items } from "../../services/items";
import * as S from './styles'
export default function HiBye (){
   
   const item = (items[0].values)
   item?.map((id,ind)=>console.log(id.header))

    return<>

    <S.Container>
    <Header>TEMPLATE CHABOT</Header>
    <ButtonBack/>
       <HeaderItem children={'HI/BYE'}/>


       <S.DivElement>
       {item?.map((name,index)=>{
         return(
         <div key={index}>
                <p>{name.header}</p>
                <article>{name.text}</article>
        </div>)

       })}

 
  </S.DivElement>    </S.Container>
    </>

}