
// Router Dom
import { Link } from "react-router-dom";

// Contexts
import { useAuthValue } from "../../context/AuthContext";

//Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

// Components
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

// Styled Components
import { Container, Section, Button, EditDiv, ContainerButtons, DivButtons,TitleModified } from "./Styled";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  // posts do usuário 

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  console.log(uid);
  console.log(posts);

  return (
    <>
    <Navbar/>
    <Section>
      <Container>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <>
          
        </>
      )}

      {posts &&
        posts.map((post) => (
          <EditDiv key={post.id}>
            <TitleModified>
            <h3> Título </h3>
            <p>{post.title}</p>
            </TitleModified>

          {/* Div buttons action, see and edit */}
            <ContainerButtons>
              
              <div>
                <h3>  Ações </h3>
              </div>
              <DivButtons>
                  <Link to={`/posts/${post.id}`}> <Button>
                    Ver </Button>
                  </Link>
                  <Link to={`/posts/edit/${post.id}`} > <Button>
                    Editar </Button>
                  </Link>
                  <Button onClick={() => deleteDocument(post.id)} style={{color:"red"}}> Excluir </Button>
              </DivButtons>
            </ContainerButtons>

          </EditDiv>
        ))}
        </Container>
    </Section>
    <Footer/>
    </>
  );
};

export default Dashboard;
