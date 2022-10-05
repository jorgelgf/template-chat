import * as S from './styles'

interface PropsHeader{
    children: string
}
export const Header = ({children}:PropsHeader)=>{

    return<S.HeaderContainer><header>{children}</header></S.HeaderContainer>
    }