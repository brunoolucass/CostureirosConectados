import styled from "styled-components";

export const Div = styled.div`
    width: 600px;
    min-height: 500px;
    margin: 0 auto;
    background-color: #1b1e28;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 620px) {
    width: 85vw;
   
   }

`

export const DivTags = styled.div`
    display: flex;
   flex-direction: row;
    margin-bottom: 10px;
  
`
export const DivImg = styled.div`
    max-width: 400px;
    max-height: 600px;
    margin-bottom: 20px;
    margin-top: 20px;

    @media (max-width: 620px) {
    width: 250px;
   }
   @media (max-width: 1024px) {
    width: 300px;
   }
  
`
export const P = styled.p`
    font-style: italic;
  
`

export const Button = styled.button `
    width: 150px;
    height: 40px;
    border-radius: 5px;
    background-color: #383a4c;
    color: white;
    font-size:1rem;
    cursor: pointer;
    margin-top: 10px;
    @media (max-width: 425px) {
    width: 70px;
}
    
    `
