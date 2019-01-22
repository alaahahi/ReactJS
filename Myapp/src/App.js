import React, { Component } from 'react';

class App extends Component {
  state= {
name:'alaa',
age:25
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
      </div>
    );
  }
}

export default App;
