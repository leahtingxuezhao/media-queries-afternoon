import React, { Component } from "react";
import "./Services.css";
import cart from "./asset/iconfinder_91_111055.png";
import laptop from "./asset/iconfinder_laptop_353418.png";
import lock from "./asset/iconfinder_lock_298817.png";

class Services extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="service-layer1">
        <div className="shc">
          <div className="service-header">SERVICES</div>
          <div className="service-comment">
            Lorem ipsum dolor sit amet consectetur.
          </div>
        </div>
        <div className="service-layer2">
          <div className="service-layer3">
            <div className="iconWrapper">
              <img src={cart} className="icon"></img>
            </div>
            <div className="service-topic">E-Commerce</div>
            <div className="service-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </div>
          </div>
          <div className="service-layer3">
            <div className="iconWrapper">
              <img src={laptop} className="icon"></img>
            </div>
            <div className="service-topic">Responsive Design</div>
            <div className="service-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </div>
          </div>
          <div className="service-layer3">
            <div className="iconWrapper">
              <img src={lock} className="icon2"></img>
            </div>
            <div className="service-topic">Web Security</div>
            <div className="service-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
