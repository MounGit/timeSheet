import React, { useRef } from "react";
import "./masection.css";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Calendar} from 'react-calendar';
import { Component } from 'react';

export default class section_1 extends Component {
  constructor(props){
    super(props)
   this.refDateSpan = React.createRef();
   this.maDate = Date.now();
   this.DayNumber = new Date().getDay();
   this.DayNames = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
   this.DayName = this.DayNames[this.DayNumber];
   this.monJour = this.refDateSpan.current;
  }

  
   monLeftClick() {
      this.monJour.innerText = `${this.DayName}` 
  }

   monRightClick() {
    this.DayNumber += 1;
    // let tomorow = this.maDate;
    console.log(this.maDate.getDate());
    this.maDate.setDate(this.maDate.getDay()+1);
    // tomorow = tomorow.setDate(tomorow.getDate()+1)
    // console.log(tomorow);
    console.log(this.monJour);
    this.refDateSpan.current.innerText = `Nous sommes: ${this.DayName} ${this.maDate.getDay()}-${this.maDate.getMonth()}-${this.maDate.getFullYear()}`;
  }

   monCalendrier() {
    <Calendar />
  }

  render() {
    return (
      <div id="bigDiv">
        <div id="petiteDiv1">
          <button onClick={() => this.monLeftClick()} type="button" class="btn btn-outline-dark">
            {" "}
            <FontAwesomeIcon icon={faAngleLeft} />{" "}
          </button>
          <button onClick={() => this.monRightClick()} type="button" class="btn btn-outline-dark">
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <h2 ref={this.refDateSpan} id="mydatte">
            Aujourd'hui: {this.DayName} {this.maDate.getDay()+ 4}-{this.maDate.getMonth() + 1}-{this.maDate.getFullYear()}
          </h2>
        </div>
  
        <div id="petiteDiv2">
          <button onClick={this.monCalendrier} type="button" class="btn btn-outline-dark">
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
}


