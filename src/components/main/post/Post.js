import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "../../../Stateprovider";
import "./Post.css";
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


const Post = ({ title, text }) => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="post">
      <div className="post__body">
        <div className="post__bodyLeft">
          <Avatar className="avatar" src={user?.photoURL}/>
          <h1>{title}</h1>
          <h4>{text}</h4>
        </div>
        <IconButton>
            <DeleteIcon />
        </IconButton>
      </div>
      <ThumbUpIcon />
    </div>
  );
};

export default Post;
