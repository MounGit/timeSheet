import React, { Component } from "react";
import "./FormTask.css";
export default class FormTask extends Component {
  render() {
    return (
      <div className="FormTask">
        <div className="container_form">
          <div className="header_form">
            <h3>Editer L'entrée de la timeSheet</h3>{" "}
            <p>date du jour de la tâche</p>
          </div>

          <div className="content_FormTask">
            <form>
              <div className="formTask-line">
                <label>Titre de la tâche</label>
                <textarea rows="3" cols="70"></textarea>
              </div>

              <div className="formTask-line">
                <label>Description de la tâche</label>
                <div className="container_timer">
                  <textarea rows="3" cols="70"></textarea>
                  {/* <input type="text" /> */}
                  <input text="text" placeholder="Edit timer" />
                </div>
              </div>
            </form>
            <div className="container_btnFormTask">
              <div>
                {" "}
                <button>Submit</button> <button>Cancel</button>
              </div>{" "}
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
