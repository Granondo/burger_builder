import React, { Component } from 'react'

import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

  componentWillUpdate() {
    console.log('[OrderSummary] will update');
  }

  render () {

    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (ingredientsKey) => {
        return (
          <li key={ingredientsKey}>
            <span style={{ textTransform: "capitalize" }}>
              {ingredientsKey}
            </span>
            : {this.props.ingredients[ingredientsKey]}
          </li>
        );
      }
    );

    return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total price: {this.props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button buttonType="Danger" clicked={this.props.purchaseCancelled}>
        Cancel
      </Button>
      <Button buttonType="Success" clicked={this.props.purchaseContinued}>
        Continue
      </Button>
    </Aux>
    )
  }
}

export default OrderSummary

