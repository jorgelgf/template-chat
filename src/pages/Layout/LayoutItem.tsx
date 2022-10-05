import {ReactNode} from 'react'
import * as S from './styles'
import img from '../../img/arrow.png'
import  {useNavigate}  from "react-router";


interface PropsLayoutItem{
    children?: ReactNode
    item?:string
    subject?:string
    info?:string
}
export default function LayoutItem({item,subject,info}:PropsLayoutItem){
const navigate = useNavigate()
    const handleClick= ()=>{
        navigate('/')
    }

    return<S.DivFull>
        <button onClick={handleClick}>
        <img src={img} alt='back' /></button>
        <S.HeaderItem>{item}</S.HeaderItem>
        <S.DivElement>

        <S.DivColum><p>{subject}</p>
        <article>{info}</article></S.DivColum>
        
        </S.DivElement>
        <div></div>
        </S.DivFull>
}