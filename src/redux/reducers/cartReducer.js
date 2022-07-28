import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';
import alertify from 'alertifyjs';

const cartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            let addedProduct = state.find(product => product.id === action.payload.id);

            if (addedProduct) {
                const newState = state.map(cartItem => {
                    if (cartItem.id === action.payload.id) {
                        return Object.assign({}, addedProduct, { quantity: addedProduct.quantity + 1 })
                    }
                    return cartItem;
                })

                return newState;
            }

            else {

                return [...state, { ...action.payload, quantity: 1 }]
            }
        case actionTypes.DELETE_FROM_CART:

            const updatedCart = state.filter(product => product.id !== action.payload.id);

            return updatedCart;

        case actionTypes.RESET_CART:
            return action.payload;

        case actionTypes.INCREASE_NUMBER_OF_PRODUCT:
            const newIncreasedState = state.map(cartItem => {
                if (cartItem.id === action.payload.id) {
                    return Object.assign({}, action.payload,
                        { quantity: action.payload.quantity + 1, unitPrice: action.payload.unitPrice * 2 })
                }
                return cartItem;
            })
            return newIncreasedState;

        case actionTypes.DECREASE_NUMBER_OF_PRODUCT:

            const newDecreasedState = state.map(cartItem => {

                if (cartItem.id === action.payload.id && cartItem.quantity > 0) {
                    const objectifiaedProduct = Object.assign({}, action.payload,
                        { quantity: action.payload.quantity - 1, unitPrice: action.payload.unitPrice / 2 })
                    return objectifiaedProduct;
                }
                return cartItem;
            })

            if (action.payload.quantity === 1) {
                const updatedCart2 = newDecreasedState.filter(product => product.id !== action.payload.id);

                alertify.error(action.payload.productName + '-' + 'Removed from basket');

                return updatedCart2;
            }

            else {
                return newDecreasedState;
            }

        default:
            return state;
    }
}

export default cartReducer;