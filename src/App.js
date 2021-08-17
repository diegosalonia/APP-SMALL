import React, { useEffect} from "react";
import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./Stateprovider";

const App = () => {
  const [{ isOpen, user }, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        dispatch({
          type: actionTypes.SET_USER,
          user,
        })
        console.log(user)
      }
    });
  }, [])
  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className={`app__central ${isOpen ? "displayed" : ""}`}>
          <Sidebar />
          <Main />
        </div>
      )}
    </div>
  );
};

export default App;
