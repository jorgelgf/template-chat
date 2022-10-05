import styled from "styled-components";
import { themes } from "../../styles/themes";

export const HeaderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: auto;
color: ${themes.fontColor};
header{
    margin: 25px 76px;
    font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 57px;
}
`




export const HeaderItem = styled.div`
width: auto;
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