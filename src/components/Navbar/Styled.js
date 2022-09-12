import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 10vh;
    background-color: #232633;
    box-shadow: rgba(255,255,255, .20) 0px -2px 10px 0px;
   
`

export const Container = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1024px) {
    max-width: 100vw;
   }
  
   @media (max-width: 768px) {
    max-width: 100vw;
    justify-content: space-evenly;
   }


`
export const Ul = styled.ul`
    width: 400px;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 425px) {
    font-size: 0.6rem;
   }
`

export const Span = styled.span`
    font-weight: 900;

    
`

export const Button = styled.button `
    list-style: none;
    text-decoration: none;
    list-style: none;
    color: #bbb;
    font-weight: bold;
    border: none;
    background-color: transparent;
    font-size: 1rem;
    cursor: pointer;

    @media (max-width: 768px) {
    font-size: 0.6rem;
   }
    

`
export const Li = styled.li `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60px;
    gap: 10%;


`

export const Img = styled.img `

@media (max-width: 768px) {
    display: none;
   }

`
export const ImgIcon = styled.img `

@media (max-width: 768px) {
    width: 16px;
   }

`
export const LogoIcon = styled.img `

@media (min-width: 768px) {
     display: none;
   }

   @media (max-width: 425px) {
    display: none;
   }

   @media (max-width: 425px) {
    
   }

`