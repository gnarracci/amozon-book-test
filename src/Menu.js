import React, { Component } from "react";
import Search from "./Search";
import PanelAdd from "./PanelAdd";

export default class Menu extends Component {
  render() {
    return (
      <div className="container">
        <div className="subcontainer">
          <div className="logo">{this.props.title}</div>

          <div className="search">
            <Search />
          </div>

          <div className="actions">
            <button onClick={this.add} className="button btn-blu">
              + Añadir Nuevo Libro
            </button>
          </div>
        </div>
        <PanelAdd />
      </div>
    );
  }
}
