import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "../../../Stateprovider";
import "./Post.css";
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { db } from "../../../firebase";
import { forwardRef } from "react";


const Post = forwardRef(({ id, title, text, isRed, username, avatar }, ref) => {
  const [{ user }, dispatch] = useStateValue();

  const removePost = () => {
    db.collection("posts").doc(id).delete()
  }

  const likePost = () => {
    const likedPost = db.collection("posts").doc(id)
    likedPost.get().then(doc => likedPost.update({ 
      isRed: !doc.data().isRed
    }))
  }
  return (
    <div className="post" ref={ref}>
      <div className="post__body">
        <div className="post__bodyLeft">
          <Avatar className="avatar" src={avatar}/>
          <h3>{title}</h3>
          <h4>{text}</h4>
        </div>
        <IconButton onClick={removePost} >
            <DeleteIcon />
        </IconButton>
      </div>
      <div className="post__icons">
      <IconButton onClick={likePost}>
        <ThumbUpIcon color={isRed ? 'secondary' : ''} />
      </IconButton>
      {username}
      </div>
    </div>
  );
});

export default Post;
