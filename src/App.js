import React, { Component } from 'react';
import logo from './logo.svg';
import Person from "./Person/Person";
import Input from './Input/Input';
import Output from './Output/Output';
import './App.css';

class App extends Component {
  state={
    persons:[
      {id: "as1" ,name:'Mona', age:38},
      {id: "as2" ,name:'Sarah', age:27},
      {id: "as3" ,name:'Ali', age:48}
    ],
    shown: false,
    username:"Mona Lisa"
  }

toggleNameHandler = () => {
  console.log("toggled!");
  const isShow = this.state.shown
  this.setState({shown:!isShow})
}

nameChangeHandler = (event,id) => {
  const personIndex= this.state.persons.findIndex(p=>{
    return p.id === id;
  })
  const person = {...this.state.persons[personIndex]};
  person.name=event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex]=person;
  this.setState({persons:persons})
}

deleteNameHandler = (personIndex) => {
  //const persons=this.state.persons.slice();
  const persons=[...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons});
}

inputChangedHandler= (event) => {
  this.setState({
    username: event.target.value
  })
}

  render() {
    let persons=null
    if(this.state.shown){
      persons=(
        <div>
          {this.state.persons.map((person,index)=>{
              return <Person 
                name={person.name}
                age={person.age}
                changed={(event)=>this.nameChangeHandler(event,person.id)}
                clicked={()=>this.deleteNameHandler(index)}
                key={person.id}
              />
          })}
        </div>
      ) 
    }

    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.toggleNameHandler}>Toggle names</button>
      {persons}
      <br />
      <Input 
      changed={this.inputChangedHandler}
      currentName={this.state.username}/>
      <Output  
      userName={this.state.username}/>
      </div>
    );
  }
}

export default App;
