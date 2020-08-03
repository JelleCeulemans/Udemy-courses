import React, { Component } from 'react';
import withClass from '../../../hoc/WithClass';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}

	static contextType = AuthContext;

	componentDidMount() {
		// this.inputElement.focus();
		this.inputElementRef.current.focus();
		console.log(this.context.authenticated);
	}

	render() {
		console.log('[Person.js] rendering...');
		return (
			<Aux classes={classes.Person}>
				{this.context.authenticated ? <p>Authenticated</p> : <p>Pleas log in</p>}
				<p onClick={this.click}>
					I'm {this.props.name} and I am {this.props.age} years old!
				</p>
				<p>{this.props.children}</p>
				<input
					// ref={(inputEl) => this.inputElement = inputEl}
					ref={this.inputElementRef}
					type="text"
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</Aux>
		);
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func,
};

// const person = (props) => {
//     console.log('[Person.js] rendering...');
//     return (
//         <div className={classes.Person} >
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name}/>
//         </div>
//     );
// }

export default withClass(Person, classes.Person);
