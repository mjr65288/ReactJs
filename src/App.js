import "./styles.css";
import React, { Component } from "react";
import CardList from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Frankestain", id: 1 },
        { name: "Dracula", id: 2 },
        { name: "Zombie", id: 3 }
      ],
      searchField: ""
    };
  }

  getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    this.setState({ monsters: users });
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        {/* <input
          type="search"
          placeholder="search monsters"
          onChange={(e) => {
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state.searchField)
            );
          }}
        /> */}
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonters}></CardList>
      </div>
    );
  }
}

export default App;
