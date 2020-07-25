import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoubdary";

class App extends Component {
  state = {
    persons: [
      { id: "abc", name: "Emmy", age: 20 },
      { id: "def", name: "Jelle", age: 22 },
      { id: "ghi", name: "Aiko", age: 3 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangeHandler = (name, id) => {
    const persons = [...this.state.persons];
    persons.map((person) => {
      if (person.userId === id) {
        person.name = name;
      }
      return person;
    });
    this.setState({ persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, i) => {
            return (
              <ErrorBoundary>
                <Person
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  click={() => this.deletePersonHandler(i)}
                  changed={(e) =>
                    this.nameChangeHandler(e.target.value, person.id)
                  }
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.Red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.Bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses}>This is really working!</p>
        <button
          className={btnClass.join(" ")}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
