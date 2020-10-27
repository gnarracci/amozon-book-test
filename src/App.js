import React, { Component } from "react";
import Menu from "./Menu";
import List from "./List";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Menu title="amozon" />
        <List />
      </div>
    );
  }
}
