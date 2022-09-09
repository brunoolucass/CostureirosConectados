// STYLED COMPONENTS
import styled from "styled-components";

export const Div = styled.div `
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  height: 90%;

`

export const P = styled.p `
  font-size: 1.5rem;
  color: white;
  margin-bottom: 2em;
  max-width: 1000px;
  background-color: #383a4c;
  border-radius: 5px;
  padding: 25px;
  box-sizing: content-box;

  @media (max-width: 1024px) {
    max-width: 85vw;
   }

   @media (max-width: 768px) {
    font-size: 1rem;
   }
`

export const Button =styled.a`
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

    @media (max-width: 768px) {
    width: 130px;
   }
 
`