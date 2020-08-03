import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log(props);
  // }

  // Implemented by PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   return nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //     ? true
  //     : false;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapchot!' };
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, i) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          click={() => this.props.clicked(i)}
          changed={(e) => this.props.changed(e.target.value, person.id)}
        />
      );
    });
  }

  // componentWillUpdate() {

  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }
}

// const persons = (props) => {
//   console.log('[Persons.js] rendering...');
//   return props.persons.map((person, i) => {
//     return (
//       <Person
//         name={person.name}
//         age={person.age}
//         key={person.id}
//         click={() => props.clicked(i)}
//         changed={(e) => props.changed(e.target.value, person.id)}
//       />
//     )
//   });
// }

export default Persons;
