import React, {Component} from 'react'
import Aux from '../../../hoc/Auxx/Auxx'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component{

    
    // componentWillUpdate () {
    //     console.log('order summary will update')
    // }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey=>{
            return <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
                    </li> 
        })

        return (
            <Aux>
            <h3>YOUR ORDER</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
            <p> continue to checkout</p>
            <Button btnType='Danger' clicked={this.props.cancel}>CANCEL</Button>
            <Button btnType='Success' clicked={this.props.continue}>CONTINUE</Button>
        </Aux>
        )
    }
} 
export default OrderSummary