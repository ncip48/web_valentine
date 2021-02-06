import React, { Component } from "react";
import { TwitterPicker } from "react-color";
import reactCSS from "reactcss";
import baffle from "baffle";
//import Baffle from "baffle-react";
import ReactAudioPlayer from "react-audio-player";

import "./style/App.css";
import "./style/Heart.css";
import "./style/Glitch.css";
import config from "./config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgcolor: "#ff6900",
      displayColorPicker: false,
      text: "",
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150,
      already: false,
    };
  }

  componentDidMount() {
    this.mengetik();
    this.setState({
      panggilan:
        config.panggilan[Math.floor(Math.random() * config.panggilan.length)],
    });
    this.getwaktu();
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChangeComplete = (color) => {
    this.setState({ bgcolor: color.hex });
    if (color.hex === "#000000") {
      if (!this.state.already) {
        // this.baffle();
      }
    } else {
      this.setState({ already: false });
    }
  };

  baffle = () => {
    this.setState({ already: true });
    let b = baffle(document.querySelector(".baffle"));
    b.set({
      characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
      speed: 120,
    });
    b.start();
    b.reveal(4000);
  };

  getwaktu = () => {
    setInterval(() => {
      var greeting;
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds

      if (hours >= 18) {
        greeting = "Evening";
      } else if (hours >= 15) {
        greeting = "Afternoon";
      } else if (hours >= 11) {
        greeting = "Afternoon";
      } else if (hours >= 5) {
        greeting = "Morning";
      } else if (hours >= 0) {
        greeting = "Night";
      }
      this.setState({
        curdate: hours + ":" + min + ":" + sec,
        greeting: greeting,
      });
    }, 0);
  };

  mengetik = () => {
    const { ucapan } = config;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % ucapan.length;
    const fullText = ucapan[i];

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 30 : 150,
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 500);
    } else if (isDeleting && text === "") {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1,
      });
    }
    setTimeout(this.mengetik, typingSpeed);
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "36px",
          height: "14px",
          borderRadius: "2px",
          background: `${this.state.bgcolor}`,
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "2",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    });

    return (
      <div
        className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"
        style={{
          //backgroundColor: localStorage.getItem("bgcolor"),
          backgroundColor: this.state.bgcolor,
          transition: "all .7s ease",
          WebkitTransition: "all .7s ease",
          MozTransition: "all .7s ease",
        }}
      >
        <header className="masthead">
          <nav className="navbar navbar-expand-md navbar-dark fixed-top">
            <div className="navbar-brand">
              <div style={styles.swatch} onClick={this.handleClick}>
                <div style={styles.color} />
              </div>
              {this.state.displayColorPicker ? (
                <div style={styles.popover}>
                  <div style={styles.cover} onClick={this.handleClose} />
                  <TwitterPicker
                    //color={this.state.color}
                    onChange={this.handleChangeComplete}
                    triangle={"hide"}
                    colors={config.colors}
                  />
                </div>
              ) : null}
            </div>
          </nav>
        </header>

        <main role="main" className="inner">
          <div>
            <div
              className={this.state.bgcolor === "#000000" ? "hidden" : "show"}
            >
              <div className="wrapper">
                <h1 className="jams">{this.state.curdate}</h1>
                <h2 className="panggilans">
                  Good {this.state.greeting} {this.state.panggilan}
                </h2>
                <h3 className="ucapans">
                  {this.state.text}
                  <span id="cursor" />
                </h3>
              </div>
              <ul className="heart-shape">
                <li>
                  <div className="pixelized--heart"></div>
                </li>
                <li>
                  <div className="pixelized--heart"></div>
                </li>
                <li>
                  <div className="pixelized--heart"></div>
                </li>
                <li>
                  <div className="pixelized--heart"></div>
                </li>
                <li>
                  <div className="pixelized--heart"></div>
                </li>
              </ul>
            </div>
            <div
              className={this.state.bgcolor !== "#000000" ? "hidden" : "show"}
            >
              <div className="wrapper-dark">
                <h1 className="jams">{this.state.curdate}</h1>
                <h1 className="hadeh">
                  <span
                    className="glitch"
                    data-text={
                      this.state.greeting === "Morning" ||
                      this.state.greeting === "Evening"
                        ? "Jadian Yukkk"
                        : this.state.greeting === "Night"
                        ? "Jadian Yuk"
                        : "Jadian Yukkkkkk"
                    }
                  >
                    Good {this.state.greeting + ", "}
                  </span>
                  {this.state.panggilan + "❣️"}
                </h1>
              </div>
            </div>
          </div>
        </main>
        <footer className="mastfoot mt-auto">
          <div className="inner">
            <div></div>
          </div>
        </footer>
        <ReactAudioPlayer
          style={{ height: 20, width: 100 }}
          src={require("./music.mp3")}
          autoPlay
          controls
        />
      </div>
    );
  }
}

export default App;
