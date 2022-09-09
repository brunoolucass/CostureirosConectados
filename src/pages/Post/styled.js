import styled from "styled-components";

export const Section = styled.section `
   color: white;
   display:flex;
   width: 100%;
   height: 90%;
   justify-content: center;
   align-items: center;
   margin-top: 40px;
`

export const Container = styled.div `

   display:flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   width: 500px;
   background-color: #232633;
   border-radius: 5px;
   padding: 20px;
   flex-direction: column;
   gap: 4%;

   @media (max-width: 516px) {
    width: 95vw;
   }
   @media (max-width: 1024px) {
    
   }
   
`

export const DivTags = styled.div `
 display: flex;
 flex-direction: row;

`
export const P = styled.p `
 margin-bottom: 15px;
 margin-top: 15px;

`
export const H1 = styled.h1 `
 text-align: center;

`
export const DivImg = styled.div `
    width: 400px;
    margin-bottom: 10px;
    margin-top: 10px;
  

    @media (max-width: 516px) {
    width: 280px;
   }
   @media (max-width: 1024px) {
    width: 300px;
   }

`