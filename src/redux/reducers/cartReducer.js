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
            const updatedCart = state.filter(product => product.id != action.payload.id);

            return updatedCart;

        case actionTypes.RESET_CART:
            return action.payload;

        default:
            return state;
    }
}

export default cartReducer;