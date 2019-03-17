import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import MainContainer from './MainContainer';
import DogForm from './MainContainer/DogForm'

class App extends Component {
  constructor() {
    super()

    this.state = {
      logged: false,
      username: '',
      dogs: []
    }
  }

  handleLogin = (username) => {
    console.log('working')
      
    this.setState ({
      username: username,
      logged: true
    })
  }

  addDog = (dog) => {
    this.setState({
      dogs: [...this.state.dogs, dog]
    })
  }

  deleteDog = dogName => {
    this.setState({
    dogs: [...this.state.dogs].filter(d => d.name !== dogName)
    })
  }

  render() {
    console.log(this.state)
    const { dogs } = this.state
    return (
      <div className="App">
        {this.state.logged ?  <DogForm addDog={this.addDog} name={this.state.name} breed={this.state.breed} dog={this.state.age}/> : <Login handleLogin={this.handleLogin}/> }
        {
          dogs.map((d, i) => {
            return (
              <div>
                <h1>{d.age}</h1>
                <h1>{d.breed}</h1>
                <h1>{d.name}</h1>
                <button name="deleteDog" onClick = {() => this.deleteDog(d.name)}>Delete Dog</button>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
