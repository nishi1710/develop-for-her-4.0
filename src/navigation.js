// import Home from "./Home";
// import Contacts from "./Contacts";
// import Courses from "./Courses";
// import About from "./About";

import { Outlet, Link } from "react-router-dom";
import './navigation.css'

const Navigation = () => {
  return (
    <>
      <div id = "logo">
            <p id="logo-text">financia</p>
      </div>
      <div id="bar">
        <ul id="navigation">
        <li></li>
        
          <li id="list">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contacts">Contacts</Link>
          </li>
          
          {/* <li>
            <Link to="/About">About us</Link>
          </li> */}
          {/* <li id="list">
            <Link to="/Learn">Our plans</Link>
          </li> */}

          <li id="list">
            <Link to="/Accounts">Account</Link>
          </li>
          
        </ul>
        </div>
        
      <Outlet />
    </>
  )
};

export default Navigation;