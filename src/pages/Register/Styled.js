import styled from "styled-components";

export const Section = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100vw;
    
`
export const Container = styled.div `
   display:flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   width: 100%;
   border-radius: 5px;
   background-color: #232633;
   max-width:800px;
   height: 600px;

   @media (max-width: 768px) {
    width: 90vw;
    height: 500px;
   }

   @media (max-width: 435px) {
   
    height: auto;

   
   }
`

export const Form = styled.form `
    
    height: 400px;
    width:100%;
    max-width:800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;

    @media (max-width: 435px) {
   
   justify-content: center;
   height: 300;

  
  }

`
export const H1 = styled.h1 `
    font-size:2rem;

    @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
   }

   @media (max-width: 435px) {
    font-size: 1.2rem;
    margin-top: 20px;
   
   }
`

export const Input = styled.input `
   height: 50px;
   width: 300px;
   padding: 10px;
   font-size:1rem;
   border: 1px solid black;
   border-radius: 5px;

   @media (max-width: 768px) {
    width: 200px;
   }

   @media (max-width: 435px) {
    width: 130px;
    height: 40px;
    font-size: 0.7rem;
   
   }
`

export const Div = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5%;
`

export const Button = styled.button `
    margin-top: 20px;
    width: 250px;
    height: 50px;
    border-radius: 5px;
    border: none;
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    font-size:1.2rem;
    font-weight: 450;
    cursor: pointer;

    @media (max-width: 768px) {
    width: 150px;
   }

   @media (max-width: 435px) {
    width: 120px;
    height: 40px;
    font-size: 0.8rem;
   
   }
    
`


export const P = styled.p `
    color: #C82323;
    
    padding: 5px;
    border-radius: 5px;
    text-align: center;
    padding: 5px;
    max-width:320px;
    margin: 0 auto;
`