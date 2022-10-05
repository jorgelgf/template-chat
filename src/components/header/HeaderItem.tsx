import * as S from './styles'
interface PropsHeaderItem{
children:string

}
export  const HeaderItem =({children}:PropsHeaderItem)=>{

    return<> <S.HeaderItem>{children}</S.HeaderItem>
    </>

}

