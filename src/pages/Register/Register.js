// react
import {useState, useEffect} from 'react'

// components
import Navbar from '../../components/Navbar/Navbar'
import { useAuthentication } from '../../hooks/useAuthentication';
import { Button, Container, Div, Form, Input, Section, H1, P } from './Styled'

// Icons 
import registerIcon from "../../assets/images/register-icon.png"


const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]); 

  return (
    <>
    <Navbar/>
    <Section>
      <Container>
      <H1>Cadastre-se e conecte-se!</H1>
      <Form onSubmit={handleSubmit}>
        <Div>
          <Input
           type="text" 
           name='displayName' 
           required 
           placeholder='Nome do usuário'
           value={displayName}
           onChange={(event) => setDisplayName(event.target.value)}
           />
          <Input 
          type="email" 
          name='email' 
          required 
          placeholder='E-mail do usuário'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />
        </Div>
        <Div>
          <Input 
          type="password" 
          name='password' 
          required 
          placeholder='Insira a sua senha'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          />
          <Input 
          type="password" 
          name='confirmPassword' 
          required 
          placeholder='Confirme a sua senha'
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </Div>
        {!loading && <Button> <span>  <img src={registerIcon} alt="registe-icon" width="24px" /> </span> Cadastrar </Button>}
        {loading && (
          <Button disabled>Aguarde...</Button>
        )}
        
        {error && <P> {error} </P>}
      </Form>
      
      </Container>
      </Section>
    </>
  )
}

export default Register