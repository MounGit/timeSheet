import React from "react";
import "./masection.css";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Section1() {
  let maDate = new Date();
  let DayNumber = new Date().getDay() - 1;
  let DayNames = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  let DayName = DayNames[DayNumber];
  return (
    <div id="bigDiv">
      <div id="petiteDiv1">
        <button type="button" class="btn btn-outline-dark">
          {" "}
          <FontAwesomeIcon icon={faAngleLeft} />{" "}
        </button>
        <button type="button" class="btn btn-outline-dark">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <h2>
          Aujourd'hui: {DayName}, {maDate.getMonth() + 1} {maDate.getFullYear()}
        </h2>
      </div>

      <div id="petiteDiv2">
        <button type="button" class="btn btn-outline-dark">
          <FontAwesomeIcon icon={faCalendarCheck} />
        </button>
        <button type="button" class="btn btn-outline-dark">
          Day
        </button>
        <button type="button" class="btn btn-outline-dark">
          Week
        </button>
        <div class="dropdown">
          <a
            class="btn btn-secondary dropdown-toggle bg-light text-dark"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Teammates
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section1;
