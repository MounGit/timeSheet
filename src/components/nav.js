import React, { useRef, useState } from "react";

import "./manav.css";
// mes import pour fontawesome
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  const inputTextRef = useRef();
  const [name, setName] = useState("");
  const [dataIsOk, setData] = useState(false);
  return (
    <div>
      <nav id="maNav">
        <div>
          <a href="#">
            <FontAwesomeIcon icon={faHome} />
          </a>
          <a href="#">Time</a>
          <a href="#">Expenses</a>
          <a href="#">Projects</a>
          <a href="#">Team</a>
          <a href="#">Reports</a>
          <a href="#">Invoices</a>
          <a href="#">Manage</a>
        </div>

        {dataIsOk ? (
          <p className="nameConnexion">Bienvenue {name}</p>
        ) : (
          <form>
            <div className="form-line">
              <input
                ref={inputTextRef}
                placeholder="Nom utilisateur"
                type="text"
              />{" "}
              <input type="password" />{" "}
              <button
                onClick={() => {
                  setData(
                    inputTextRef.current.value != null &&
                      inputTextRef.current.value.length > 0
                  );
                  setName(inputTextRef.current.value);
                }}
              >
                Connexion
              </button>
            </div>
          </form>
        )}
      </nav>
    </div>
  );
}

export default Nav;
