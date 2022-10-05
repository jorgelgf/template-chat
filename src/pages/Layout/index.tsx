import {ReactNode}from 'react'
import * as S from './styles'
interface PropsLayout{
children: ReactNode
}

export default function Layout({children}:PropsLayout){
    return(<S.DivLayout>{children}
    
    </S.DivLayout>)
    
    }