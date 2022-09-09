// Hooks
import { useState } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";

// React Router Dom
import { useNavigate } from "react-router-dom";

// Contexts
import { useAuthValue } from "../../context/AuthContext";

// Components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

// Styled Component
import { Container, Form, Section, H2, Button, TextArea, Input} from "./Styled";

// Icons
import AddIcon from "../../assets/images/add-icon.png"


const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validate image
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    
    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check values
    if (!title || !image || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if(formError) return

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect to home page
    navigate("/");
  };

  return (
    <>
    <Navbar/>
    <Section>
      <Container>
      <H2>Criar post</H2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <Form onSubmit={handleSubmit}> 

          <Input
            type="text"
            name="text"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <TextArea
            name="body"
            required
            style={{width:"100%"}}
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></TextArea>
      
          <Input
            type="text"
            name="image"
            required
            placeholder="Insira a URL da imagem"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
       
       
          <Input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
       

        {!response.loading &&  
          <Button> <span>  <img src={AddIcon} alt="add-icon" width="24px" /> </span> Criar post!</Button>}
        {response.loading && (
          <button disabled>
            Aguarde.. .
          </button>
        )}
        {(response.error || formError) && (
          <p>{response.error || formError}</p>
        )}
      </Form>
      </Container>
    </Section>
    <Footer/>
    </>
  );
};

export default CreatePost;
