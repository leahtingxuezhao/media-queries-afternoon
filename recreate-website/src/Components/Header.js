import React, { Component } from "react";
import "./Header.css";
import logo from "./navbar-logo.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 60;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop: isTop });
      }
    });
  }

  render() {
    console.log(this.state.isTop);
    return (
      <div>
        <div
          className={this.state.isTop ? "header-style-up" : "header-style-down"}
        >
          <img src={logo} className="header-logo"></img>
          <div className="header-navbar-container">
            <div>SERVICES</div>
            <div>PORTFOLIO</div>
            <div>ABOUT</div>
            <div>TEAM</div>
            <div>CONTACT</div>
          </div>
        </div>
        <div className="secondHeader-layer1">
          <div className="secondHeader-layer2">
            <div className="secondHeader-text1">Welcome To Our Studio!</div>
            <div className="secondHeader-text2">IT'S NICE TO MEET YOU</div>
            <button className="secondHeader-button">TELL ME MORE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
