import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import CardList from './components/cardList/CardList';

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
    const {monsters,loading,search} = this.state;

    if(loading){
      return <h1 style={{textAlign: 'center'}}>Loading...</h1>
    }
    else{
      return (
        <div className="App">
          <input 
             type="text" 
             name='search' 
             value={search} 
             onChange={e => this.setState({search: e.target.value})} 
             placeholder="Search for a monster" 
          />
          <CardList monsters={monsters}/>
        </div>
      )
    }

  }
}
export default App;
