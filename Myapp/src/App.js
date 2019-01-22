import React, { Component } from 'react';
import Item from './component/item'
class App extends Component {
  state= {
name:'alaa',
age:25,
  item:[
      {id:1,number:999},
      {id:2,number:1000},
      {id:3,number:1001},
      {id:4,number:1002},
      {id:5,number:1003}

  ]
  }
  change = ()=>{
this.setState(
  {
    name:'ahmad',
    age:30
  }
)
  }
  render() {
    return (
      <div className="App">
       <button onClick={this.change}>cgange state</button>
       <p>{this.state.name}</p>
       <p>{this.state.age}</p>
       <Item item={this.state.item}/>
      </div>
    );
  }
}

export default App;
