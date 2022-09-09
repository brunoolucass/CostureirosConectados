import styled from "styled-components"

// hooks
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useParams } from "react-router-dom";
import { Container, Section, DivTags, DivImg, P, H1 } from "./styled";

// Components 
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  return (
    <>
    <Navbar/>
    <Section>
      <Container>
      {post && (
        <>
          <H1>{post.title}</H1>
          <DivImg>
            <img src={post.image} alt={post.title} width="100%" height="100%" />
          </DivImg>
            <P>{post.body}</P>
            <h3>Este post trata sobre:</h3>
          <DivTags>
            {post.tags.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </DivTags>
        </>
      )}
      </Container>
    </Section>
    <Footer/>
    </>
  );
};

export default Post;
