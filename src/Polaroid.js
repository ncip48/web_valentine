import React from "react";
import TypeIt from "typeit-react";
import "./style/polaroid.css";

function Polaroid() {
  return (
    <div>
      <div className="wrapper">
        <h2 style={{ textAlign: "left", marginLeft: 20 }}>
          Happy valentine's day 2021 <em>❤</em>
        </h2>
        <div className="item">
          <div className="polaroid">
            <img src={require("./assets/img/1.jpeg")} alt="" />
            <div className="caption">Hey,</div>
          </div>
        </div>

        <div className="item">
          <div className="polaroid">
            <img src={require("./assets/img/2.jpeg")} alt="" />
            <div className="caption">Do u know?</div>
          </div>
        </div>

        <div className="item">
          <div className="polaroid">
            <img src={require("./assets/img/3.jpeg")} alt="" />
            <div className="caption">I very</div>
          </div>
        </div>

        <div className="item">
          <div className="polaroid">
            <img src={require("./assets/img/4.jpeg")} alt="" />
            <div className="caption">Love u</div>
          </div>
        </div>

        <TypeIt
          className="asdf"
          element={"h3"}
          options={{
            strings: [
              "Angelia,",
              "May this Valentine’s day be filled with love, understanding, contentment.",
              "Happy Valentine’s day. May you be showered with love today.",
              "I love you. What more can I say. You are my whole life.",
              "Each and every day, you are my Valentine today and forevermore.",
              "Whatever you say, whatever you do, I will always love you.",
              "You are the one I will always adore.",
              " ",
              "Made with <em>❤</em> - Herly</em>",
            ],
            speed: 80,
            waitUntilVisible: true,
          }}
        />

        {/* <div className="item">
          <div className="polaroid">
            <img src={require("./assets/img/3.jpeg")} />
            <div className="caption">Art</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Polaroid;
