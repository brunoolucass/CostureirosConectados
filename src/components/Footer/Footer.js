// Styled Components

// Logo-Icon

import LogoIcon from "../../assets/images/logo-icon.png"
import {FooterSection} from './Styled'

function Footer() {
  return (
    <FooterSection>
     
      <p> Costureiros Conectados &copy; 2022</p>
      <span><img src={LogoIcon} alt="Logo"  width="30px" /></span>
    </FooterSection> 
  )
}

export default Footer;