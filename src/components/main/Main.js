import { TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import "./Main.css";
import Post from "./post/Post";
import { db } from "../../firebase";
import firebase from "firebase";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState({
    title: "",
    text: "",
  });

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.text) {
      db.collection("posts").add({
        title: input.title,
        text: input.text,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput({
        title: "",
        text: "",
      });
      console.log(posts);
    } else {
      alert("No title or text");
    }
  };
  return (
    <div className="main">
      <div className="main__input">
        <form noValidate autoComplete="off">
          <div className="main__inputForm">
            <TextField
              id="standard-basic"
              label="Title"
              value={input.title}
              onChange={(e) => setInput({ ...input, title: e.target.value })}
            />
            <TextField
              className="main__inputFormText"
              id="outlined-basic"
              label="Enter your post here"
              variant="outlined"
              value={input.text}
              onChange={(e) => setInput({ ...input, text: e.target.value })}
            />
          </div>
          <button
            className="button"
            type="submit"
            onClick={handleSubmit}
          ></button>
        </form>
      </div>
      <div className="main__post">
        {posts.map(({ id, data: { title, text } }) => (
          <Post title={title} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Main;
