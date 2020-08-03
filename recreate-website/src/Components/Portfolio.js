import React, { Component } from "react";
import "./Portfolio.css";
import pic1 from "../Components/asset/01-thumbnail.jpg";
import pic2 from "../Components/asset/02-thumbnail.jpg";
import pic3 from "../Components/asset/03-thumbnail.jpg";
import pic4 from "../Components/asset/04-thumbnail.jpg";
import pic5 from "../Components/asset/05-thumbnail.jpg";
import pic6 from "../Components/asset/06-thumbnail.jpg";
import plusButton from "./asset/iconfinder_plus_216373.png";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div>
          <div className="portfolio-head">PORTFOLIO</div>
          <div className="portfolio-comment">
            Lorem ipsum dolor sit amet consectetur.
          </div>
        </div>
        <div className="portfolio-box">
          <div className="portfolio-container">
            <div className="portfolio-hover">
              <img src={plusButton} className="portfolio-plus"></img>
            </div>
            <img src={pic1} className="portfolio-pic"></img>

            <div className="portfolio-topic">Threads</div>
            <div className="portfolio-comment">Illustration</div>
          </div>
          <div className="portfolio-container">
            <div className="portfolio-hover">
              <img src={plusButton} className="portfolio-plus"></img>
            </div>
            <img src={pic2} className="portfolio-pic"></img>
            <div className="portfolio-topic">Explore</div>
            <div className="portfolio-comment">Graphic Design</div>
          </div>
          <div className="portfolio-container">
            <div className="portfolio-hover">
              <img src={plusButton} className="portfolio-plus"></img>
            </div>
            <img src={pic3} className="portfolio-pic"></img>
            <div className="portfolio-topic">Finish</div>
            <div className="portfolio-comment">Identity</div>
          </div>
          <div className="portfolio-container">
            <div className="portfolio-hover">
              <img src={plusButton} className="portfolio-plus"></img>
            </div>
            <img src={pic4} className="portfolio-pic"></img>
            <div className="portfolio-topic">Lines</div>
            <div className="portfolio-comment">Branding</div>
          </div>
          <div className="portfolio-container">
            <div className="portfolio-hover">
              <img src={plusButton} className="portfolio-plus"></img>
            </div>
            <img src={pic5} className="portfolio-pic"></img>
            <div className="portfolio-topic">Southwest</div>
            <div className="portfolio-comment">Website Design</div>
          </div>
          <div className="portfolio-container">
            <div className="portfolio-hover">
              <img src={plusButton} className="portfolio-plus"></img>
            </div>
            <img src={pic6} className="portfolio-pic"></img>
            <div className="portfolio-topic">Window</div>
            <div className="portfolio-comment">Photography</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
