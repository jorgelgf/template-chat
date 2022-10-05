import * as S from './styles'
interface PropsButton{
    children: string
    style:string
    color:string
    onClick?:()=>void
}
export const Button = ({children, style,color,onClick}:PropsButton)=>{

return<S.Button  onClick={onClick}style={{backgroundColor:`${style}`, color: `${color}`}}>{children}</S.Button>
}