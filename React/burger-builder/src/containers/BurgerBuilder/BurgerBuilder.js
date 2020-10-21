import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSumary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
};
class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 4,
		purchaseable: false,
		purchasing: false,
		loading: false,
		error: false
	};

	componentDidMount() {
		axios.get('ingredients.json')
		.then(result => this.setState({ ingredients: result.data }))
		.catch(error => this.setState({ error: true }));
	}

	purchaseHandler = (purchasing) => {
		this.setState({ purchasing });
	};

	purchaseContinueHandler = () => {
		this.setState({
			loading: true
		});
		const { ingredients, totalPrice } = this.state;
		const order = {
			ingredients,
			price: totalPrice,
			customer: {
				name: 'Jelle Ceulemans',
				address: {
					street: 'Lierseveldstraat 48',
					zipCode: '2560',
					country: 'Belgium'
				},
				email: 'jelle.ceulemans@hotmail.com'
			},
			deliveryMethod: 'fastest'
		}
		axios.post('/orders.json', order)
			.then(response => this.setState({ loading: false, purchasing: false }))
			.catch(error => this.setState({ loading: false, purchasing: false }));
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



		const burgerContent = this.state.ingredients ? (<Aux>
			<Burger ingredients={this.state.ingredients} />
			<BuildControls
				price={this.state.totalPrice}
				ingredietAdded={this.addingredientHandler}
				ingredientRemoved={this.removeIngredientHandler}
				purchaseable={this.state.purchaseable}
				disabled={disableInfo}
				ordered={this.purchaseHandler}
			/>
		</Aux>) : <Spinner />;

		const modalContent = this.state.ingredients ? this.state.loading ? <Spinner /> : <OrderSummary
			ingredients={this.state.ingredients}
			purchaseCanceled={() => this.purchaseHandler(false)}
			purchaseContinued={this.purchaseContinueHandler}
			price={this.state.totalPrice}
		/> : null;

		return (
			<Aux>
				<Modal show={this.state.purchasing} clicked={this.purchaseHandler}>
					{modalContent}
				</Modal>
				{burgerContent}
			</Aux>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);
