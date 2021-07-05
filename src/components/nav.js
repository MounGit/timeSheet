import React from "react";
import "./manav.css";
// mes import pour fontawesome
import { faHome } from  "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome";


function Nav() {
  return (
    <div>
      <nav id="maNav">

        <div>
          <a href=""><FontAwesomeIcon  icon={faHome}  /></a>
          <a href="">Time</a>
          <a href="">Expenses</a>
          <a href="">Projects</a>
          <a href="">Team</a>
          <a href="">Reports</a>
          <a href="">Invoices</a>
          <a href="">Manage</a>
        </div>

        <div>
          <a href="">Help</a>
          <a href="">Settings</a>
          <a href="">Calina</a>
        </div>

      </nav>
    </div>
  );
}

export default Nav;
