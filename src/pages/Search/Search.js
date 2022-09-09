// Router Dom 
import { Link } from "react-router-dom";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

// components
import PostDetail from "../../components/PostDetail/PostDetail";
import NavBar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"


//Styled
import { Section, Container, H1} from "../Search/Styled";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");


  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <>
    <NavBar/>
    <Section>
      <Container>
      <H1>Resultados encontrados para: {search}</H1>
      <div>
        {posts && posts.length === 0 && (
          <>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/">
              Voltar
            </Link>
          </>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
      </Container>
    </Section>
    <Footer/>
    </>
  );
};

export default Search;
