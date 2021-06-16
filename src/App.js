import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/Card-list.component';
import SearchBox from './components/search-box/Search-box.component';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      monsters: [],
      searchField: '',
     
    }
  }
  componentWillMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))

  }

  handlechange = (e) => {
    this.setState({searchField: e.target.value})
  }
  
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Roledex</h1>
        <SearchBox 
        placeholder = "search monsters"
        handleChange = {this.handlechange}
        />
        <CardList monsters = {filteredMonsters} />
      </div>
    )
  }
}

export default App
