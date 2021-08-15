import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./Main.css";
import Post from "./post/Post";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState({
    title: "",
    text: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.title && input.text) {
        setPosts([input, ...posts])
        setInput({ 
            title: "",
            text: ""
        })
        console.log(posts)        
    } else {
        alert("No title or text")
    }
  }
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
          <button type="submit" onClick={handleSubmit}></button>
        </form>
      </div>
      <div className="main__post">
        {
            posts.map(({title, text})=> <Post title={title} text={text}/>)
        }
      </div>
    </div>
  );
};

export default Main;
