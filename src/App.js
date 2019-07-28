import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      loading: false
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
    console.log({...this.state})
    const {monsters,loading} = this.state;

    return (
      <div className="App">
        {monsters.map(monster => {
          return (
            <p key={monster.id}>{loading ? <span>Loading....</span> : monster.name}</p>
          )
        })}
      </div>
    )
  }
}
export default App;
