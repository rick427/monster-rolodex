import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import CardList from './components/cardList/CardList';

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
    const {monsters,loading} = this.state;

    if(loading){
      return <h1 style={{textAlign: 'center'}}>Loading...</h1>
    }
    else{
      return (
        <div className="App">
          <CardList name='Richard'>
            {monsters.map(monster => {
              return (
                <p key={monster.id}>{monster.name}</p>
              )
            })}
          </CardList>
        </div>
      )
    }

  }
}
export default App;
