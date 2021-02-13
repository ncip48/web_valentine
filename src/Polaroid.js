import React from "react";
import "./style/polaroid.css";

function Polaroid() {
  return (
    <div>
      <div className="wrapper">
        <div className="item">
          <div className="polaroid">
            <img src={require("./assets/img/1.jpeg")} alt="" />
            <div className="caption">I Miss London</div>
          </div>
        </div>

        <div className="item">
          <div className="polaroid">
            <img src={require("./assets/img/2.jpeg")} alt="" />
            <div className="caption">Love ballons</div>
          </div>
        </div>

        <div className="item">
          <div className="polaroid">
            <img src={require("./assets/img/3.jpeg")} alt="" />
            <div className="caption">Vintage life </div>
          </div>
        </div>

        <div className="item">
          <div className="polaroid">
            <img src={require("./assets/img/4.jpeg")} alt="" />
            <div className="caption">Summer Day</div>
          </div>
        </div>

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
