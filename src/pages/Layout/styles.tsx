import styled from "styled-components";
import { themes } from "../../styles/themes";

export const DivLayout = styled.div`
margin-left: 50px;
height: auto;
width: auto;
display:flex;
flex-direction: column;
transform: translateY(10px);
animation: animeUp 0.4s forwards;
@keyframes animeUp {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`


//layoutItem
export const DivFull = styled.div`
//border: solid white 1px;
min-height: 100vh;
width:100%;
display: flex;
flex-direction: column;

transform: translateY(10px);
animation: animeUp 0.4s forwards;
@keyframes animeUp {
    to {
      opacity: 1;
      transform: initial;
    }
  }



button{
    background-color: transparent;
    border: none;
    display: flex;
img{
width: 45px;
height: 45px;
padding-left: 56px;
margin-bottom: 45px;
cursor:pointer;}

}
`
export const HeaderItem = styled.div`
width: 100%;
height: 90px;
color: ${themes.bgColor};
background-color: ${themes.ColorHeaderItem} ;
display: flex;
align-items: center;
font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 57px;
padding-left: 56px;

`
export const DivElement = styled.div`
display:flex;`
    

export const DivColum  = styled.section`
padding-left: 56px;
width: 50%;
height: 100vh;
p{
font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: ${themes.ColorHeaderItem};
margin-bottom: 11px;

}

article{
display: flex;
width: 100%;
color:#fff
}
`

