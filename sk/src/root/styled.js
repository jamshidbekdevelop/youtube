import styled from 'styled-components'

export const Moc =styled.div`
display: flex;
width: 100%;
flex-direction:  ${({flex})=>!flex && 'column' };
`