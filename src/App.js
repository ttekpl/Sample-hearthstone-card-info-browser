import React, { Component } from "react";
import Wrap from "./layout/Wrap";
import SearchBar from "./layout/SearchBar";
import "./App.css";

class App extends Component {
  state = {
    value: "",
    isFounded: false
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

    fetch(API, {
      mode: "no-cors",
      ContentType: "application/json",
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "application/json"
      }
    })
      .then(resp => {
        if (resp.ok) return resp;
        throw new Error("Error");
      })
      .then(resp => resp.json())
      .then(({ results }) => {
        this.setState(prev => ({
          name: results[0].name,
          gender: results[0].gender,
          img: results[0].image,
          status: results[0].status,
          id: results[0].id
        }));
      })
      .catch(err =>
        this.setState(prevState => ({
          err: true
        }))
      );
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
