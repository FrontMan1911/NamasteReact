import { HEADERLOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {
  const [btnname, setbtnname] = useState("login");
  return (
    <div className="appHeadername" id="appHeaderId">
      <div className="logo-container" id="logo-containerid">
        <img className="imageclassname" id="imageId" src={HEADERLOGO_URL} />
      </div>
      <div className="navlistcontainer">
        <ul>
          <li>
            <Link to={"/Home"}>Home</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
          <li>cart</li>
          <li
            onClick={() => {
              btnname === "login" ? setbtnname("logout") : setbtnname("login");
            }}
          >
            {btnname}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
