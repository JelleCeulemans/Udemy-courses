import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Emmy', age: 20 },
      { name: 'Jelle', age: 22 },
      { name: 'Marina', age: 59 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {

    this.setState({
      persons: [
        { name: 'Emmy', age: 20 },
        { name: newName, age: 30 },
        { name: 'Marina', age: 59 }
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Emmy Bruynseels', age: 20 },
        { name: event.target.value, age: 22 },
        { name: 'Marina Ceulemans', age: 59 }
      ]
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Jelle Ceulemans')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler('Jelle C.')}
          changed={this.nameChangeHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;



// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Emmy', age: 20 },
//       { name: 'Jelle', age: 22 },
//       { name: 'Marina', age: 59 },
//     ]
//   });

//   const [otherState, setOtherState] = useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Emmy', age: 20 },
//         { name: 'Jelle', age: 30 },
//         { name: 'Marina', age: 59 },
//       ]
//     });
    
//   }

//   const setPersons = () => {
//     this.persons = personsState.persons.map((person, i) => {
//       return (<Person name={person.name} age={person.age} key={i}/>);
//     })
//   }

//   setPersons();
//   return (
    
//     <div className="App">
//      <h1>Hi, I'm a React App</h1>
//      <p>This is really working!</p>
//      <button onClick={switchNameHandler}>Switch Name</button>
//      {this.persons}
//     </div>
//   );

// export default app;
