import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSumary/OrderSummary';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
};
class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 4,
		purchaseable: false,
		purchasing: false,
	};

	purchaseHandler = (purchasing) => {
		this.setState({ purchasing });
	};

	purchaseContinueHandler = () => {
		alert('You Continue');
	};

	updatePurchaseState = (ingredients) => {
		const sum = Object.values(ingredients).reduce((sum, el) => sum + el, 0);
		console.log(sum);
		this.setState({ purchaseable: sum > 0 });
	};

	addingredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;

		this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount > 0) {
			const updatedCount = oldCount - 1;
			const updatedIngredients = {
				...this.state.ingredients,
			};
			updatedIngredients[type] = updatedCount;
			const pricRemoval = INGREDIENT_PRICES[type];
			const oldPrice = this.state.totalPrice;
			const newPrice = oldPrice - pricRemoval;

			this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
			this.updatePurchaseState(updatedIngredients);
		}
	};
	render() {
		const disableInfo = {
			...this.state.ingredients,
		};

		for (let key in disableInfo) {
			disableInfo[key] = disableInfo[key] <= 0;
		}
		return (
			<Aux>
				<Modal show={this.state.purchasing} clicked={this.purchaseHandler}>
					<OrderSummary
						ingredients={this.state.ingredients}
						purchaseCanceled={() => this.purchaseHandler(false)}
						purchaseContinued={this.purchaseContinueHandler}
						price={this.state.totalPrice}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					price={this.state.totalPrice}
					ingredietAdded={this.addingredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					purchaseable={this.state.purchaseable}
					disabled={disableInfo}
					ordered={this.purchaseHandler}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
