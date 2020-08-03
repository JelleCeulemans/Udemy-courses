import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context'; 

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}

	state = {
		persons: [
			{ id: 'abc', name: 'Emmy', age: 20 },
			{ id: 'def', name: 'Jelle', age: 22 },
			{ id: 'ghi', name: 'Aiko', age: 3 },
		],
		otherState: 'some other value',
		showPersons: false,
		showCockpit: true,
		changeCounter: 0,
		authenticated: false,
	};

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	nameChangeHandler = (name, id) => {
		const persons = [...this.state.persons];
		persons.map((person) => {
			if (person.id === id) {
				console.log(person);
				person.name = name;
			}
			return person;
		});
		this.setState((prevState, props) => {
			return {
				persons,
				changeCounter: prevState.changeCounter + 1,
			};
		});
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

	loginHandler = () => {
		this.setState({ authenticated: true });
	};

	render() {
		console.log('[App.js] render');
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<Persons
					clicked={this.deletePersonHandler}
					changed={this.nameChangeHandler}
					persons={this.state.persons}
				/>
			);
		}

		return (
			<Aux classes={classes.App}>
				<button
					onClick={() => {
						this.setState({ showCockpit: !this.state.showCockpit });
					}}
				>
					Toggle Cockpit
				</button>
				<AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
				{this.state.showCockpit ? (
					<Cockpit
						title={this.props.appTitle}
						showPersons={this.state.showPersons}
						personsLength={this.state.persons.length}
						clicked={this.togglePersonsHandler}
					/>
				) : null}
				{persons}
				</AuthContext.Provider>
			</Aux>
		);
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	shouldComponentUpdate() {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}
}

export default withClass(App, classes.App);
