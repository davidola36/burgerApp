import React, { Component } from 'react';
import Aux from '../../hoc/Auxx/Auxx'
import Burger from '../../components/Burger/Burger'
import BuildControls  from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese:0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    purchaseHandler = () => {
        console.log('purchase')
        this.setState({purchasing:true})
    }

    updatePurchaseState =  (ingredients) => {
        const sum = Object.keys(ingredients).map((igKeys)=>{
            return ingredients[igKeys]
        }).reduce((newsum,ele)=>{
            return newsum + ele;
        },0)
        this.setState({purchasable:sum>0})
    }

    addIngredient =(type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = newCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newprice = oldPrice + priceAddition
        this.setState({totalPrice:newprice,ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }

    purchaseCancelHandler = () => {
        console.log('canceled')
        this.setState({purchasing:false})
    }

    purchaseContinueHandler = () => {
        alert('you continued')
    }

    removeIngredrient = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0){
            return
        }
        const newCount = oldCount - 1
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = newCount
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newprice = oldPrice - priceDeduction
        this.setState({totalPrice:newprice,ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }

    render() {
        const disableInfo ={...this.state.ingredients}
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} cancel={this.purchaseCancelHandler}
                    totalPrice={this.state.totalPrice}
                    continue={this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls 
                    ingredientAddded={this.addIngredient}
                    ingredientDeducted={this.removeIngredrient}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder