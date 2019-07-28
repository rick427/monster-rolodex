import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import CardList from './components/cardList/CardList';
import Search from './components/searchBox/Search';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      loading: false,
      search: ''
    };
  }

  componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com';
    this.setState({loading: true});

    fetch(`${url}/users`)
     .then(res => res.json())
     .then(data => {
      this.setState({
        monsters: data,
        loading: false
      })
     });
  }

  render() {
    const {monsters, loading, search} = this.state;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(search.toLowerCase())
    )

    if(loading){
      return <h1 style={{textAlign: 'center'}}>Loading...</h1>
    }
    else{
      return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <Search 
            search={search} 
            handleChange={e => this.setState({search: e.target.value})} 
          />
          <CardList monsters={filteredMonsters}/>
        </div>
      )
    }

  }
}
export default App;
