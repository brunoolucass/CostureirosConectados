// STYLED COMPONENTS
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
`

export const H1 = styled.h1`
    margin-bottom: 2em;
`
export const Form = styled.form`
    margin-bottom: 2em;
    font-size: 1rem;
`
export const P = styled.p`
    margin-bottom: 20px;
`

export const Button = styled.button`
    background-color: #1b1e28;
    width: 40px;
    height: 40px;
    border-radius: 30px; 
    border: none;
    margin-left: 10px;

 
`
export const ButtonCreatePost = styled.button`
   
    width: 200px;
    margin: 0 auto;
    height: 50px;
    border-radius: 5px;
    border: none;
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:1rem;
    font-weight: 450;
    

 
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

    @media (max-width: 425px) {
    width: 200px;
}
`

