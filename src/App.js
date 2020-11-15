import React, { Component } from "react";
import "./Menu.css";
import "./App.css";
import Menu from "./Menu";
import List from "./List";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          id: 0,
          rating: 4,
          title: "Harry Potter y el Cáliz de Fuego",
          image: "libro01.jpg",
        },
        {
          id: 1,
          rating: 3,
          title: "The Shining",
          image: "libro02.jpg",
        },
        {
          id: 2,
          rating: 5,
          title: "Código Da Vinci",
          image: "libro03.jpg",
        },
        {
          id: 3,
          rating: 5,
          title: "El Principito",
          image: "libro04.jpg",
        },
        {
          id: 4,
          rating: 5,
          title: "Sobrenatural",
          image: "libro05.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <Menu title="amozon" />
        <List items={this.state.books} />
      </div>
    );
  }
}
