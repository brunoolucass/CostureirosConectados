import styled from "styled-components";


export const Section = styled.section `
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const ContainerSection = styled.div `
    width: 100%;
    max-width: 1100px;
    background-color: #232633;
    text-align: center;
    margin-top: 40px;
    padding-top: 40px;
    border-radius: 5px;
    height: 700px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    gap: 2%;

    @media (max-width: 1024px) {
     max-width: 95vw;
   }
`

export const DivImg = styled.div`
    width: 300px;
    @media (max-width: 768px) {
     width: 200px;
   }

   @media (max-width: 425px) {
     width: 100px;
     font-size: 12;
   }
`
export const Form = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 5%;
   resize: none;
`
export const ContainerForm = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   width: 100%;
   margin-top: 50px;
`

export const Input = styled.input`
    background-color: #1b1e28;
    padding: 20px;
    border: none;
    border-radius: 5px;
    width: 350px;
    height: 40px;
    font-size: 1rem;
    color: white;

    @media (max-width: 768px) {
     width: 200px;
   }
    @media (max-width: 425px) {
     width: 150px;
     font-size: 12px;
   }
`
export const Button = styled.button `
    margin-top: 20px;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: white;
    color: black;
    font-size:1rem;
    font-weight: 450;
    margin: 0 auto;

    @media (max-width: 425px) {
     width: 100px;
     
   }
    `

export const TextArea = styled.textarea `
max-width: 100%;
 max-height: 100%;
 height: 250px;
 padding: 20px;
 font-size: 1rem;
 color: black;
 border-radius: 5px;
 resize: none;
 border: none;

 @media (max-width: 768px) {
     width: 200px;
   }

   @media (max-width: 425px) {
     width: 150px;
     font-size: 12px;
   }
`




