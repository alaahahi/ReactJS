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
  changetext = (e) =>{
    this.setState(
      {
        name:e.target.value
      }
      )
  }
  submitok = (e) => {
    e.preventDefault();
    console.log(this.state.age)
  }
  render() {
    return (
      <div className="App">
       <button onClick={this.change}>cgange state</button>
       <p>{this.state.name}</p>
       <p>{this.state.age}</p>
       <Item item={this.state.item}/>
       <form onSubmit={this.submitok} >
        <input onChange={this.changetext} type="text" />
        <select onChange={this.changetext}>
          <option value="value1"> value1</option>
          <option value="value2"> value2</option>
          <option value="value3"> value3</option>
        </select>
        <button >Submei</button>
      </form>
      </div>

    );
  }
}

export default App;
