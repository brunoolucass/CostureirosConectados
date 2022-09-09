// styled-components
import { Section, ContainerSection, H1, Form, Button, Input, ButtonCreatePost, P  } from "./Styled";

// images 
import search from "../../assets/images/search-icon.png"

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";

// react
import { useState } from "react";

// components
import PostDetail from "../../components/PostDetail/PostDetail";
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'



const Home = () => {
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  console.log(loading);

  return (
    <>
      <Navbar/>
      <Section>
      <ContainerSection>
      <H1>Veja os nossos posts mais recentes</H1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button> <span> <img src={search} alt="search-icon" width="24px"/></span></Button>
      </Form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div>
            <P>Não foram encontrados posts</P>
            <Link to="/posts/create">
              <ButtonCreatePost> Criar primeiro post </ButtonCreatePost>
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </ContainerSection>
    </Section>
        <Footer/>
        </>
  )
}

export default Home