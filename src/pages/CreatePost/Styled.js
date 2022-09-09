import styled from "styled-components";

export const Section = styled.section `
   color: white;
   display:flex;
   width: 100%;
   height: 90vh;
   justify-content: center;
   align-items: center;

   
`

export const Container = styled.div `

   display:flex;
   flex-direction: column;
   text-align: center;
   width: 100%;
   height: 100%;
   max-width:800px;
   height: 650px;
   background-color: #232633;
   border-radius: 5px;
   padding: 20px;
   flex-direction: column;

   @media (max-width: 768px) {
    max-width: 90vw;
   }
   
`

export const Form = styled.form `
    
    width:100%;
    display: flex;
    gap: 5%;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    margin-top: 40px;

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

    @media (max-width: 375px) {
     width: 250px;
     text-align: center;
   }
`

export const H2 = styled.h2 `
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: solid 1px;

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
    font-size:1rem;
    font-weight: 450;
    cursor: pointer;
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
`