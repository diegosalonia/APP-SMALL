import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, Button, Switch } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../Stateprovider";
import logo from "../../assets/logo.png";
import { auth } from "../../firebase";

const Header = () => {
  const [{ isOpen, user }, dispatch] = useStateValue();
  const signOut = () => {
    auth.signOut().then((user) =>
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      })
    );
  };
  const toggleMenu = () => {
    dispatch({
      type: actionTypes.TOGGLE_MENU,
      isOpen: !isOpen,
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton onClick={toggleMenu}>
          <MenuIcon fontSize="large" />
        </IconButton>
        <img src={logo} alt="" />
      </div>
      <div className="header__right">
        <Avatar src={user?.photoURL} />
        <Switch />
        {user && (
          <Button onClick={signOut} variant="contained">
            Sign Out
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
