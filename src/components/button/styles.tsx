import styled from "styled-components";

export const Button = styled.button`
width: auto;
height: auto;
padding: 1rem 2rem;
border: none;
margin-right: 29px;
cursor: pointer;
font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
font-size: 35px;
border-radius: 5px;
transition: 0.5s ease all;

&:hover {
    filter: brightness(1.08);
  }
`;
    
export const ButtonBack = styled.button`

background-color: transparent;
  border: none;
  display: flex;
img{
width: 45px;
height: 45px;
padding-left: 56px;
margin-bottom: 45px;
cursor:pointer;}
` 




