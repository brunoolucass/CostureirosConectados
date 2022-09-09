//  React Router Dom
import { Link } from 'react-router-dom'

//Styled Components 
import { Button, Div, P } from './Styled'

// Components 
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
// Icons
import AddIcon from "../../assets/images/add-icon.png"


function About() {
  return (
    <>
    <Navbar/>
    <Div translate='no'>
      <P>Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end. A ideia do nome "Costureiros Conectados" provém do dia a dia dos meu pais, que assim como milhares 
        de brasileiros, tem seu "ganha pão" através da costura. Por várias vezes presenciei eles assistindo vídeos e postagens
        em redes sociais sobre costura e do mundo da moda. Foi então, que tive a ideia de criar um blog focado em usuários que
        trabalham ou que se interessam por costura e pela moda, para compartilharem seus projetos e conhecimentos.
        </P> 
        <Link to="/posts/create"> <Button> <span>  <img src={AddIcon} alt="add-icon" width="24px" /> </span>Criar Post </Button></Link>
    </Div>
    <Footer/>
    </>
  )
}

export default About