import styled from "styled-components";

 export const Container = styled.div`
 width: 100%;
 height: auto;

transform: translateY(10px);
animation: animeUp 0.4s forwards;
@keyframes animeUp {
    to {
      opacity: 1;
      transform: initial;
    }
  }

 `
export const DivTitle = styled.div`
font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 40px;
color: #E3DBF3;
margin: 30px  0 16px 0;
`
