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
    const API = `https://rickandmortyapi.com/api/character/?name=${
      this.state.value
    }`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", API, true);
    xhr.send(null);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.response);
        this.setState({
          err: false,
          name: data.results[0].name,
          img: data.results[0].image
        });
      } else {
        this.setState({
          err: true
        });
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
