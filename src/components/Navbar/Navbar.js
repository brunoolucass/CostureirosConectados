// Router Dom
import { NavLink } from "react-router-dom"

// Components Styled
import { Button, Container, Nav, Ul,Li, Img, ImgIcon, LogoIcon } from "./Styled"

import { useAuthentication } from "../../hooks/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";

// Icons
import HomeIcon from "../../assets/icons/home.png"
import Add from "../../assets/icons/add.png"
import Dashboard from "../../assets/icons/dashboard.png"
import About from "../../assets/icons/about.png"
import Logout from "../../assets/icons/logout.png"
import Login from "../../assets/icons/login.png"
import Register from "../../assets/icons/register.png"


// Images
import logo from "../../assets/images/logo.png"
import logoIcon from "../../assets/images/logo-icon.png"

function Navbar() {
  const { logout } = useAuthentication();
  const { user } = useAuthValue();

  return (
    <Nav translate="no">
      <Container>
      <NavLink to="/">
         <Img src={logo} alt="logo-img" width="500px" />
         <LogoIcon src={logoIcon} alt="logo-img" width="50px" />
      </NavLink>  
    <Ul>
    <NavLink to="/">
      <Li> 
        <span> <ImgIcon src={HomeIcon} alt="HomeIcon" width="24px" /></span> 
        Inicio  
        </Li>
    </NavLink>
      {!user && (
      <>  
      <NavLink to="/login">
          <Li> 
          <span> <ImgIcon src={Login} alt="Login" width="24px" /></span>  
          Entrar 
          </Li>
        </NavLink> 
      <NavLink to="/register">
          <Li> <span> <ImgIcon src={Register} alt="Register" width="24px" /></span>  
          Registrar 
          </Li>
      </NavLink> 
      </>)}
      {user && ( <>
        <NavLink to="/posts/create">
          <Li> 
            <span> <ImgIcon src={Add} alt="Add Post" width="24px" /></span>  
            Novo Post 
          </Li>
        </NavLink> 

        <NavLink to="/dashboard">
        <Li> 
          <span> <ImgIcon src={Dashboard} alt="dashboard" width="24px" /></span>  
           Dashboard 
          </Li>
        </NavLink> 
        </>)}

      <NavLink to="/about">
      <Li> 
      <span> <ImgIcon src={About} alt="About" width="24px" to="/about"/></span> 
       Sobre  
       </Li>
       </NavLink>
      {user && (
          <Li> 
           <span > <ImgIcon src={Logout} alt="Logout" width="24px" /> </span> 
            <Button onClick={logout}>Sair</Button>
          </Li>)}
    </Ul>
    </Container>
    </Nav>
  )
}

export default Navbar