import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../Stateprovider";
import "./Login.css";

const Login = () => {
  const [dispatch] = useStateValue();

  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      )
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <h1>Welcome to our blog App</h1>
      <Button variant="contained" color="primary" onClick={signin}>
        Sign In With Google
      </Button>
    </div>
  );
};

export default Login;
