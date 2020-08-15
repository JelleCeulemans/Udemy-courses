import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
	<div className={classes.BuildControls}>
		<p>
			Current Price: <strong>{props.price.toFixed(2)}</strong>{' '}
		</p>
		{controls.map((control, i) => (
			<BuildControl
				key={i}
				label={control.label}
				added={() => props.ingredietAdded(control.type)}
				removed={() => props.ingredientRemoved(control.type)}
				disabled={props.disabled[control.type]}
			/>
		))}
		<button className={classes.OrderButton} disabled={!props.purchaseable} onClick={() => props.ordered(true)}>
			ORDER NOW{' '}
		</button>
	</div>
);

export default buildControls;
