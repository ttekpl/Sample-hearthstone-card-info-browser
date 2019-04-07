import React, { Component } from "react";
import Wrap from "./layout/Wrap";
import SearchBar from "./layout/SearchBar";
import "./App.css";

class App extends Component {
  state = {
    value: "",
    isFounded: false,
    err: true
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = () => {
    const API = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${
      this.state.value
    }`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", API, true);
    xhr.setRequestHeader(
      "X-RapidAPI-Host",
      "omgvamp-hearthstone-v1.p.rapidapi.com"
    );
    xhr.setRequestHeader(
      "X-RapidAPI-Key",
      "1af4269631msh1f4ef5670b6b82ap1ce791jsnb1e9f4305432"
    );

    xhr.send(null);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const card = JSON.parse(xhr.response)[0];
        this.setState({
          err: false,
          card
        });
      } else {
      }
    };
  };

  render() {
    return (
      <div className="App">
        <SearchBar onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <main>
          <section>
            <Wrap data={this.state} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
