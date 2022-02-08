import styled from "styled-components";

export const Box =styled.div`
border: 2px solid wheat;
box-sizing: border-box;
border-left: none;
border-right: none;
display: flex;
height: 56px;
min-width: 100px;
width: 100%;
background-color: red;
align-items: center;
padding-left: 35px;
gap: 25px;
overflow-x: scroll;
`
Box.Button =styled.button`
height: 35px;
padding: 0px 12px;
border: 1px solid whitesmoke;
border-style: none;
background-color: wheat;
border-radius: 45%;
color: black;
cursor: pointer;
:focus{
    background-color: black;
    color: white;
}
`
Box.H1=styled.h1`
padding: 0;
margin: 0;
font-weight: 600;
font-size: 18px;
`