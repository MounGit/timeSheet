import { faClock, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Task.css";
export default class Task extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.stateTodo.tabTaskActive);
    this.spanTimerRef = React.createRef();
    this.spanRef = React.createRef();
    this.referenceTask = React.createRef();
    this.state = {
      intervalCode: 0,
      timer:
        this.props.stateTodo.tabTaskActive[this.props.IndexOfTask].timerForm,
    };
    // this.state = {
    //   intervalCode: 0,
    //   timer: { h: 0, mm: 0, s: 0, seconds: 0 },
    // };
    this.props.setStateTodo(
      this.props.IndexOfTask,
      this.props.stateTodo.submit
    );
    this.startTimer = this.startTimer.bind(this);
    this.countSeconds = this.countSeconds.bind(this);
    this.intervalCodeBis = 0;
    this.startTimer();
  }

  countSeconds() {
    let obj = {};
    // console.log("dans ma fonction count");
    let secondsCount = this.state.timer.seconds + 1;
    // console.log(secondsCount);
    obj = this.secondsToTime(secondsCount);
    this.setState({ timer: obj });
  }
  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    // console.log(`hours: ${hours}`);
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    // console.log(`minutes: ${minutes}`);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    // console.log(`secondes: ${seconds}`);
    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
      seconds: secs,
    };
    return obj;
  }
  componentDidMount() {
    let seconds = this.secondsToTime(this.state.timer.seconds);
    // console.log(`didmount:${seconds}`);
    this.setState({ timer: seconds });
  }

  componentWillUnmount() {
    this.stopBtnTimer();
    // this.props.updateTimer(this.state.timer, this.props.stateTodo);
  }
  startTimer() {
    let intervalCodetmp = setInterval(
      function () {
        this.countSeconds();
      }.bind(this),
      1000
    );
    // console.log(`start:${intervalCodetmp}`);
    this.intervalCodeBis = intervalCodetmp;

    // this.setState({ intervalCode: intervalCodetmp });
  }

  startBtnTimer() {
    this.startTimer();
    this.spanRef.current.textContent = "Stop";
  }
  stopBtnTimer() {
    // console.log(`stop2:${this.intervalCodeBis}`);
    clearInterval(this.intervalCodeBis);
    this.spanRef.current.textContent = "Start";
  }
  render() {
    return (
      <div ref={this.referenceTask} className="task-item">
        <div className="taskContent">
          <h4>{this.props.taskObj.titre}</h4>
          <p>{this.props.taskObj.description}</p>
        </div>
        <div className="timerContent">
          <span ref={this.spanTimerRef} className="timer">
            {this.state.timer.h}:
            {this.state.timer.m < 10
              ? `0${this.state.timer.m}`
              : this.state.timer.m}
            :
            {this.state.timer.s < 10
              ? `0${this.state.timer.s}`
              : this.state.timer.s}
          </span>{" "}
          <button
            onClick={() => {
              this.spanRef.current.textContent == "Stop"
                ? this.stopBtnTimer()
                : this.startBtnTimer();
              //   clearInterval(this.intervalCode);
            }}
            className="btn_Start"
          >
            <FontAwesomeIcon className="icon" icon={faClock} />
            <span ref={this.spanRef}>Stop</span>
          </button>{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              this.props.setStateTodo(this.props.IndexOfTask, false);
              let tabTextarea = Array.from(
                this.props.stateTodo.tabTaskActive[
                  this.props.IndexOfTask
                ].refTask.querySelectorAll("textarea")
              );
              let inputNode =
                this.props.stateTodo.tabTaskActive[
                  this.props.IndexOfTask
                ].refTask.querySelector("input");
              tabTextarea[0].value =
                this.props.stateTodo.tabTaskActive[
                  this.props.IndexOfTask
                ].titre;
              tabTextarea[1].value =
                this.props.stateTodo.tabTaskActive[
                  this.props.IndexOfTask
                ].description;
              inputNode.value = this.spanTimerRef.current.textContent;
              console.log(
                this.props.stateTodo.tabTaskActive[this.props.IndexOfTask]
              );
              this.props.stateTodo.tabTaskActive[
                this.props.IndexOfTask
              ].refTask.setAttribute("style", "visibility:visible");
              this.stopBtnTimer();
            }}
          >
            <FontAwesomeIcon className="icon" icon={faPencilAlt} />
          </button>
        </div>
      </div>
    );
  }
}
