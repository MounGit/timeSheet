import React, { useRef, useState } from "react";
import "./manav.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';

function Nav() {
  const inputTextRef = useRef();
  const [name, setName] = useState("");
  const [dataIsOk, setData] = useState(false);
  return (
    <div>
      <nav id="maNav">
        <div>

          
          <a href="/Home">
            <FontAwesomeIcon icon={faHome} />
            Home
          </a>
          <a href="/TodoList">Timesheet</a>
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
