import styled from "styled-components"

export const Section = styled.section `
   color: white;
   display:flex;
   flex-direction: column;
   width: 100%;
   justify-content: center;
   align-items: center;
   margin-top: 60px;
   height: 100%;
`

export const Container = styled.div `

   display:flex;
   flex-direction: column;
   text-align: center;
   width: 100%;
   max-width:700px;
   height: 650px;
  background-color: #232633;
   border-radius: 5px;
   padding: 20px;
   flex-direction: column;
   gap: 5%;

   @media (max-width: 768px) {
    max-width: 90vw;
   }
   
`

export const Button = styled.button `
width: 100px;
height: 40px;
border-radius: 5px;
border: 1px solid ;

@media (max-width: 600px) {
     width: 60px;
     
   }

`
export const TitleAction = styled.div `
   display: flex;
   justify-content: space-around;
`
export const EditDiv = styled.div `
   justify-content: space-evenly;
   display: flex;
  
`
export const ContainerButtons = styled.div `
   display: flex;
   flex-direction: column;
  
`
export const DivButtons = styled.div `
   margin-top: 10px;
   display: flex;

   @media (max-width: 425px) {
    
     flex-direction: column;
   }

  
`