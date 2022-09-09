// react
import {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar';

// components
import { useAuthentication } from '../../hooks/useAuthentication';
import { Form, Input, Div, Button, P, Container, Section, H1 } from '../Login/Styled';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    console.log(authError);
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  
  return (
    <>
    <Navbar/>
    <Section>
    <Container>
  <H1>Entrar</H1>
  <p>Faça o login para poder utilizar o sistema</p>
    <Form onSubmit={handleSubmit}>
      <Div> 
       
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
      </Div>
      {!loading && <Button> Entrar </Button>}
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

export default Login