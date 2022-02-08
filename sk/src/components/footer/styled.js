import styled from "styled-components";


export const Box =styled.div`
display: flex;
width: 100%;
height: 600px;
padding-left: 35px;
box-sizing: border-box;
background-color: yellow;
flex-wrap: wrap;
overflow-y: scroll;
gap: 16px;
`
Box.K=styled.div`
min-width: 300px;
/* width: 300px; */
height: 300px;
max-width: 400px;
background-color: yellowgreen;
`
Box.Img=styled.div`
width: 100%;
height: 190px;
background-color: red;
`
Box.D=styled.div`
display: flex;
margin-top: 12px;
`
Box.I=styled.div`
background-color: blue;
width: 40px;
height: 40px;
border-radius: 50%;
margin-right: 12px;
`
Box.T=styled.h1`
padding: 0;
margin: 0;
font-size: 18px;
color: black;
`
Box.N=styled.h1`
padding: 0;
margin: 0;
font-size: 16px;
font-weight: 600;
color: black;
`
Box.V=styled.h1`
padding: 0;
margin: 0;
font-size: 16px;
font-weight: 600;
color: black;
`