import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <div className="container">
        <div className="subcontainer">
          <div className="logo">{this.props.title}</div>

          <div className="search"></div>

          <div className="actions"></div>
        </div>
      </div>
    );
  }
}
