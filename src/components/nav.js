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
          <a href="#">Home</a>
          <a href="#">Timesheet</a>
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
                required
              />{" "}
              <input type="password" required />{" "}
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
