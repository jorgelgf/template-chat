import styled from "styled-components";
import { themes } from "../../styles/themes";

    

export const Container = styled.div`
display: flex;
flex-direction: column;
width: auto;
height: auto;
display:flex;

transform: translateY(10px);
animation: animeUp 0.4s forwards;
@keyframes animeUp {
    to {
      opacity: 1;
      transform: initial;
    }
  }

`

export const DivElement = styled.div`
display: flex;
flex-direction: column;
padding-left: 56px;
width: 50%;

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
    }`