import { Link } from "react-router-dom";
import { Div, Button, DivTags, DivImg, P } from "./Styled";


const PostDetail = ({ post }) => {
  return (
    <>
    <Div className="TESTE">
      
      <h2>{post.title}</h2>
      <DivImg>
      <img src={post.image} alt="image-post" width="100%" height="100%" />
      </DivImg>

      <DivTags className="TAGS">
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </DivTags>
      <P>por: {post.createdBy}</P>
      <Link to={`/posts/${post.id}`}>
      <Button> Ler </Button>  
      </Link>
    </Div>
    </>
  );
};

export default PostDetail;
