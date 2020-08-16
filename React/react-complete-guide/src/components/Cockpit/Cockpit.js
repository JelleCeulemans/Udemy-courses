import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
	const toggleButtonRef = useRef(null);
	const authContext = useContext(AuthContext);

	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		toggleButtonRef.current.click();
		return () => {
			console.log('[Cockpit.js] cleanup work in useEffect');
		};
	}, []);

	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect');
		return () => {
			console.log('[Cockpit.js] cleanup work in 2nd useEffect');
		};
	});

	let btnClass = [classes.Button];
	if (props.showPersons) {
		btnClass.push(classes.Red);
	}
	const assignedClasses = [];
	if (props.personsLength <= 2) {
		assignedClasses.push(classes.Red);
	}
	if (props.personsLength <= 1) {
		assignedClasses.push(classes.Bold);
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses}>This is really working!</p>
			<button
				ref={toggleButtonRef}
				className={btnClass.join(' ')}
				onClick={props.clicked}
			>
				Toggle Persons
			</button>
			<button onClick={authContext.login}>Log in</button>
		</div>
	);
};

export default React.memo(cockpit);
