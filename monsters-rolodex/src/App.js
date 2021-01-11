import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state= {
      monster: [
        {
          name: 'Frankenstein',
          id: 'abc1'
        },
        {
          name: 'Dracula',
          id: 'abc2'
        },
        {
          name: 'Zombi',
          id: 'abc3'
        }
      ]
      
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monster.map(monster => 
            <h1>{monster.name}</h1>)
        }
        
      </div>
    );
  }
}

export default App;
