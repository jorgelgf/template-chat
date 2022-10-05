import { useNavigate } from "react-router-dom"
import * as S from './styles'
import img from '../../img/arrow.png'

export const ButtonBack = ()=>{


    const navigate = useNavigate()
    const handleClick= ()=>{
        navigate('/')
    }
    return<>
       <S.ButtonBack onClick={handleClick}>
        <img src={img} alt='back' /></S.ButtonBack>
    </>
    
}