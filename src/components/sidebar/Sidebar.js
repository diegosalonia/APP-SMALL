import { useStateValue } from "../../Stateprovider";
import "./Sidebar.css";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h4>City Name</h4>
        <p>Imagen Nubes</p>
        <h1>Temp ºC</h1>
      </div>
      <div className="sidebar__bottom">
        <h4>Welcome</h4>
        <h4>{user?.displayName} </h4>
      </div>
    </div>
  );
};

export default Sidebar;
