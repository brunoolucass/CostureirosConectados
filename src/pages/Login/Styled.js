import styled from "styled-components";

export const Section = styled.section `

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
   justify-content: center;
   width: 100%;
   height: 100%;
   max-width:750px;
   height: 550px;
   border-radius: 5px;
   background-color: #232633;
   
   @media (max-width: 768px) {
    width: 85vw;
    height: 450px;
   }
`
export const H1 = styled.h1 `
 margin-bottom: 20px;
`
export const Form = styled.form `
    
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    margin-top: 40px;

`

export const Input = styled.input `
   height: 50px;
   width: 290px;
   padding: 10px;
   font-size:1rem;
   border: 1px solid black;
   border-radius: 5px;

   @media (max-width: 375px) {
    width: 200px;
   }

  
`

export const Div = styled.div `
   display: flex;
   justify-content:space-between;
   margin-bottom:30px;
   
`

export const Button = styled.button `
    width: 280px;
    border-radius: 5px;
    background-color: #383a4c;
    border: 1px solid;
    color: #ffff;
    font-size: 1.1em;
    cursor: pointer;
    transition: 0.3s;
    margin: 0 auto;
    padding: 10px;
    margin-top:50px;
    margin-bottom:15px;

    @media (max-width: 768px) {
    width: 130px;
   }
    
`


export const P = styled.p `
    color: #C82323;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    padding: 5px;
    border-radius: 5px;
    text-align: center;
    padding: 5px;
    max-width:320px;
    margin: 0 auto;
`